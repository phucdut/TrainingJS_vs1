
// var phoneNumber = 'phone';
// var objectKey = {
//     name: 'Van Phuc',
//     age: 20,
//     address: 'Nghe an',
//     [phoneNumber]: '0101128463',
//     functionKey: function(){
//         return this.address;
//     }
// };
// //delete objectKey.phone;
// //objectKey.email = 'phuc17112002@gmail.com';
// console.log(objectKey.functionKey());

// Function ---> Phương thức === Method
// Others ---> Thuộc tính === Property

// Object constructor --- Xây dựng đối tượng, mô tả về thiết kế của đối tượng

// function User(name, age, address){   
//     this.name = name,
//     this.age = age,
//     this.address = address
//     this.getName = function(){
//         //return `${this.name}`;
//         return this.name;
//     }
// }// đây là 1 object constructor

// var admin = new User('Nam', 22, 'Nghe an');// đây là đối tượng được tạo ra dựa trên 1 Object constructor
// var user = new User('Phuc', 21, 'Nghe an');

// admin.email = 'vanphuc@gmail.com';
// user.phone = '08362517737';

// // user.getPhone = function(){
// //     return this.phone;
// // }

// // console.log(user.getPhone());

// console.log(admin.getName());
// console.log(user);
//console.log(user.constructor == User);// xuất ra mô tả về đối tượng và chính 1 Object constructor


/* Object Protopyte - Basic
-- là nguyên mẫu của đối tượng. 
-- là những thứ cấu tạo nên bản thiết kế của đối tượng.
-- có thể thêm thuộc tính hay đối tượng của Object constructor 
        sau khi Object constructor đã được khởi tạo

*/

// var User = function(firstName, lastName, address){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.address = address
// }

// User.prototype.phone = '0936353532';
// User.prototype.getAddress = function(){
//     return this.phone;
// }

// var user = new User('Nam', 'Tran', 'Nghe an');
// var user2 = new User('Phuc', 'Tran', 'Nghe an2');

// console.log(user.getAddress());
// console.log(user2);

// Bàii Tập

// Làm bài tại đây
// var Student = function(firstName, lastName){
//     this.firstName = firstName,
//     this.lastName = lastName
// }

// Student.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }



// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');

// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'


// Làm việc với Date

// var date = new Date();

// var day = date.getDate();
// var month = date.getMonth() + 1; // Vì tháng nó chỉ chạy từ 0-11 nên fai cộng thêm 1
// var year = date.getFullYear();

// var hours = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();

// console.log(`${day}/${month}/${year}`);
// console.log(`${hours}:${minutes}:${seconds}`);

// Bài tập

// var date = new Date();

// // var year = date.getFullYear() + 1;

// // console.log(year);

// function getNextYear(){
//     return date.getFullYear() + 1;
// }
// console.log(getNextYear());

// Bài tập bề MATH Object

/*
Công thức toán học. và không thể khởi tạo đối tượng.
*/

// Làm random

var array = [
    '10 vàng',
    '20 vàng',
    '30 vàng',
    '40 vàng',
    '50 vàng',
    '60 vàng',
    '70 vàng',
    '80 vàng'
];

var run = Math.floor(Math.random() * 8);

if(run < 2){
    console.log('Thành công');
}

console.log(array[run]);
