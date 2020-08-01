import {
  LitElement,
  html,
  css
} from 'lit-element';

// import firebase from 'firebase';

import {
  SignUp
} from '../../src/firebase/sign';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class SignElement extends LitElement {
  static get styles() {
    return css `
        :host {
          text-align: center;
          margin: 0 auto;
          display: block;
          border: solid 1px gray;
          padding: 16px;
          max-width: 800px;
        }
        ul {
            list-style: none;
        }
        li {
            margin-top: 2%;
        }
      `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html `
        <slot></slot>
        <ul>
          <li>
            <input type="text" id="useremail" placeholder="이메일">
          </li>
          <li>
            <input type="password" id="userpassword" placeholder="비밀번호">
          </li>
          <li>
            <input type="text" id="username" placeholder="이름">
          </li>
          </li>
          <li>
            <button @click=${this.UserCreate} type="submit"> <span>제출</span></button>
          </li>
        </ul>
      `;
  }

  UserCreate() {
    var useremail = this.shadowRoot.getElementById("useremail").value;
    var userpw = this.shadowRoot.getElementById("userpassword").value;
    var username = this.shadowRoot.getElementById("username").value;
    SignUp(useremail, userpw, username);
  }
}

window.customElements.define('sign-element', SignElement);