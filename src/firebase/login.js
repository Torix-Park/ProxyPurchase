import firebase from './firebase'

let User;

function LogIn(useremail, userpassword) {
    firebase.auth().signInWithEmailAndPassword(useremail, userpassword).then(function () {
        User = firebase.auth().currentUser;
        firebase.database().ref('/users/' + User.uid).on('value', function (snapshot) {
            sessionStorage.setItem("User", JSON.stringify(User));
            sessionStorage.setItem("name", snapshot.val().name);
        })
        alert("Log in!");
    }).catch(function (error) {
        console.log("errorCode = " + error.code,
            "errorMessage = " + error.message);
    })
}

function LogOut() {
    firebase.auth().signOut().then(function () {
        alert("Log out!");
        sessionStorage.clear();
    }).catch(function (error) {
        console.log("errorCode = " + error.code,
            "errorMessage = " + error.message);
    })
}

//현재 로그인한 유저 정보
function getnowUserData() {
    const user = JSON.parse(sessionStorage.getItem("User"));
    const username = sessionStorage.getItem("name")
    let data = [user,username];
    if (user && username) {
        return data;
    } else {
        alert("not Log in");
    }
}

export {
    LogIn,
    LogOut,
    getnowUserData
}