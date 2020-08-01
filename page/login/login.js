import {
    LitElement,
    html,
    css
  } from 'lit-element';
  
  import firebase from 'firebase';
  
  const firebaseConfig = {
    apiKey: "AIzaSyAMXdaB-BGgIOUSIiYk9nRRb6j2hoiOpew",
    authDomain: "proxypurchase-bed70.firebaseapp.com",
    databaseURL: "https://proxypurchase-bed70.firebaseio.com",
    projectId: "proxypurchase-bed70",
    storageBucket: "proxypurchase-bed70.appspot.com",
    messagingSenderId: "499244763330",
    appId: "1:499244763330:web:5a3bd45fffea077fda535b"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var provider = new firebase.auth.GoogleAuthProvider();
  
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
      return {
  
      };
    }
  
    constructor() {
      super();
    }
  
    render() {
      return html `
          <slot></slot>
          <ul>
            <li>
              <input type="text" id="readuserid" placeholder="아이디"> 
            </li>
            <li>
              <input type="password" id="readuserpw" placeholder="비밀번호"> 
            </li>
            <li>
              <button @click=${this.login} type="button">로그인</button>
            </li>
          </ul>
        `;
    }
  
    onClick() {
      console.log("성공");
      var userid = this.shadowRoot.getElementById("userid").value;
      var userpw = this.shadowRoot.getElementById("userpw").value;
      var username = this.shadowRoot.getElementById("username").value;
      firebase.database().ref('/user/' + userid).set({
        "id": userid,
        "name": username,
        "password": userpw
      });
  
      // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    }
  
    login() {
      console.log("firebase 에서 데이터 읽기");
      var userid = this.shadowRoot.getElementById("readuserid").value;
      let userpw = this.shadowRoot.getElementById("readuserpw").value;
      firebase.database().ref('/user/' + userid).on('child_added', function (dataSnapshot) {
        var data = dataSnapshot.val();
        console.log(data.length);
      });
    }
  
  }
  
  window.customElements.define('sign-element', SignElement);