export const orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=entree&_expand=vegetable&_expand=side")
    const orders = await response.json()

    let ordersHTML = ""
    const ordersStringArray = orders.map(
        (order) => {
            const orderPrice = order.entree.price + order.vegetable.price + order.side.price
            return `<div>Receipt #${order.id} = $${orderPrice.toFixed(2)}`
        }
    )
    ordersHTML = ordersStringArray.join("")
    return ordersHTML
}





