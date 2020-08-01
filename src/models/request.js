import firebase from '../firebase/firebase';

function requestCreate(id,goods,commission,requester,responser,createdAt,status) {
    firebase.database().ref('/request/' + id).set({
        Goods: [ goods ],
        Commission : commission,
        Requester : requester,
        Responser: responser,
        DateTime: createdAt,
        Status: status
    });
}
