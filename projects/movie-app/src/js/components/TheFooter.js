import { Component } from '../core/core.js';
import aboutStore from '../store/about.js';

export default class TheFooter extends Component {
  constructor () {
    super({
      tagName: 'footer'
    })
  }

  render () {
    const { github, repository } = aboutStore.state
    this.el.innerHTML = /* html */ `
        <div>
            <!-- movie-app GitHub repository address -->
            <a href="${repository}">
                GitHub Repository
            </a>            
        </div>
        <div>
            <!-- GitHub address -->
            <a href="${github}">
                ${new Date().getFullYear()}
                JOY
            </a>
        </div>
    `
  }
}
