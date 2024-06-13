let product = {
    id: "",
    name: "",
    price: "",
    quantity: "",
}
for (let id in product) {
    product.id = prompt("Nhập ID")
    product.name = prompt("Nhập tên")
    product.price = Number(prompt("Nhập giá"))
    product.quantity = Number(prompt("Nhập số lượng"))
    break

}

console.log(product);