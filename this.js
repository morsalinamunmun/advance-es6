class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}
const kodom = new Person('Monsur', 23);
console.log(kodom);
kodom.sleep();
const badam = new Person('Ali Hossain', 43);
badam.sleep();

//vejal
const lazy = kodom.sleep;
lazy()