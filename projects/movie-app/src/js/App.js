/* eslint-disable react/require-render-return */
// class App {
//   constructor() {
//     this.el = document.createElement("div");
//     this.el.textContent = "Hello, world!";
//   }
// }
import { Component } from "./components/core/core";

class App extends Component {
  constructor() {
    super({
      state: {
        fruits: [
          { name: "Apple", price: 1000 },
          { name: "Banana", price: 2000 },
          { name: "Cherry", price: 3000 },
        ],
      },
    });
  }

  render() {
    console.log(this.state.fruits);
    this.el.innerHTML = /* html */ `
      <h1>fruits</h1>
      <ul>
        ${this.state.fruits
          .filter((fruit) => fruit.price < 3000)
          .map((fruit) => `<li>${fruit.name}</li>`)
          .join("")}
      </ul>
    `;
  }
}

export default App;
