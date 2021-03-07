export const playerBase = ((unit,turn) => {
    let state = {
        unit:unit,
        chosenCell:null,
        isTurn:turn
        
    }
    let updateCell = (cell) => {
        let chosenCell = state.chosenCell;
        chosenCell.innerHTML += `<p class='cellValue'>${state.unit}</p>`;
        chosenCell.dataset.state = 'full';
    }
    return {
        state,
        updateCell
    }
})