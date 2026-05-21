const cart = JSON.parse(localStorage.getItem("cart")) || [] //读取购物车，如果没有就创建空购物车
console.log(cart)