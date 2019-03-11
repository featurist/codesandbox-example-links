## An Example

```jsx {"codeExample": {"project": "demo-project", "file": "src/app.jsx", "line": 5}}
      <label>what's your name? </label>
      <input type="text" binding="this.name" />
      <div>hi {this.name}</div>
```

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.
