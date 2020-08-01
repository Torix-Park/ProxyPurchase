export class Goods {
    constructor(name, price, number) {
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.number = number
    }
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}