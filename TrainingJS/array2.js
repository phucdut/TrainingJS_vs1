// Tham số truyền vào các hàm duyệt mảng này là 1 callback (function) với 1 đối sô là phần tử của mảng và 1 đối số là index của mảng. 

//forEach dùng để duyệt mảng
// every() dùng để duyệt mảng và tất cả các phần tử trong mảng thỏa mản 1 điều kiện nào đó. Trả về kiểu boolean
// some() tương tự như every() nhưng some() nó sẻ duyệt các phần tử trong mảng nếu 1 phần tử thỏa mản đk thì sẻ ngưng vòng lặp.
// find() tìm kiếm trong mảng và trả về phần tử đó trong mảng.
// filter() tương tự find() nhưng nó sẻ trả về hết tất cả các phần tử trong mảng thỏa mãn đk.
// map()  Trả về 1 mảng mới được duyệt trên mãng cũ với chỉ số index là bằng nhau.
// reduce()  Dùng để tính tổng cộng của một giá trị nào đó của mảng



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


orders.forEach(function(order, index){// function có 2 tham số truyền vào 1 là các phần tử 2 là giá trị index của mảng.
    console.log(order);
});

var isFree = orders.every(function(order, index){// function có 2 tham số truyền vào 1 là các phần tử 2 là giá trị index của mảng.
    console.log(index);
    return order.price === 0;
});

console.log(isFree);// Hàm every() kiểm tra mảng và trả về True/False, nếu 1 phần tử trong mảng không thỏa mản đk thì hàm sẻ dừng ở thời điểm đó.


var isNotFree = orders.some(function(order, index){// function có 2 tham số truyền vào 1 là các phần tử 2 là giá trị index của mảng.
    console.log(index);
    return order.price === 0;
});

console.log(isNotFree);// Hàm some() kiểm tra mảng và trả về True/False, nếu 1 phần tử trong mảng thỏa mản đk thì hàm sẻ dừng ở thời điểm đó.


var isFind = orders.find(function(order, index){// function có 2 tham số truyền vào 1 là các phần tử 2 là giá trị index của mảng.
    console.log(index);
    return order.name === 'Khóa học JS';
});
console.log(isFind);// Hàm find() kiểm tra mảng và trả về phần tử trong mảng , nếu 1 phần tử trong mảng thỏa mản đk thì hàm sẻ trả về phần tử đó và dừng duyệt mảng.

var isFilter = orders.filter(function(order, index){// function có 2 tham số truyền vào 1 là các phần tử 2 là giá trị index của mảng.
    console.log(index);
    return order.name === 'Khóa học JS';
});
console.log(isFilter);// Hàm filter() kiểm tra mảng và trả về tất cả các phần tử trong mảng thỏa mãn đk, nếu các phần tử trong mảng thỏa mản đk thì hàm sẻ trả về hết các phần tử đó (duyệt hết mảng).

function orderHander(order, index){
    return {
        id: index,
        name: order.name,
        price: order.price,
        TextPrice: `${order.price} đồng`,
        originArray: orders
        
    };

    //vd:
    //return order.name;

    //vd2:
    // return {
    //     name: order.name
    // }
}
var arrayMap = orders.map(orderHander);// Tạo ra 1 mảng mới với index của mảng củ và có thể tùy biến dự trên mảng cũ.

console.log(arrayMap);



// reduce(); tính tổng giá trị price trong mảng.
var i = 0;
function priceHandler(accumulator, currentValue, currentIndex, originArray){
    // accumulator = biến lưu trữ initial value(giá trị khởi tạo);
    // currentValue = giá trị phần tử của mảng tại currentIndex;
    // currentIndex = chỉ mục index của mảng.
    // originArray = Mảng ban đầu. Mảng khời tạo 

    i++;
    var total = accumulator + currentValue.price;
    console.table(
        {
            'Lượt chạy: ': i,
            'Biến lưu trữ: ': accumulator,
            'Giá khóa học: ': currentValue.price,
            'Tích trữ được: ': total
        }
    );
    return total;
}

var totalPrice = orders.reduce(priceHandler, 0); // 0 là giá trị truyền vào và là biến lưu trữ.

console.log('Tổng tiền phải trả: ', totalPrice);


//Ví dụ: về reduce();

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
];

function getTotalGold(sport){
    return sport.reduce(function(accumulator, curentValue){
        return accumulator += curentValue.gold;
    }, 0);

}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23

*/

/*
//ví dụ:
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]


 function getMostFavoriteSport(sports){
    return sports.filter(function(sport, index){
        return sport.like > 5;
    })
 }

// Kỳ vọng
console.log(getMostFavoriteSport(sports));
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


// Bài Tập Flat -- 'Làm phẳng' mảng Depth Array - 'Mảng sâu'

var depthArray = [1, 2, [3, 4], 5 ,6, [7, 8, 9]];

var arr = [];
var newdepthArray = depthArray.reduce(function(newArray, arrayValue){
    return newArray.concat(arrayValue);
}, []);

console.log(newdepthArray);



// Bài tập: Lấy ra khóa học và thêm vào 1 mảng mới.

var topics = [
    {
        topic: "Fornt-End",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            },
        ]
    },
    {
        topic: "Back-End",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJs"
            },
        ]
    }
];


var newArray = topics.reduce(function(accumulator, currentvalue){
    return accumulator.concat(currentvalue.courses);
}, []);


var new2Array = newArray.map(function(arr, arrValue){
    return [ arr.title]
});

var new3Array = new2Array.reduce(function(accumulator, curentValue){
    return accumulator.concat(curentValue);
}, [])
console.log(newArray);
console.log(new2Array);
console.log(new3Array);




var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function calculateRating(watchList){
    var arr = watchList.filter(function(array, arrayindex){
        return array.Director === 'Christopher Nolan';
    });

    var index = arr.reduce(function(accumulator, curentValue){
        return accumulator += Number(curentValue.imdbRating);
    }, 0);
    
    var IMDB = index/arr.length;
    return IMDB;
  }
  
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  


var array = [1, 2, 3, 4, 5, 5, 8];

Array.prototype.reduce2 = function(callBack, initialValue){
    var i = 0;
    if(arguments.length < 2){
        i = 1;
        initialValue = this[0];
    }
    for(; i < this.length; i++){
        initialValue = callBack(initialValue, this[i], i, this);
        console.log(initialValue);
    }
    return initialValue;
}
var total1 = array.reduce2(function(result, arrayValue, arrayIndex, originArray){
    return result + arrayValue;
})

console.log(total1);
  

Array.prototype.reduce2 = function(callBack, initialValue){
    var i = 0;
    if(arguments.length < 2){
        i = 1;
        initialValue = this[0];
    }
    for(; i < this.length; i++){
        initialValue = callBack(initialValue, this[i], i, this);
    }
    return initialValue;
}


function arrToObj(arr){
    var arr2 = arr.reduce2(function(initialValue, arrayValue){
        
        //console.log(initialValue[arrayValue[0]]);
        //console.log(arrayValue[1]);
        initialValue[arrayValue[0]] = arrayValue[1];
        //console.log(initialValue);
        return initialValue;
        
    }, {})

    return arr2;
}
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

*/

// String/Array includes() // Tìm kiếm giá trị trong mảng hay chuổi và trả về True/False

// ví dụ:

var string1 = 'Con cu tuyet voi qua';

console.log(string1.includes('Con cu', 2));// includes(a, b) a là từ muốn tìm kiếm, b là vị trí bắt đầu tìm kiếm, (a,b) là đối số.
  
var array1 = ['Monkey', 'Tiger', 'Elephant'];
console.log(array1.includes('Monkey', 0));// includes(a,b) a là phần tử muốn tìm kiếm, b là chỉ mục index của mảng và hàm inludes() sẻ bắt đầu tìm kiếm từ đó.
