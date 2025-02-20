import { vegetableId } from "./TransientState.js"

const handleVegetableChange = (changeEvent) => {
    if(changeEvent.target.name === "vegetable") {
        vegetableId(parseInt(changeEvent.target.value))
    }
}



export const vegetableOptions = async () => {
    document.addEventListener("change", handleVegetableChange )

    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()
    
    let vegetableHTML = ""

    vegetableHTML += "<h2>Vegetables</h2>"

    const vegetableStringArray = vegetables.map(
        (vegetable) => {
            return `<div><input type='radio' name='vegetable' value='${vegetable.id}' /> ${vegetable.type} </div>`
        }
    )
    vegetableHTML += vegetableStringArray.join("")
    return vegetableHTML
}


