    // HTML DOM
    // DOM : document object model (mô hình tài liệu)
/*
// Gồm 3 thành phần
* 1. Element (Các phần tử trong trang web)
      vd: Các cặp thẻ đóng mở <h1></h1>, <h2></h2>, <body></body>, ...
* 2. Attribute (Cách thuộc tính trong những thẻ mở)
      vd: Các đường link, các mã màu, các định dạng font trong thẻ mở <>
          <script src="./callBack.js">: thì src="  " là 1 attribute
* 3. Text (là những chữ được hiện thị lên trang web trong những element)
      vd: <h1>Document</h1> Thì Document ở đây là 1 Text.
Node: Những điểm giao nhau trong sơ đồ 
        Vd: Giao nhau giữa element vs attribute hay giữa element vs text
*/

// --------------------------------------------------------------------

/*
    JavaScript: Có thể chạy trên Browser(Trình duyệt)| Server(Backend = NodeJs)
    Browser: HTML -> DOM -> WEB API
    API: Application Programming Interface (Giao diện lâp trình ứng dụng)
        Đây là phương tiện cho hai hoặc nhiều ứng dụng trao đổi, tương tác với nhau, tạo ra tương tác giữa người dùng với ứng dụng hiệu quả và tiện lợi hơn.
        Với API, các lập trình viên có thể tiếp cận, truy xuất dữ liệu từ máy chủ thể hiện chúng trên ứng dụng phần mềm hoặc website của mình một cách dễ dàng hơn.

    ==> JavaScript không có DOM, Nhưng trên Browser lại có DOM vì đơn giản nó gọi qua WEB API
*/

// --------------------------------------------------------------------

/*
    DOCUMENT là gì: Nó là toàn bộ web
    Từ element, attribute, text ==> DOM lưu vào document và document tích hợp sẵn qua WEB API của javaScript khi chạy trên Browser.
    ==> Muốn truy suất element, attribute, text thì fai đi qua document
*/ 
// vd: về document.
//document.write("Xin chào ae!");



// Cách truy suất ra các element trong HTML.
/*
    Element: Truy suất qua ID, Class, tag name,
                 CSS selector, HTML collection
    
*/
//var adNode = document.getElementById('heading'); // Lấy qua id của thẻ.
// console.log({
//     Element: adNode
// });

//console.log(document.getElementsByClassName('Help Me')); // Lấy qua tên class của thẻ

//console.log(document.getElementsByTagName('h1')); // Lấy qua cái tag của thẻ đó( vd 'h1', 'table', 'div',...)

//console.log(document.querySelector('.box '));
//console.log(document.querySelectorAll('.box .newbox'));

//console.log(document.querySelector('.box .help:nth-child(1)'));
//console.log(document.querySelector('.box .help:first-child'));

//console.log(document.querySelectorAll('.box .help'));

// var nodes = document.forms.Form3;
// console.log(nodes);

// var nodes = document.anchors.Youtube1;
// console.log(nodes);

//console.log(document.getElementsByClassName('products-list'))

//var firstProductElement = document.querySelectorAll('div .product'); 
//console.log(firstProductElement[0]);

// var productsListElement = document.querySelector('.products-list');
// console.log(productsListElement);

// var firstProductElement = document.querySelector('.products-list .product:nth-child(1)');
// console.log(firstProductElement);

// var buttonElements = document.querySelectorAll('.products-list .product .cta-btn');
// console.log(buttonElements[0]);


var productsListElement = document.querySelector('.products-list');

var productElement = productsListElement.querySelector('.product')

var productFirstElement = productsListElement.querySelectorAll('.product .cta-btn');
console.log(productFirstElement);

