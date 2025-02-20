import { sideId } from "./TransientState.js"

const handleSideChange = (changeEvent) => {
    if(changeEvent.target.name === "side") {
        sideId(parseInt(changeEvent.target.value))

    }
}

export const sideOptions = async () => {
    document.addEventListener("change", handleSideChange)
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    let sideHTML = ""

    sideHTML += "<h2>Sides</h2>"

    const sideStringArray = sides.map(
        (side) => {
            return `<div><input type='radio' name='side' value='${side.id}' /> ${side.title} </div>`
        }
    )
    sideHTML += sideStringArray.join("")
    return sideHTML
}


