export const transientState = {
   "entreeId": 0,
   "vegetableId": 0,
   "sideId": 0
}

export const entreeId = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const vegetableId = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const sideId = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)

}

export const saveOrderSubmission = async () => {
        const postoptions = {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        const response = await fetch("http://localhost:8088/orders", postoptions)
        const customEvent = new CustomEvent("orderSubmitted")
        document.dispatchEvent(customEvent)
}













