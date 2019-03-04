#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const debug = require('debug')('codesandbox-example-links')
const {escape} = require('querystring')
const {getParameters} = require('codesandbox/lib/api/define')

function getProjectFiles (projectPath) {
  const filePaths = glob.sync('**/*', {nodir: true, cwd: projectPath, dot: true})
  const files = filePaths.reduce((result, filePath) => {
    const content = fs.readFileSync(path.join(projectPath, filePath), {encoding: 'utf-8'})
    result[filePath] = {content}
    return result
  }, {})
  return files
}

function exampleContent ({insertAfterLine, exampleFile, exampleLines, existingFile}) {
  let content

  if (insertAfterLine && existingFile) {
    content = existingFile.content.split('\n').reduce((result, line, lineNumber) => {
      if (lineNumber === insertAfterLine) {
        result.push(...exampleLines)
      }
      result.push(line)
      return result
    }, []).join('\n')
  } else {
    content = exampleLines.join('\n')
  }
  return {content}
}

module.exports = (input, {basePath = '.'} = {}) => {
  const output = input.split('\n').reduce((result, line) => {
    if (!line.match('https://codesandbox.io/api/v1/sandboxes/define')) {
      result.lines.push(line)
    }

    if (result.current) {
      if (line.match(/``` *$/)) {
        const templatePath = path.resolve(
          process.cwd(),
          basePath,
          result.current.project
        )
        const files = getProjectFiles(templatePath)
        files[result.current.exampleFile] = exampleContent(
          Object.assign({existingFile: files[result.current.exampleFile]}, result.current)
        )

        debug(files)
        const parameters = getParameters({files})

        const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=${escape(`module=${result.current.exampleFile}`)}`
        const link = `<a href="${url}" target="_blank" rel="noopener noreferrer">Run this example</a>`
        result.lines.push(link)

        delete result.current
      } else {
        result.current.exampleLines.push(line)
      }
    }

    const [, codeExampleConfig] = line.match(/```\w+ +(\{ ?"codeExample".*)/) || []

    if (codeExampleConfig) {
      const {project, file, line} = JSON.parse(codeExampleConfig).codeExample
      result.current = {
        project: project.replace(/^\//, ''),
        exampleFile: file,
        insertAfterLine: line,
        exampleLines: []
      }
    }

    return result
  }, {lines: []})

  return output.lines.join('\n')
}

if (!module.parent) {
  const argv = require('yargs')
    .command('$0 <file>', 'Generate codesanbox links for code examples', yargs => {
      yargs
        .options({
          'in-place': {
            alias: 'i',
            describe: 'Modify file in place',
            type: 'boolean'
          },
          'base-path': {
            describe: 'Base path to resolve relative paths specified in "project" properties',
            type: 'string'
          }
        })
    }).argv

  const inputFilePath = path.resolve(process.cwd(), argv.file)
  const input = fs.readFileSync(inputFilePath, {encoding: 'utf-8'})
  const output = module.exports(input, {basePath: argv.basePath})

  if (argv.inPlace) {
    fs.promises.truncate(inputFilePath, 0).then(() => {
      return fs.writeFileSync(
        inputFilePath,
        output
      )
    }).catch(e => {
      console.error(e)
      process.exit(1)
    })
  } else {
    console.log(output)
  }
}
