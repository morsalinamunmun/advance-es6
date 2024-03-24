const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 1, name: 'hp', price: 50000},
    {id: 1, name: 'macbook', price: 165000},
    {id: 1, name: 'dell', price: 60000},
];

//has some properties, method 
//similar
class product {
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
        this.subject = this.subject;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}
const lenovo = new product('le le lenovo');
console.log(lenovo);

lenovo.speak('oba kita kau');

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}
const tapan = new Teacher('Tapon sir', 'Physics')
console.log(tapan);