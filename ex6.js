let products = [
    {
        id: "1",
        name: "iPhone12",
        price: 20000000
    }, {
        id: "2",
        name: "iPhone11",
        price: 10000000
    }, {
        id: "3",
        name: "samsung note 10",
        price: 50000000
    }
]

//let sortProdutcs = products.sort((p1, p2) => (p1.price - p2.price))
console.log("Products", products.sort((p1, p2) => (p1.price - p2.price)));