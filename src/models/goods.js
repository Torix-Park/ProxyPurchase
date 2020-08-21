import firebase from '../firebase/firebase'

function GoodsCreate(name, price, count) {
    firebase.database().ref('/goods/').push({
        name : name,
        price : price,
        count: count
    }).then(function (snapshot) {
        console.log(snapshot.key);
    })
    .catch(function (error) {
        console.log("errorCode = " + error.code,
            "errorMessage = " + error.message);
    });
    
}

function GoodsRead(){
    firebase.database().ref('/goods/').on('child_added', function(data){
        console.log(data);
    })
}

function GoodsReadId(id){
    firebase.database().ref('/goods/' + id).once('value', function (data) {
        console.log(data);
    })
}

function GoodsUpdate(id, name, price, count) {
    
}

function GoodsRemove(id,name){

}

export { GoodsCreate, GoodsUpdate, GoodsRemove, GoodsRead, GoodsReadId }