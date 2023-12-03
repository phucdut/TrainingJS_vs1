// vd về vòng lặp for

// for(var i = 0; i < 100; i++){
//     console.log('Vòng For thứ: ' + i);
// }
/*
function getRandNumbers(min, max, length){
    var array = [];
    for(var i = 0; i < length; i++){
        array[i] = Math.random() * (max - min) + min;
    }
    return array;
}

console.log(getRandNumbers(1,10,20));
*/

// function getTotal(arr) {
//     var sum = 0;
//     for(var i =  0;  i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// // Expected results
// console.log(getTotal([1, 2, 3])); // Output: 6
// console.log(getTotal([4, 5, -3])); // Output: 6
// console.log(getTotal([4, 5, 3, 5])); // Output: 17


// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ];

// //console.log(orders[0].price);
// var lengthArray = orders.length;

// function getTotal(arr){
//     var sum = 0;
//     for(var i = 0; i < lengthArray; i++){
//         sum = sum + arr[i].price;
//     }
//     return sum;
// }

// console.log(getTotal(orders));



// for/in lấy ra key của 1 object hoặc 1 chuổi
/*
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
];
// for(var key in orders){
//     console.log(orders[key]);
// }

var objectKey = {
    name: 'Van Phuc',
    age: 20,
    address: 'Nghe an',
    phoneNumber: '0101128463',
    functionKey: function(){
        return this.address;
    }
};

// for(var key in objectKey){
//     console.log(objectKey[key]);
// }


var chuoi = 'Học JavaScript tại F8';

for(var i in chuoi){
    console.log(chuoi[3])
}


function run(object) {
    var arr = [];
    for(var key in object){
        arr.push('Thuộc tính ' + key + ' có giá trị ' + object[key])
    }
    return arr;
}

// Expected results:

console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]



// Đối với for/in thì lấy key còn for/of sẻ là lấy giá trị của key

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
];
for(var index of orders){
    console.log(index);
}


var i = 0;

while(i<10){
    i++;
    console.log(i);
}


// break vs continue

for(var i = 0; i < 10; i++){
    // if(i == 5){
    //     break;// lệnh break dừng vòng lặp ngay tại thời điểm gọi break và những dòng lệnh phía dưới sẻ không được thực thi.
    // }

    if(i % 2 == 0){
        continue;// Lệnh continue tiếp tục vòng lặp tại thời điểm gọi tới continue và không thực thi những dòng lệnh phía dưới.
    }
    console.log(i);
}


// Vòng lặp lồng nhau.

// vd sắp xếp các giá trị trong mãng.
var array = [
    [1, 2, 3, 4],
    [5, 2, 6, 20],
    [6, 3, 2, 6],
    [3, 2, 4, 22],
    [12, 6, 8, 10],
    [31, 10, 4, 9],
];

function sortArray(){
    var i, j;
    var arr = [];
    for( i = 0; i < array.length; i++){
        for( j = 0; j < array[i].length; j++){
            arr.push(array[i][j]);
        }
    }
    return arr;
}
function sortTD(a, b){
    return a - b;
}


console.log(sortArray(array).sort(function sortTD(a, b){
    return a - b;
}));


// Đệ quy
// -- xác định được điểm dừng
// -- Xác định logic để tạo ra điểm dừng


function Dequy(num){
    if(num > 0){
        console.log(num);
        return Dequy(num - 1);
    }
    return num;
}

Dequy(5);


var array = [
    'Java',
    'C++',
    'NodeJs'
];

function duyetMang(start, end, cb){
    if(start < end){
        cb(start);
        return duyetMang(start + 1, end, cb);
    }
}

duyetMang(0, array.length, function (index){
    return console.log('index: ', index);
});

// input arr = [a, b, c, d, a, b, c];
// ouput arr2 = [a, b, c, d];
// Cách 1 đệ quy
var arr = ['a', 'b', 'c', 'd', 'a', 'b', 'c'];
var arr2 = [];
function duyetMang(start, end, cb) {
    // loop
    if (start < end) {
        cb(start);
        return duyetMang(start + 1, end, cb);
    }
    
}

duyetMang(0, arr.length -1, function (index) {
    
    var ok = 1;
    for(var j = 0; j < index; j++){
        if(arr[j] === arr[index]){
            ok = 0;
            break;
        }
    }
    if(ok == 1){
        console.log(arr[index]);
        arr2.push(arr[index]);
    }
});
console.log(arr2);


// Cách 2 vòng for
var arr = ['a', 'b', 'c', 'd', 'a', 'b', 'c'];
var arr2 = [];

function duyetMang(start, end){
    var ok =  1;
    for(start ; start < end; start++){
        for(var i = 0; i < start; i++){
            if(arr[i] === arr[start]){
                ok = 0;
                break;
            }
        }
        if(ok == 1){
            console.log(arr[start]);
            arr2.push(arr[start]);
        }
    }
    return console.log(arr2);
}

duyetMang(0, arr.length);

*/

// Tính lũy thừ theo đệ quy

function deQuyLuyThua(index){
    if(index > 0){
        console.log(index);
        return index * deQuyLuyThua(index - 1);
    }
    return 1;
}

console.log(deQuyLuyThua(3));