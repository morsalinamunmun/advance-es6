//for each prottek ta upadaner jonno kaj kore kicu return kore na
const numbers = [4, 5, 7, 9, 6, 8];
const output = numbers.forEach(num=> console.log(n));
console.log(output);

//important
//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition

const players = [75, 67, 72, 65, 50, 55, 62];
//const selected = players.filter(score=> score > 60);
const selected = players.filter(score=> score > 80); //empty array
//const selected = players.filter(score=> score > 70);
console.log(selected);


const friends = ['tom', 'john', 'michel', 'monu', 'bow', 'boby'];
const selectFriend = friends.filter(name=> name.length > 4);
console.log(selectFriend);
const oddFriends = friends.filter(name=> name.length % 2 === 0)
console.log(oddFriends);

//find element thakle khuje ber korbe
const select = players.find(player=> player > 80) //undefined

//reduce