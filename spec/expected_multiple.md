## An Example

```jsx {"codeExample": {"project": "demo-project", "file": "src/index.jsx"}}
import * as hyperdom from "hyperdom";

class App {
  render() {
    return <div>
      <label>what's your name? </label>
      <input type="text" binding="this.name" />
      <div>hi {this.name}</div>
    </div>;
  }
}

hyperdom.append(document.body, new App());
```
<a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKAdAIwIZplATgYyVHwHsA7AFxkqRGAB0yACJ-kAB13hgrjcSYBtRixZtqANzYAaEaLYALAJ7sYuACYkAtmzkBdRgF8Qh6SAhl1MAB4oFFLVCIhSlahVoAeAIQARAPIAwgAqAJoACgCiTPaOAHyMnrFQCWSJCjAY6qn0FJ4UEBSwceEYBDhMAMoYlmgk1p4A9AVFMDl5WjwYTPgKZXA8ALxsAKrBAGIAtAAcbEyNqU0ZWTlknnXqSu2e6hASTBDqwyAY7OxscU27Equ5nnD4uBDsFExwBMfv-I0WVrYAVnBrBdGHdGg8ni9Fo0NltQWtGslUiYzOwMPgANYYADmMBQgPIzlcVBoiDocjYZAwnX4rBAylUGm0kxs1PYsBkFJAEjUcAg5FpbAAjCgAAxiznMOlWCHPAoCpB0gASKjUmi0TCsWhITAAUpVJWIQFoMBZBeZLDY7A4oIa6bKXnxFQwpUa4BQyhRzWjylADpbbMkmJNJiRVGkQLJXXS0ABXaDqb1lfAVOMJ_1_a2OXRS0xcqzhqxkfAQeC0l2iGNYHCTTjcCiTBlq7TmkUAFglkbkRqbTJ0irYUAwVHdOZYealbCsEl8MEL1BLZed3bpPpTUEmccssFw5qHI69IDkE6NGJgSgA7iQNE6BIIDGRDIwUSAvj8A_igUTyCSPGSIFo7DXq8ABUTAYHAMSqn2TBgLg2h0r26psAA3PC-BDnAkEAIJnEwFZMFwlq4AAFAAlPhK5cBQsa4MwOx7KklYsJ4Q7YCkF59BQADkkFKCQtFMFSnQAPxME0bE4ExzGeBY7Cxq8FCqscVDWIeTBoL8FjYipCgQHAKDCTAcwLCuLHXHEen4RQekGUZhhXIxK6OTcaG5kY8JIdoKCnIWJGaPgsadJQ6AkJs0hCTAF5MLh7DkWRKEmIYhhAA&query=module%3Dsrc%2Findex.jsx" target="_blank" rel="noopener noreferrer">Run this example</a>

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.

```jsx {"codeExample": {"project": "demo-project", "file": "src/index.jsx"}}
import * as hyperdom from "hyperdom";

class App {
  render() {
    return <div>
      <label>what's YOUR name? </label>
      <input type="text" binding="this.name" />
      <div>hi {this.name}</div>
    </div>;
  }
}

hyperdom.append(document.body, new App());
```
<a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKAdAIwIZplATgYyVHwHsA7AFxkqRGAB0yACJ-kAB13hgrjcSYBtRixZtqANzYAaEaLYALAJ7sYuACYkAtmzkBdRgF8Qh6SAhl1MAB4oFFLVCIhSlahVoAeAIQARAPIAwgAqAJoACgCiTPaOAHyMnrFQCWSJCjAY6qn0FJ4UEBSwceEYBDhMAMoYlmgk1p4A9AVFMDl5WjwYTPgKZXA8ALxsAKrBAGIAtAAcbEyNqU0ZWTlknnXqSu2e6hASTBDqwyAY7OxscU27Equ5nnD4uBDsFExwBMfv-I0WVrYAVnBrBdGHdGg8ni9Fo0NltQWtGslUiYzOwMPgANYYADmMBQgPIzlcVBoiDocjYZAwnX4rBAylUGm0kxs1PYsBkFJAEjUcAg5FpbAAjCgAAxiznMOlWCHPAoCpB0gASKjUmi0TCsWhITAAUpVJWIQFoMBZBeZLDY7A4oIa6bKXnxFQwpUa4BQyhRzWjylADpbbMkmJNJiRVGkQLJXXS0ABXaDqb1lfAVOMJ_1_a2OXRS0xcqzhqxkfAQeC0l2iGNYHCTTjcCiTBlq7TmkUAFglkbkRqbTJ0irYUAwVHdOZYealbCsEl8MEL1BLZed3bpPpTUEmccssFw5qHI69IDkE6NGJgSgA7iQNE6BIIDGRDIwUSAvj8A_igUTyCSPGSIFo7DXq8ABUTAYHAMSqn2TBgLg2h0r26psAA3PC-BDnAkEAIJnEwFZMFwlq4AAFAAlPhK5cBQsa4MwOx7KklYsJ4Q7YCkF59BQADkkGhP4IwAEpMFSnQAPxME0bE4ExzGeBY7Cxq8FCqscVDWIeTBoL8FjYmpCgQHAKCiTAcwLCuLHXHEBn4RQBlGSZhhXIxK7OTcaG5kY8JIdoKCnIWJGaPgsadJQ6AkJs0giTAF5MLh7DkWRKEmIYhhAA&query=module%3Dsrc%2Findex.jsx" target="_blank" rel="noopener noreferrer">Run this example</a>

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.
