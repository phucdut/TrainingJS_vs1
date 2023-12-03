// var array, charactor;

// function joinWithCharacter(array, charactor) {
//     return array.join(charactor);// dùng để nối 1 mảng thành 1 chuổi

// }


// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"


var array;
function getLastElement(array){
    //return array.slice(array.length - 1);
    //return array.slice(2,3);
    return array.slice(-1);
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']