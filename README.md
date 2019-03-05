[Codesandbox](https://codesandbox.io) Example Links [![Codeship Status for featurist/codesandbox-example-links](https://app.codeship.com/projects/6176c9c0-20f5-0137-6e2c-62b911cd023e/status?branch=master)](https://app.codeship.com/projects/329497)
-----------

## Description

Insert/update "Run this example" links next to each _magically_ tagged code block in a markdown file (typically `README.md`).

## Demo

Given the following project structure:

```
.
├── README.md
└── demo-project
    ├── index.html
    └── package.json
```

Where `README.md` looks like [this](./spec/fixture.md), running

```sh
npx codesandbox-example-links -i README.md
```

Adds a link to generate codesanbox based on the `./demo-project` contents and the code block from the `README.md`.

Modified `README.md` looks like [this](./spec/expected.md)

## Usage

- manually create sandbox for your example
- download it into your project
- paste the content of an example file in `README.md` with special reference to the downloaded project
- repeat for all examples
- `npx codesandbox-example-links -i README.md`

### Magic comment format

It's a bit of JSON after language specified tag. E.g.:

```
```jsx {"codeExample": {"project": "demo-project", "file": "src/index.jsx", "line": 5}}
```

`line` is optional. If specified, the contents of the code block are inserted into the contents of the `file` after that line number. Make sure `file` exists in the `project`.

### API

```javascript
const generateLinks = require('codesandbox-example-links')

const input = fs.readFileSync('readme.md', {encoding: 'utf-8'})
const output = module.exports(input, {basePath: 'docs'})
```

### Debug

At the time of this writing, codesandbox api is sort of short on validation errors. So if generated links don't work, you might find some additional debug info useful. Set `DEBUG=codesandbox-example-links` to get some.
