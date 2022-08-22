console.log("Hello Word")

//Tinh tong 3 chu so
var nb=123;
var tram= Math.floor(nb / 100);
nb=nb % 100;
var chuc=Math.floor(nb / 10);
nb=nb % 10;
var donVi= nb;

var tong=tram + chuc + donVi;

console.log(tong);


// Tính lương một ngày của nhân viên
//Input
var luong;
var songay;
//Xử lí
songay=31;
luong=31*100000;
//Output
console.log("Lương tháng này của bạn là: " + luong);

//Giá trị trung bình
//Input
var number_1=1;
var number_2=2;
var number_3=3;
var number_4=4;
var number_5=5;
var gttb;
//Xử lí
gttb=(number_1+number_2+number_3+number_4+number_5)/5;
//Output
console.log("Giá trị trung bình là: " + gttb);

//Quy đổi tiền
//Input
var USD=2;
var VND;
//Xử lí
VND=USD*23500;
//Output
console.log("Sau khi quy đổi: " + VND);

//Chu vi và diện tích hình chữ nhật
//Input
var dai=4;
var rong=3;
var S;
var P;
//Xử lí
S=dai*rong;
P=(dai+rong)*2;
//Output
console.log("Chu vi hình chữ nhật là: " + P);
console.log("Diện tích hình chữ nhật là: " + S);

//Tổng hai ký số
//Input
var number=32;
//Xử lí
var so_hang_dv=number%10;
var so_hang_chuc=Math.floor(number/10);
var tong=so_hang_chuc + so_hang_dv;
//Output
console.log("Tổng hai chữ số là: " + tong);

