## An Example

```jsx {"codeExample": {"project": "fixture-project", "file": "src/app.jsx"}}
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

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.
