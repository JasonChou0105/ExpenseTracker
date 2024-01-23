//id name price date

class Expanse {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.price = params.price;
    this.date = params.date;
  }
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      date: this.date
    };
  }
}


export default Expanse;
