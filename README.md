[Codesandbox](https://codesandbox.io) Example Links
-----------

## Description

This cli tool inserts/updates a "Run this example" link next to each _magically_ tagged code block in a markdown file (typically `README.md`).

## Demo

[this](./spec/fixture.md) becomes [this](./spec/expected.md)

## Usage

- manually create sandbox for your example
- download it into your project
- paste the content of an example file in `README.md` with special reference to the downloaded project
- repeat for all examples
- `npx codesanbox-example-links -i README.md`

## TODO

- replace only part of the file with the example
