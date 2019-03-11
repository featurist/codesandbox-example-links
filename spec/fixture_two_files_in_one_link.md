## An Example

```jsx {"codeExample": {"project": "demo-project", "file": "src/app.jsx", "addToNextExample": true}}
import * as hyperdom from "hyperdom";

export default class App {
  render() {
    return <div>
      <label>what's your name? </label>
      <input type="text" binding="this.name" />
      <div>hi {this.name}</div>
    </div>;
  }
}
```

Some comment to add

```jsx {"codeExample": {"project": "demo-project", "file": "src/index.js", "line": 2}}
// STUFF
```

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.
