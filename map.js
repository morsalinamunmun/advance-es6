
//important

//map=> loops through each element of the array and do the operation 

const numbers = [4, 5, 7, 9, 6, 8];
function doubleIt(num){
    return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);

const doubleTo = n => n * 2
const result2 = numbers.map(doubleIt); //console.log(result2);
const result1 = numbers.map(n=> n*2);
const result3 = numbers.map(n=> n + 10);
const result4 = numbers.map(n=> n / 2);
console.log(result4);

const friends = ['tom', 'john', 'michel', 'monu'];

const lengths = friends.map(name=> name.length);
console.log(lengths);

const firstLetter = friends.map(name=> name[0]);
console.log(firstLetter);

//map prottek ta upadaner upor kaj kore return kore