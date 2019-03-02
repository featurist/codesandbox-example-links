## An Example

```jsx {"codeExample": {"project": "fixture-project", "file": "src/app.jsx"}}
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
<a href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKAdAIwIZplATgYyVHwHsA7AFxkqRGAB0yACJ-kAB13hgrjcSYBtRixZtqANzYAaEaLYALAJ7sYuACYkAtmzkBdRgF8Qh6SAhl1MAB4oFFLVCIhSlahVoAeAIQARAPIAwgAqAJoACgCiTPaOAHyMnrFQCWSJCjAY6qn0FJ4UEBSwceEYBDhMAMoYlmgk1p4A9AVFMDl5WjwYTPgKZXA8ALxsAKrBAGIAtAAcbEyNqU0ZWTlknnXqSu2e6hASTBDqwyAY7OxscU27Equ5nnD4uBDsFExwBMfv-I0WVrYAVnwQNtGg8ni9Fo0NltGIlGsk4iYzOwMPgANYYADmMBQgPIzlcVBoiDocjYZAwnX4rBAylUGm0kxslPYsBkZJAEjUcAg5GpbAAjCgAAwi9nMGlWMHPAp8pA0gASKjUmi0TF8MC0JCYAClKuKxCAtBgLPzzJYbHYHFADTTpS8gQIGBLDXAKGUKGaUeUoAcLbZkkxJpMSKo0iBZC6aWgAK7QdResr4Cqx-N-v5Wxy6CWmDlWMNWMj4CDwanO0TRrA4SacbgUSZ0lXaM1CgAsYojckNjYZOnlbCgGCobuzLFzErYVgkGoL1GLpfl5fkHCT1djllguDNg-HnpAcnHhrRMCUAHcSBpHUIDGRDIwkSAvo1TuxcXBrATyESPCSIFp2BerwAFRMBgcAxMqvZMGAuDaDSPaqmwADcsJFoOcDgQAgmcTBLlwFq4AAFAAlLhXZMFwFAxrgzA7HsqQViwniDtgKSnn0FAAOTgaE_gjAASkwFKdAA_EwTQsTgDGMZ4FjsDGrwUMqxxUNYe5MGgvwWJiKkKBAcAoMJMBzAs5FMdccR6bhFB6QZRmGFc9HkY5NwoTmRioQh2goC-1DqIRmj4DGnSUOgJCbNIQkwKeTDYewJHEUhD5Pr8lqAp-bjEuY_6ATSKDPmcyH3oYJVAA&query=module%3Dsrc%2Fapp.jsx" target="_blank" rel="noopener noreferrer">Run this example</a>

This works with [babel-preset-hyperdom](https://github.com/featurist/babel-preset-hyperdom), see [JSX](#jsx) for more details.
