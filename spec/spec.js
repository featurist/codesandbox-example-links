const fs = require('fs')
const generateLinks = require('..')
const assertSnapshot = require('./assertSnapshot')

describe('generate links', function () {
  it('generates a link from a magic comment', function () {
    const input = fs.readFileSync(`${__dirname}/fixture.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input)
    assertSnapshot('single_link.md', actual)
  })

  it('generates an iframe from a magic comment', function () {
    const input = fs.readFileSync(`${__dirname}/fixture.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input, {iframe: true})
    assertSnapshot('single_iframe.md', actual)
  })

  it('inserts snippet fragment with start line', function () {
    const input = fs.readFileSync(`${__dirname}/fixture_fragment_start_line.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input)
    assertSnapshot('fragment_start_line.md', actual)
  })

  it('inserts snippet fragment with start line and end line', function () {
    const input = fs.readFileSync(`${__dirname}/fixture_fragment_start_end_line.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input)
    assertSnapshot('fragment_start_end_line.md', actual)
  })
})
