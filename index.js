console.log("Hello world")
//khai báo biến var,let,const

// Từ khóa var
var userName="nguyen van a";
console.log("userName = " , userName);
 
// khai bao lai(có)
var userName="Lê văn B";
console.log("Username sau khi khai báo lại = " , userName);
// gán lại giá trị(có)
userName= "Nguyễn Văn C";
console.log("username sau khi gán lại = " ,userName)
// phạm vi (toàn cục)
// Hoisting(sử dụng biến trước khi khai báo , nhungws giá trị là undifined)
age=10;
console.log("age :", age);
var age = 30;
// nhược điểm : code khó bảo trì , khó kiểm soát được biến , khó phát hiện lỗi
// từ 2015 js phát hành phiên bản ES6 (thêm 2 từ khóa khai báo là let và const)

//Từ khóa let
let studentName="Nguyễn Minh Nam"
console.log(studentName);

// khai báo lại (không)

// gán lại giá trị 
studentName="Lê Văn B";
console.log("student khi gán lại = ", studentName);

// phạm vi (block){}

// HoistingI(có) TDZ
// console.log(studentcode)
// let studentcode="sv001";

// từ khóa const
const PI=3.14;

// khai báo lại (không)

// khả năng gán lại giá trị (không)

// phạm vi (block){}

//Hoisting (có và tương tự như let)



// CÁC KIỂU DỮ LIỆU CƠ BẢN

// kiểu số 

const firstNumber=10;
console.log("firstNum = ", firstNumber);
const seconNumber=30;
console.log("seconNumber=", seconNumber)
console.log("Kiểu dữ liệu của biến FirstNumber " , typeof firstNumber);

console.log( firstNumber + " + " + seconNumber + " = ", firstNumber + seconNumber);
console.log( firstNumber + " - " + seconNumber + " = ", firstNumber - seconNumber);
console.log( firstNumber + " * " + seconNumber + " = ", firstNumber * seconNumber);
console.log( firstNumber + " / " + seconNumber + " = ", firstNumber / seconNumber);
console.log( firstNumber + " % " + seconNumber + " = ", firstNumber % seconNumber);



//2.kiểu chuỗi
const email="nva@gmail.com";
const address="Thanh Xuân, Hà Nội";

//1.Nối chuỗi

console.log("Email = "+email + " - " +  "Addess = " + address);

//Templảte string(``)
console.log(` Email = ${email} , Address = ${address}`)

//3.Boolean(True/False)
console.log(false);

//4. Kiểu undefined
let gender;
console.log("gender:",gender);

//5.Kiểu null: Khi khia báo 1 biến nếu chúng ta chức muốn hoặc không xác định trước được giá trị của biến đó" thì mặc định là null \
const users=null;

//6.kiểu NaN (Not a Number)
console.log("Kiểu dữ liệu của NaN:" ,typeof NaN);
console.log("result:", 10/"abc");


// chuyển đổi từ một chuỗi thành một số
const historyScore="8";
const mathScore=8;
// console.log(Number(historyScore));
// console.log(parseInt(historyScore));
// console.log(+historyScore);

// chuyển đổi một số thành chuỗi

// console.log(String(mathScore));
console.log(mathScore.toString());

//3. chuyển đổi boolean
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(false));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false

// cơ chế nhập xuấ trong JS

const myName=prompt("Nhập tên của bạn: ");
const myAge= +prompt("Nhập tuổi của bạn: ");

console.log("myname = ", myName);
console.log("myAge = ", myAge);

// cơ chế lựa chọn 
const isConfirm=confirm("Bạn có xác nhận đăng xuất!");
console.log("isConfirm : ", isConfirm);