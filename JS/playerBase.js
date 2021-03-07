export const playerBase = (() => {
    let state = {
        unit:unit,
        chosenCell:null
        
    }
    let updateCell = () => {
        let chosenCell = state.chosenCell;
        chosenCell.innerHTML += `<p class='cellValue'>${state.unit}</p>`;
        chosenCell.dataset.state = 'full';
    }
    return {
        state,
        updateCell
    }
})