import firebase from '../firebase/firebase';

function requestCreate(goods,commission,requester,responser,createdAt,status) {
    firebase.database().ref('/request/').push({
        Goods: [ goods ],
        Commission : commission,
        Requester : requester,
        Responser: responser,
        DateTime: createdAt,
        Status: status
    }).then(function (snapshot) {
        console.log(snapshot);
    })
    .catch(function (error) {
        console.log("errorCode = " + error.code,
            "errorMessage = " + error.message);
    });
}

export { requestCreate }
