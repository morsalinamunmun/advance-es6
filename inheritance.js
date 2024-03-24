class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari cole na cole na');
    }
}

class bus extends Vehicle{
    construction(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
class Track extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}