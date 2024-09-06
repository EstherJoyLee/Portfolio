import { Component } from "./core/core";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default class App extends Component {
  render() {
    const theheader = new TheHeader().el;
    const routerView = document.createElement("router-view");
    const thefooter = new TheFooter().el;

    this.el.append(theheader, routerView, thefooter);
  }
}
