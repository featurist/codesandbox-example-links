const assert = require('assert').strict
const fs = require('fs')
const generateLinks = require('..')

describe('generate links', function () {
  it('generates codesanbox links from code snippets', function () {
    const input = fs.readFileSync(`${__dirname}/fixture.md`, {encoding: 'utf-8'})
    const expected = fs.readFileSync(`${__dirname}/expected.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input, {basePath: 'spec'})
    assert.equal(actual, expected)
  })

  it('modifies existing links', function () {
    let input = fs.readFileSync(`${__dirname}/fixture.md`, {encoding: 'utf-8'})
    input = input.replace('your', 'YOUR')
    const expected = fs.readFileSync(`${__dirname}/expected_modified.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input, {basePath: 'spec'})
    assert.equal(actual, expected)
  })
})
