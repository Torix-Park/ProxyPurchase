import {
  LitElement,
  html,
  css
} from 'lit-element';

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
        p {
          font-size: 12px;
          color: red;
          width: 35%;
          margin: 0 auto;
          display: none;
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
            <p id="patternEmail">이메일 형식을 지켜주세요. ( @ 및 . 포함해야함 ) </p>
            <input type="text" id="useremail" placeholder="이메일" required autofocus>
          </li>
          <li>
            <p id="patternPw">최소 6자리 이상 적어주세요</p>
            <input type="password" id="userpassword" placeholder="비밀번호" required>
          </li>
          <li>
            <input type="text" id="username" placeholder="이름" required>
          </li>
          </li>
          <li>
            <button @click=${this.UserCreate} type="submit"> <span>제출</span></button>
          </li>
        </ul>
    <script>
      
    </script>
      `;
  }
  UserCreate() {
    //이메일 형식 맞게 써줘야함 ( ex)test@test.com )
    var useremail = this.shadowRoot.getElementById("useremail").value;
    //비밀번호 형식 맞게 써줘야함 ( 최소 6자리 이상 )
    var userpw = this.shadowRoot.getElementById("userpassword").value;
    var username = this.shadowRoot.getElementById("username").value;
    SignUp(useremail, userpw, username);
  }

  PatternEmail() {
    if (this.shadowRoot.getElementById("useremail").focus) {
      this.shadowRoot.getElementById("patternEmail").style.display = "block";
    } else this.shadowRoot.getElementById("patternEmail").style.display = "none";
  }
}

window.customElements.define('sign-element', SignElement);