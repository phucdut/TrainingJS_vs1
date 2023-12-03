/*

function run(a) {
    if( a % 15 == 0){
        return 3;
    }else if(a % 3 == 0){
        return 1;
    }else if(a % 5 == 0){
        return 2;
    }
}

// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3
*/
/*
var date = 5;

switch(date) {
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:
        console.log('Hôm nay là thứ 3');
        break;      
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
    case 6:
        console.log('Hôm nay là thứ 6');
        break;
    default:
        console.log('Không biết:');
}
*/

// Toán tử 3 ngôi --- ternary operator
/*
var intern = {
    name: 'Học Js',
    cost: 100
}

// if(intern.cost > 200){
//     console.log(intern.cost);
// }else{
//     console.log('Miễn phí.');
// }

var value = intern.cost > 200 ? console.log(intern.cost) : console.log("Miễn phí."); // đây là toán tử 3 ngôi
*/

// Làm bài
function getCanVoteMessage(age) {
  var a = age >= 18 ? "Bạn có thể bỏ phiếu." : "Bạn chưa được bỏ phiếu";
  return a;
}

// Kỳ vọng
console.log(getCanVoteMessage(18)); // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)); // 'Bạn chưa được bỏ phiếu'
