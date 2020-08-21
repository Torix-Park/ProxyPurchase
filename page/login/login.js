import {
  LitElement,
  html,
  css
} from 'lit-element';

import {
  LogIn,
  LogOut,
  getnowUserData
} from '../../src/firebase/login';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class loginElement extends LitElement {
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
            <input type="text" id="readuseremail" placeholder="이메일">
          </li>
          <li>
            <input type="password" id="readuserpw" placeholder="비밀번호">
          </li>
          <li>
            <button @click=${this.Login} type="button">로그인</button>
          </li>
        </ul>
        <ul>
          <button @click=${this.getData} type="button">로그인 정보 가져오기</button>
        </ul>
        <ul>
          <li><button @click=${this.Logout}>로그아웃</button></li>
        </ul>
      `;
  }
  Login() {
    var useremail = this.shadowRoot.getElementById("readuseremail").value;
    var userpw = this.shadowRoot.getElementById("readuserpw").value;
    LogIn(useremail, userpw);
  }
  getData() {
    console.log(getnowUserData());
  }
  Logout() {
    LogOut();
  }
}

window.customElements.define('login-element', loginElement);