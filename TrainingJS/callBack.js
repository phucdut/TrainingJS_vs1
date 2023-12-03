/* CallBack là gì?
    Call back là 1 hàm (function) gọi lại và được truyền bằng đối số.
    Call back fai được gọi lại trong 1 hàm và gọi lại bằng đối số.
    for/in; for(var i in this); this là 1 mảng. i sẻ là chỉ mục của mảng
        Vòng for sẻ chạy từ i = 0 đến hết chỉ mục của mảng.
        Với for/in thì i nó sẻ nhận luôn các method() được thêm vào từ prototype() vd: forEach2, find(), ...
    this.hasOwnProperty(index); duyệt mảng trả về true/false,
        Nếu là 1 phần tử trong mảng thì in true
        Nếu là 1 method() được thêm vào từ prototype() thì in ra false.
*/


/*
Array.prototype.myMap = function(cb) {
    var arr1 = [];
    var arrayLength = this.length;
    for(var i = 0; i < arrayLength; i++){
        // arr1.push(cb(this[i]));
        arr1.push(cb(this[i], i, this));
        // console.log(cb(this[i], i));
    }
    return arr1;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {

    return number * 2;
})); // Output: [2, 4, 6]

//console.log(arr1);

console.log(numbers.myMap(function (number, index) {
    return number * index;
})); // Output: [0, 2, 6]

*/


/*
function newCallBack(value){
    value('Học lập trình thật vui');
}


function callBack(index){
    console.log('index: ', index)
}

newCallBack(callBack);

var arr = [];
Array.prototype.map2 = function(callBack){
    for(var i = 0; i < this.length; i++){
        arr.push(callBack(this[i], i));
    }
    return arr;
}

var array1 = [
    'Monkey',
    'Tiger',
    'Elephant',
    'Meo Meo'
];

var arr2 = array1.map2(function(arrayValue, arrayIndex){
    return arrayValue;
})

console.log(arr2);

*/


// Ví dụ: làm các hàm tương tự: forEach, find(), fiter();


var array1 = [
    'Elephant',
    'Monkey',
    'Elephant',
    'Tiger',
    'Monkey',
    'Elephant',
    'Meo Meo'
];

// forEach();

/*
Array.prototype.forEach2 = function(callBack){
    for(var i in this){
        if(this.hasOwnProperty(i) === true){
            callBack(this[i], i)
        //console.log('index: ', i)
        }
    }
}

array1.forEach2(function(arrayValue, arrayIndex){
    console.log(arrayValue);
});
*/

//find();
/*
Array.prototype.find2 = function(callBack){
    var x;
    for(var i in this){
        if(this.hasOwnProperty(i) === true){
            if(callBack(this[i], i) === true){
                x = this[i];
                break;
            };
        }
    }
    return x;
}


var value = array1.find2(function(arrayValue, arrayIndex){
    return arrayValue === 'Meo Meo';
});

console.log(value);
*/


// filter();

/*
Array.prototype.filter2 = function(callBack){
    var x= [];
    for(var i in this){
        if(this.hasOwnProperty(i) === true){
            if(callBack(this[i], i) === true){
                x.push(this[i]);
            }
        }
    }
    return x;
}


var value = array1.filter2(function(arrayValue, arrayIndex){
    return arrayValue === 'Elephant';
});

console.log(value);
*/


/*
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 1000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    },
    {
        name: 'Khóa học Node Pro',
        price: 0 
    },
    {
        name: 'Khóa học JS',
        price: 1000000
    },
    {
        name: 'Khóa học JS',
        price: 1020000
    }
];


// some(); duyệt tất cả nếu 1 phần tử đúng với đk trả về true sai thì false

Array.prototype.some2 = function(callBack){
    for(var value in this){ // value trong for in là giá trị chỉ mục của mảng this
        if(this.hasOwnProperty(value)){
            if(callBack(this[value], value) === true){
                return true;
            }
        }
        
    }
    return false;
};



var value = orders.some2(function(arrayValue, arrayIndex){
    return arrayValue.price === 0;
})

console.log(value);

// every(); duyệt tất cả nếu đúng đk trả về true sai thì false

Array.prototype.every2 = function(callBack){
   for(var value of this){ // value trong for of là giá trị phần tử của mảng this
    if(callBack(value) !== true){
        return false;
    }
    return true;
   } 
}


var value2 = orders.every2(function(arrayValue){
    return arrayValue.price === 0;
});

console.log(value2);
*/

Array.prototype.myFilter2 = function(cb) {
    var arr = [];
    for(var i in this){
        if(this.hasOwnProperty(i) === true){
            //console.log(this.hasOwnProperty(i))
            if(cb(this[i], i, this) === true){
                arr.push(this[i]);
            }
        }
        
    } 
    return arr;
 }
 
 const numbers = [1, 2, 3, 4];

 console.log(numbers.myFilter2(function (number) {
     return number % 2 === 0;
 })); // Output: [2, 4]
 
 console.log(numbers.myFilter2(function (number, index) {
     return index % 2 === 0;
 })); // Output: [1, 3]
 
 console.log(numbers.myFilter2(function (number, index, array) {
    //console.log(array.length);
    return array.length % 2 === 0;
     
 })); // Output: [1, 2, 3, 4]
 




