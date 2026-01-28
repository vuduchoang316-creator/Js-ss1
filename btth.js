// khia báo các biến cần thiết

let bookName = "Lập trình web với Javascript";//tên sách
let authorName = "Nguyễn Văn A";//tên tác giả
let pulish = 2022;//namw phát hành
let price = 100000;//số lượng
let quantily = 100;// giá

// chuẩn hóa dữ liệu
//Tên sách: Loại bỏ khoảng trắng thừa ở 2 đầu (trim) và chuyển tất cả thành chữ in hoa
bookName.trim();//loại bỏ khoảng trắng đầu và cuối
bookName.toUpperCase();//chuyển thành chữ in hoa
console.log("chuỗi sau khi loạin bỏ khoảng trắng và chuyển thành chữ in hoa: ",
    bookName.trim().toUpperCase(),
);

// Tên tác giả: Chuyển thành chữ in hoa.

console.log("tên tác giả khi chuyển thanh chữ in hoa: ", authorName.toUpperCase(),);
//Tạo mã định danh (Book ID):
// Mã sách được tạo tự động theo công thức: 3 ký tự đầu của Tên tác giả + Năm xuất bản + một số ngẫu nhiên từ 1 đến 1000.
//Ví dụ: Tác giả "NGUYEN VAN A", năm "2020", số ngẫu nhiên "123" -> Mã sách: "NGU2020-123"

//lấy ra 3 ký tự đầu tiên 
console.log("3 ký tự đầu tiên : ", authorName.slice(0, 3));
console.log("Namw xuất bản :", pulish);
console.log("số ngẫu nhiên từ 1 đến 1000", Math.ceil(Math.random() * 1000));

let bookcode = `${authorName.slice(0, 3)}-${pulish}-${Math.ceil(Math.random() * 1000)}`;
console.log("MÃ SÁCH:", bookcode);

//Tính toán số liệu:
//Tuổi của sách: Tính xem sách đã xuất bản được bao nhiêu năm (Lấy năm hiện tại là 2026 trừ đi Năm xuất bản).
//Tổng giá trị nhập kho: Giá tiền x Số lượng.

console.log('thời gian hiện tại: ', new Date());

let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let day = new Date().getDay();
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let second = new Date().getSeconds();
let millisecond = new Date().getMilliseconds();

console.log(" năm hiện tại: ", year);
console.log(" tháng hiện tại: ", month)

// Tính tuổi của sách 
let bookAge = year - pulish;
console.log("tuổi của sách: ", bookAge);

// tính tổng giá trị của sách

let toltalPrice = price * quantily;
console.log("Tổng giá trị cảu kho sách: ", toltalPrice);

console.log(`
    --- PHIẾU NHẬP KHO ---
        Mã sách: ${bookcode}
        Tên sách:${bookName}
        Tác giả: ${authorName}
        Năm xuất bản: ${pulish}
        Tuổi sách: ${bookAge}
        Tổng giá trị: ${toltalPrice} VNĐ
        Ngăn kệ gợi ý: ${Math.ceil(Math.random() * 10)} (Số ngẫu nhiên từ 1-10 tạo ra bằng Math Object)
    `)