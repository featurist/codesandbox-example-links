import * as hyperdom from "hyperdom";

class App {
  render() {
    return (
      <div>
        <label>what's your name? </label>
        <input type="text" binding="this.name" />
        <div>hi {this.name}</div>
      </div>
    );
  }
}

hyperdom.append(document.body, new App());
