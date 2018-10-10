// const person = {
//     name: 'gaurav',
//     age: 26,
//     location:{
//         city: 'gurgaon',
//         temp: 91
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp} = person.location;
// if(city && temp){
//     console.log(`it's ${temp} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['34/36-37 U block', 'Gurgaon', 'Haryana', '122001'];
const [street, city, state, pincode] = address;
console.log(`you are in ${city} ${state}.   `);

const item = ['Coffee (hot)', '$2.00', '$2.50','2.75'];
const [menu, small, mid, large] = item;
console.log(`A medium ${menu} costs ${mid}.`);