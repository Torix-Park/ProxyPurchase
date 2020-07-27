import {
  LitElement,
  html,
  css
} from 'lit-element';
import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAMXdaB-BGgIOUSIiYk9nRRb6j2hoiOpew",
  authDomain: "proxypurchase-bed70.firebaseapp.com",
  databaseURL: "https://proxypurchase-bed70.firebaseio.com",
  projectId: "proxypurchase-bed70",
  storageBucket: "proxypurchase-bed70.appspot.com",
  messagingSenderId: "499244763330",
  appId: "1:499244763330:web:5a3bd45fffea077fda535b"
};

// firebase.initializeApp(config);
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class LoginElement extends LitElement {
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
    return {
      id: {
        type: String
      },
      password: {
        type: String
      },
      name: {
        type: String
      }

    };
  }

  constructor() {
    super();
    this.id = 'a';
  }

  render() {
    return html `
      <slot></slot>
      <ul>
          <li>
            <input  type="text" id="userid" placeholder="아이디">
          </li>
          <li>
            <input type="password" id="userpw" placeholder="비밀번호">
          </li>
          <li>
            <button @click=${this.onClick} type="submit"> <span>제출</span></button>
          </li>
      </ul>
    `;
  }

  onClick() {
    console.log('a');
    // firebase.database().ref('/user').set({
    //   "id" : {
        
    //   }
    // });
  }

  // wirteUserData(Userid, Password) {
  //   firebase.database().ref('/user').set({
  //     id: Userid,
  //     password: Password
  //   });
  // }

}

window.customElements.define('login-element', LoginElement);