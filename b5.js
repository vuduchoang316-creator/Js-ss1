let namebook=prompt("Nhập tên sách:");
let publish=+prompt("Nhập năm xuất bản của sách");
let year= new Date().getFullYear();

let old=year-publish;

console.log(`Tên của sách là : ${namebook}`);
console.log(`Tuổi của sách là : ${old} năm`);
