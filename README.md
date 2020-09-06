[Codesandbox](https://codesandbox.io) Example Links [![Codeship Status for featurist/codesandbox-example-links](https://app.codeship.com/projects/6176c9c0-20f5-0137-6e2c-62b911cd023e/status?branch=master)](https://app.codeship.com/projects/329497)
-----------

A CLI/API to replace magic placeholders in a markdown files with:

- `iframe` with a codesandbox project
- "Run this example" link to a codesandbox project
- code snippet extracted from a file on a file system

## Example

Given the following project structure:

```
.
├── demo-project
│   ├── index.html
│   ├── package.json
│   └── src
│       ├── app.jsx
│       └── index.js
├── docs
│   └── README.md
```

Where `docs/README.md` looks like this:

```markdown
## An Example

[view code](/demo-project/src/index.js)

[codesanbox](/demo-project)

```

Then running:

```sh
npx codesandbox-example-links --output-dir=. ./docs/README.md
```

Will produce a `./README.md` with the following contents:

    ## An Example

    ```js
    import * as hyperdom from "hyperdom";
    import App from "./app";

    hyperdom.append(document.body, new App());

    ```

    <a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKAdAIwIZplATgYyVHwHsA7AFxkqRGAB0yACJ-kAB13hgrjcSYBtRixZtqANzYAaEaLYALAJ7sYuACYkAtmzkBdRgF8Qh6SAhl1MAB4oFFLVCIhSlahVoAeAIQARAPIAwgAqAJoACgCiTPaOAHyMnrFQCWSJCjAY6qn0FJ4UEBSwceEYBDhMAMoYlmgk1p4A9AVFMDl5WjwYTPgKZXA8ALxsAKrBAGIAtAAcbEyNqU0ZWTlknnXqSu2e6hASTBDqwyAY7OxscU27Equ5nnD4uBDsFExwBMfv-I0WVrYAVnwQNtGg8ni9Fo0NltGIlGslUiYzOwMPgANYYADmMBQgPIzlcVBoiDocjYZAwnX4rBAylUGm0kxslPYsBkZJAEjUcAg5GpbAAjCgAAwi9nMGlWMHPAp8pA0gASKjUmi0TCsWhITAAUpVxWIQFoMBZ-eZLDY7A4oPqadKXkCBAwJQa4BQyhRTSjylADubbMkmJNJiRVGkQLJnTS0ABXaDqT1lfAVGNx31_S2OXQS0wcqyhqxkfAQeDUp2iKNYHCTTjcCiTOkq7SmoUAFjF4bkBobDJ08rYUAwVFdWZYOYlbCsEl8MHz1CLJflZfkHETVZjllguFNA6HHpAcjHBrRMCUAHcSBoHUIDGRDIwkSAvo1TuxcXBrATyESPCSIFp2BerwAFRMBgcAxMqPZMGAuDaDS3aqmwADcsJkDYAG4K8VhgBg0ZQK8-ADnA4EAIJnEwS5cOauAABQAJQUZ2TBcBQ0a4MwOx7Kk5YsJ4A7YCkp59BQADk4FKCQbFMBSnQAPxME0_E4NxPGeBY7DRq8FDKscVDWHuTBoL8FiYrpCgQHAKAyTAcwLExvHXHE5kURQ5mWdZhhXFxTFeTcKHZkY96mI-BA_H6b6fm4xLmP-gFMCBYEQfSqrQbBaqKJBiEgP5f4Ya8ZHsKlcFsCgz5nMhqEIdoKAvtQ6g0Zo-DRp0lDoCQmzSNJMCnkwBX0XR_kmIYhhAA" target="_blank" rel="noopener noreferrer">Run this example</a>
    
### Real world example

https://hyperdom.org

## Usage

- manually create sandbox for your example
- download it into your project
- insert magic links in markdown files
- repeat for all examples
- `npx codesandbox-example-links --output-dir=./dist docs/*.md`

The above command renders links. Add `--iframe` option to generate iframes instead.

### Magic links

`[codesanbox](/demo-project)` - turns into either link or an iframe, depending on `--iframe` option.

`[codesanbox](/demo-project?module=/path/to/file)` - as above, but opens the project on a specific file. Other [codesanbdox embed options](https://codesandbox.io/docs/embedding#embed-options) can be specified too.

`[view code](/path/to/file.js)` - turns into a code snippet containing file.js.

`[view code](/path/to/file.jsL#3)` - turns into a code snippet containing a fragment of file.js starting at line 3 onwards.

`[view code](/path/to/file.jsL#3-L10)` - turns into a code snippet containing a fragment of file.js, lines 3 to 10.

### API

```js
const generateLinks = require('codesandbox-example-links')

const input = fs.readFileSync('readme.md', {encoding: 'utf-8'})
const output = generateLinks(input, {iframe: true})
```

### Debug

As of this writing, codesandbox api is sort of short on validation errors. So if generated links don't work, you might find some additional debug info useful. Set `DEBUG=codesandbox-example-links` to get some.
