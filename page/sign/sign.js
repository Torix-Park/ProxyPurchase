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

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
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
      email: {
        type: String
      },
      password: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.email = null;
    this.password = null;
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
            <button @click=${this.onClick} type="submit"> <span>제출</span></button>
          </li>
        </ul>
        <ul>
          <h1>로그인</h1>
          <li>
            <input type="text" id="readuseremail" placeholder="이메일">
          </li>
          <li>
            <input type="text" id="readuserpw" placeholder="비밀번호">
          </li>
          <li>
            <button @click=${this.LogIn} type="button">읽기</button>
          </li>
        </ul>
        <ul>
          <button @click=${this.getData} type="button">로그인 정보 가져오기</button>
        </ul>
      `;
  }

  onClick() {
    var useremail = this.shadowRoot.getElementById("useremail").value;
    var userpw = this.shadowRoot.getElementById("userpassword").value;
    firebase.auth().createUserWithEmailAndPassword(useremail, userpw).then(function () {
      console.log("성공");
      alert("sign up!");
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })

    // var userid = this.shadowRoot.getElementById("userid").value;
    // var userpw = this.shadowRoot.getElementById("userpw").value;
    // var username = this.shadowRoot.getElementById("username").value;
    // firebase.database().ref('/user/' + userid).set({
    //   "id": userid,
    //   "name": username,
    //   "password": userpw
    // });
  }

  LogIn() {
    var useremail = this.shadowRoot.getElementById("readuseremail").value;
    var userpassword = this.shadowRoot.getElementById("readuserpw").value;
    firebase.auth().signInWithEmailAndPassword(useremail,userpassword).then(function() {
      console.log("읽기");
      alert("log in!");
      sessionStorage.setItem("email", useremail);
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode,errorMessage);
    })
    // var userid = this.shadowRoot.getElementById("readuserid").value;
    // firebase.database().ref('/user/' + userid).on('child_added', function (dataSnapshot) {
    //   var data = dataSnapshot.val();
    //   console.log(dataSnapshot.val().length);
    // });
  }

  getData(){
    console.log(sessionStorage.getItem("email"));
    // var user = firebase.auth().currentUser;
    // if(user){
    //   console.log(user);
      
    // } else {
    //   alert("Log in plz");
    // }
    // firebase.auth().onAuthStateChanged(function(user){
    //   if(user) {
    //     var useremail = user.email;
    //     console.log(useremail,user);
    //   } else {
    //     alert("Log In Plz");
    //   }
    // })
  }


  LogOut() {
    sessionStorage.clear();

    // firebase.auth().signOut().then(function() {
    //   alert("log out!");
    // }).catch(function(error){
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode,errorMessage);
    // })
  }

}

window.customElements.define('sign-element', SignElement);