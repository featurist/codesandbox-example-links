## An Example

```jsx
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

<a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKAdAIwIZplATgYyVHwHsA7AFxkqRGAB0yACJ-kAB13hgrjcSYBtRixZtqANzYAaEaLYALAJ7sYuACYkAtmzkBdRgF8Qh6SAhl1MAB4oFFLVCIhSlahVoAeAIQARAPIAwgAqAJoACgCiTPaOAHyMnrFQCWSJCjAY6qn0FJ4UEBSwceEYBDhMAMoYlmgk1p4A9AVFMDl5WjwYTPgKZXA8ALxsAKrBAGIAtAAcbEyNqU0ZWTlknnXqSu2e6hASTBDqwyAY7OxscU27Equ5nnD4uBDsFExwBMfv-I0WVrYAVnwQNtGg8ni9Fo0NltGIlGslUiYzOwMPgANYYADmMBQgPIzlcVBoiDocjYZAwnX4rBAylUGm0kxslPYsBkZJAEjUcAg5GpbAAjCgAAwi9nMGlWMHPAp8pA0gASKjUmi0TCsWhITAAUpVxWIQFoMBZ-eZLDY7A4oPqadKXkCBAwJQa4BQyhRTSjylADubbMkmJNJiRVGkQLJnTS0ABXaDqT1lfAVGNx31_S2OXQS0wcqyhqxkfAQeDUp2iKNYHCTTjcCiTOkq7SmoUAFjF4bkBobDJ08rYUAwVFdWZYOYlbCsEl8MHz1CLJflZfkHETVZjllguFNA6HHpAcjHBrRMCUAHcSBoHUIDGRDIwkSAvo1TuxcXBrATyESPCSIFp2BerwAFRMBgcAxMqPZMGAuDaDS3aqmwADcsJkDYAG4K8VhgBg0ZQK8-ADnA4EAIJnEwS5cOauAABQAJQUZ2TBcBQ0a4MwOx7Kk5YsJ4A7YCkp59BQADk4FKCQbFMBSnQAPxME0_E4NxPGeBY7DRq8FDKscVDWHuTBoL8FiYrpCgQHAKAyTAcwLExvHXHE5kURQ5mWdZhhXFxTFeTcKHZkY96mI-BA_H6b6fm4xLmP-gFMCBYEQfSqrQbBaqKJBiEgP5f4Ya8ZHsKlcFsCgz5nMhqEIdoKAvtQ6g0Zo-DRp0lDoCQmzSNJMCnkwBX0XR_kmIYhhAA&query=module%3D%2Fsrc%2Fapp.jsx" target="_blank" rel="noopener noreferrer">Run this example</a>

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.
