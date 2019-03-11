## An Example

```jsx {"codeExample": {"project": "demo-project", "file": "src/app.jsx"}}
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

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.

```jsx {"codeExample": {"project": "demo-project", "file": "src/app.jsx"}}
import * as hyperdom from "hyperdom";

export default class App {
  render() {
    return <div>
      <label>what's YOUR name? </label>
      <input type="text" binding="this.name" />
      <div>hi {this.name}</div>
    </div>;
  }
}
```

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.
