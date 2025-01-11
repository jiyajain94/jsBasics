function maketea(typeoftea) {
    return `making ${typeoftea}`
    console.log(test)
}
let teaOrders = maketea("lemon tea")
console.log(teaOrders)

function ordertea(teatype) {
    function confirmorder() {
        return `order confirmed for chai`
    }
    return confirmorder
}
let orderconfirmation = ordertea("chai")
console.log(orderconfirmation())

const calculatetotal = (price,quantity) => price*quantity
let totalcost = calculatetotal(499, 100)
console.log(totalcost)

function maketea(typeoftea) {
    return `maketea ${typeoftea}`
}
function processteaorder(teafunction){
    return teafunction("earl grey")
}
let order = processteaorder(maketea)
console.log(order)

function createteamaker() {
    return function (teatype) {
        return `making ${teatype}`
    }
}
let teamaker = createteamaker()
let result = teamaker("green tea")
console.log(result) //nested functions