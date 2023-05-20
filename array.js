//an array of brands
let brands = ['channel', 'dior', 'fendi', 'gucci', 'lv'];

console.log(brands[4],brands[2]);
brands[1] = "prada";
console.log(brands);

//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

//for each
brands.forEach(brandelements => {
    console.log(brandelements)
});

//for...in
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
//for...of
// for (const iterator of object) {
    
// }

function test() {
    alert("i was called")
    document.getElementById('test').innerHTML = "My name is sylvia"
    let amount = document.getElementById('amount').value
    console.log(amount)
}