const fs = require('fs')
const path = require('path')
const glob = require('glob')
const {escape} = require('querystring')
const {getParameters} = require('codesandbox/lib/api/define')

function getProjectFiles (projectPath, {newFile, newContent}) {
  const filePaths = glob.sync('**/*', {nodir: true, cwd: projectPath, dot: true})
  const files = filePaths.reduce((result, filePath) => {
    const content = fs.readFileSync(path.join(projectPath, filePath), {encoding: 'utf-8'})
    result[filePath] = {content}
    return result
  }, {})
  files[newFile] = {content: newContent}
  return files
}

module.exports = (input, {basePath = '.'} = {}) => {
  const output = input.split('\n').reduce((result, line) => {
    if (!line.match('https://codesandbox.io/api/v1/sandboxes/define')) {
      result.lines.push(line)
    }

    if (result.currentExampleLines) {
      if (line.match(/``` *$/)) {
        const templatePath = path.resolve(
          process.cwd(),
          basePath,
          result.currentProject
        )
        const newContent = result.currentExampleLines.join('\n')
        const files = getProjectFiles(templatePath, {newFile: result.currentNewFile, newContent})
        const parameters = getParameters({files})

        const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=${escape(`module=${result.currentNewFile}`)}`
        const link = `<a href="${url}" target="_blank" rel="noopener noreferrer">Run this example</a>`
        result.lines.push(link)

        delete result.currentExampleLines
        delete result.currentProject
      } else {
        result.currentExampleLines.push(line)
      }
    }

    const [, codeExampleConfig] = line.match(/```\w+ +(\{ ?"codeExample".*)/) || []

    if (codeExampleConfig) {
      const {project, file} = JSON.parse(codeExampleConfig).codeExample
      result.currentProject = project.replace(/^\//, '')
      result.currentNewFile = file
      result.currentExampleLines = []
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
