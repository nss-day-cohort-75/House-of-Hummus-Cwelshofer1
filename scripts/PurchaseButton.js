import { saveOrderSubmission } from "./TransientState.js"
import { transientState } from "./TransientState.js"

const handleOrderSubmission = (clickEvent) => {
    if(clickEvent.target.id === "saveOrder" && transientState.entreeId !== 0 && transientState.sideId !== 0 
        && transientState.vegetableId !==0) {
        saveOrderSubmission()
        transientState.entreeId = 0
        transientState.vegetableId = 0
        transientState. sideId = 0
    }
}
export const saveOrder = () => {
    
    document.addEventListener("click", handleOrderSubmission)
    return "<div> <button id='saveOrder'>Purchase Combo</button></div>"
}