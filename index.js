#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const debug = require('debug')('codesandbox-example-links')
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

module.exports = (input, {iframe} = {}) => {
  const output = input.split('\n').reduce((result, line) => {
    const [isSnippetMatch, snippetLink] = line.match(/\[view code\]\((.*)\)/) || []

    if (isSnippetMatch) {
      const snippetPath = path.join(process.cwd(), snippetLink.replace(/#.*$/, ''))
      const snippetContent = fs.readFileSync(snippetPath, {encoding: 'utf-8'}).split('\n')

      const clipLines = line.match(/#L(\d*)(-L(\d*))?/)
      const clipStart = clipLines ? Number(clipLines[1]) - 1 : 0
      const clipEnd = clipLines && clipLines[3] ? Number(clipLines[3]) : 0

      const fileExt = path.parse(snippetPath).ext
      const lang = fileExt.slice(1)
      result.push('```' + lang)

      if (clipEnd) {
        result.push(...snippetContent.slice(clipStart, clipEnd))
      } else {
        result.push(...snippetContent.slice(clipStart))
      }

      if (result[result.length - 1] === '') {
        result.splice(-1)
      }

      result.push('```')
    }

    const [isSanbdboxMatch, sandboxLink] = line.match(/\[codesandbox\]\((.*)\)/) || []

    if (isSanbdboxMatch) {
      const sandboxProjectPath = path.join(
        process.cwd(),
        sandboxLink
      )
      const files = getProjectFiles(sandboxProjectPath)
      debug('Generating link for files', files)
      const parameters = getParameters({files})

      const url = `https://codesandbox.io/api/v1/sandboxes/define?${iframe ? 'embed=1&' : ''}parameters=${parameters}`
      const link = iframe
        ? `<iframe src="${url}" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`
        : `<a href="${url}" target="_blank" rel="noopener noreferrer">Run this example</a>`

      result.push(link)
    }

    if (!isSanbdboxMatch && !isSnippetMatch) {
      result.push(line)
    }

    return result
  }, [])

  return output.join('\n')
}

if (!module.parent) {
  const argv = require('yargs')
    .command('$0 [files..]', 'Generate codesanbox links/iframes and code snippets for documentation markdown', yargs => {
      yargs
        .options({
          'iframe': {
            describe: 'iframes instead of links',
            type: 'boolean'
          },
          'output-dir': {
            describe: 'output directory',
            type: 'string',
            required: true
          }
        })
    }).argv

  argv.files.forEach(file => {
    const inputFilePath = path.resolve(process.cwd(), file)
    const inputFileName = path.parse(file).base

    const input = fs.readFileSync(inputFilePath, {encoding: 'utf-8'})
    const output = module.exports(input, argv)

    fs.writeFileSync(path.join(process.cwd(), argv.outputDir, inputFileName), output)
  })
}
