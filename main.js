/* object litheral */
let book1 = {
    bookId: "B001",
    bookName: "book 001",
    bookPrice: 50,
    bookAuthor: "author1",
    bookPublisher: "publisher1",
    info: function () {
        console.log("Hãy bình chọn cho sách này")
    }
};
console.log("Thông tin sách1:", book1)

/* object constructor functions */
function Book2(bookId, bookName, bookPrice, bookAuthor, bookPublisher) {
    return {
        bookId, bookName, bookPrice, bookAuthor, bookPublisher,
        info: function () {
            console.log("Hãy bình chọn cho sách này")
        }
    }
}
let book2 = new Book2("B002", "book002", 60, "author2", "publisher2")
console.log("Thông tin sách2:", book2)


/* object */
let book3 = new Object();
book3.bookId = "B003";
book3.bookName = "book003";
book3.bookPrice = 70;
book3.bookAuthor = "author3";
book3.bookPublisher = "publisher3";
book3.info = function () {
    console.log("Hãy bình chọn cho sách này")
}
console.log("Thông tin sách3:", book3)

/* javascript class*/
class Book4 {
    constructor(bookId, bookName, bookPrice, bookAuthor, bookPublisher) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookPrice = bookPrice;
        this.bookAuthor = bookAuthor;
        this.bookPublisher = bookPublisher;
    }
    info() {
        console.log("Hãy bình chọn cho sách này")
    }
}
let book4 = new Book4("B004", "book004", 80, "author4", "publisher4")
console.log("Thông tin sách4:", book4)
