// import { Sales } from "./Sales.js"
import { entreeOptions } from "./Entrees.js"
import { vegetableOptions } from "./Vegetables.js"
import { sideOptions } from "./SideDishes.js"

export const FoodTruck = async () => {
    // const salesHTML = Sales()
    const entreeOptionsHTML = await entreeOptions()
    const vegetableOptionsHTML = await vegetableOptions()
    const sideOptionsHTML = await sideOptions()

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
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            
        </article>

    `
}
