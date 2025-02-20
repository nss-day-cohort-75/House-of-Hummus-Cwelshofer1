import { entreeId } from "./TransientState.js"

const handleEntreeChange = (changeEvent) => {
    if(changeEvent.target.name ==="entree"){
        entreeId(parseInt(changeEvent.target.value))
    }
}




export const entreeOptions = async () => {
    document.addEventListener("change", handleEntreeChange )
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    let entreeHTML = ""

    entreeHTML += "<h2>Base Dish</h2>"

    const entreeStringArray = entrees.map(
        (entree) => {
            return `<div><input type='radio' name='entree' value='${entree.id}' /> ${entree.name}  </div> `
        }
    ) 
    entreeHTML += entreeStringArray.join("")
    return entreeHTML
}