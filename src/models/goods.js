import firebase from '../firebase/firebase'

function GoodsCreate(id, name, price, count) {
    firebase.database().ref('/goods/' + id).set({
        name : name,
        price : price,
        count: count
    });
}

function GoodsUpdate(id, name, price, count) {
    
}