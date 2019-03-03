[Codesandbox](https://codesandbox.io) Example Links
-----------

## Description

Insert/update "Run this example" links next to each _magically_ tagged code block in a markdown file (typically `README.md`).

## Demo

[this](./spec/fixture.md) becomes [this](./spec/expected.md)

## Usage

- manually create sandbox for your example
- download it into your project
- paste the content of an example file in `README.md` with special reference to the downloaded project
- repeat for all examples
- `npx codesanbox-example-links -i README.md`

### Debug

At the time of this writing, codesandbox api is sort of short on validation errors, so if generated links don't work, you might find some additional debug info being helpful. Set `DEBUG=codesanbox-example-links` to get some.

## TODO

- replace only part of the file with the example
