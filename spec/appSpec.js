const fs = require('fs')
const generateLinks = require('..')
const assertSnapshot = require('./assertSnapshot')

describe('generate links', function () {
  it('generates codesanbox link from code block', function () {
    const input = fs.readFileSync(`${__dirname}/fixture.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input, {basePath: 'spec'})
    assertSnapshot('single_link.md', actual)
  })

  it('modifies existing links', function () {
    let input = fs.readFileSync(`${__dirname}/fixture.md`, {encoding: 'utf-8'})
    input = input.replace('your', 'YOUR')
    const actual = generateLinks(input, {basePath: 'spec'})
    assertSnapshot('single_link_modified.md', actual)
  })

  it('generates link from each code block', function () {
    const input = fs.readFileSync(`${__dirname}/fixture_multiple.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input, {basePath: 'spec'})
    assertSnapshot('multiple_links.md', actual)
  })

  it('inserts code sample into the existing file in the template project', function () {
    const input = fs.readFileSync(`${__dirname}/fixture_layout.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input, {basePath: 'spec'})
    assertSnapshot('partial_file.md', actual)
  })

  it('generates one link for two code blocks referencing different files', function () {
    const input = fs.readFileSync(`${__dirname}/fixture_two_files_in_one_link.md`, {encoding: 'utf-8'})
    const actual = generateLinks(input, {basePath: 'spec'})
    assertSnapshot('two_files_in_one_link.md', actual)
  })
})
