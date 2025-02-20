const transientState = {
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

