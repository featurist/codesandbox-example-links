const path = require('path')
const fs = require('fs')
const assert = require('assert').strict

const snapshotsPath = path.join(__dirname, 'snapshots')

module.exports = function assertSnapshot (name, actual) {
  const {name: base, ext} = path.parse(name)
  const actualPath = `${snapshotsPath}/${base}_actual${ext}`
  fs.writeFileSync(actualPath, actual)

  try {
    const expected = fs.readFileSync(`${snapshotsPath}/${base}_expected${ext}`, {encoding: 'utf-8'})
    assert.equal(actual, expected)
  } catch (e) {
    console.info(`Generated actual: ${actualPath}`)
    throw e
  }
}
