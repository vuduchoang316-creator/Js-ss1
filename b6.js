let nameBook=prompt("tên sách là :");
let numberBook=prompt("số thứ tực sách là");

let nameBookToUpperTrim=nameBook.toUpperCase().trim();
console.log(`Tên sách là: ${nameBook}`);
console.log(`Mã sách là :${nameBookToUpperTrim}-${numberBook}`);
