import { Component } from './core/core.js';
import TheHeader from './components/TheHeader.js';
import TheFooter from './components/TheFooter.js';

export default class App extends Component {
  render () {
    const theheader = new TheHeader().el
    const routerView = document.createElement('router-view')
    const thefooter = new TheFooter().el

    this.el.append(theheader, routerView, thefooter)
  }
}
