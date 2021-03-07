let gameGrid = document.querySelector('.gameGrid');
import {playerBase} from './playerBase.js';
export const player = ((unit) => {
    let state = {
        unit:unit,
        chosenCell:null
        
    }

  
    let chooseCell = (turn,cb) => {
        if(turn == 'player') {
            gameGrid.addEventListener('click',(e) => {
                let cell = e.target.closest('.cell');
                if(cell.dataset.state == 'empty') {
                    state.chosenCell = cell;
                    if(turn == 'player') {
                        updateCell();
                    } else {
                        console.log("its not your turn")
                    }
                    turn = 'com'; // now computer's turn
                   
                }
            
            })
    }
         
    }
    let updateCell = () => {
        let chosenCell = state.chosenCell;
        chosenCell.innerHTML += `<p class='cellValue'>${state.unit}</p>`;
        chosenCell.dataset.state = 'full';
    }

    return {
        chooseCell
    }
})