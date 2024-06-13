let book = [
    {
        author: "Bob",
        name: "book1"
    },
    {
        author: "Auth",
        name: "book2"
    }
];
let input = prompt("Nhập tên tác giả")
//let input = "Auth"
let result = book.find(book => book.author === input)
if (result == undefined) {
    result = "Không tìm thấy sách"
}
console.log("result", result);