import { entreeOptions } from "./Entrees.js"
import { vegetableOptions } from "./Vegetables.js"
import { sideOptions } from "./SideDishes.js"
import { saveOrder } from "./PurchaseButton.js"
import { orders } from "./Sales.js"

export const FoodTruck = async () => {
    const entreeOptionsHTML = await entreeOptions()
    const vegetableOptionsHTML = await vegetableOptions()
    const sideOptionsHTML = await sideOptions()
    const saveOrderHTML = await saveOrder()
    const ordersHTML = await orders()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <section>
        ${entreeOptionsHTML}
        </section>
        <section>
        ${vegetableOptionsHTML}
        </section>
        <section>
        ${sideOptionsHTML}
        </section>
        <article>
        ${saveOrderHTML}
        </article>
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${ordersHTML}
        </article>

    `
    
}

