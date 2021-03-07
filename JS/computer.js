import {playerBase} from './playerBase.js';

export const computer = ((unit,cells) => {
   let base = playerBase(unit,false);
   let state = {
        cells,
        ...base.state
   }

   const chooseCell = (setTurn) => {
        
        
        let emptyCells = state.cells.filter(cell => cell.dataset.state =='empty');
        let rand = Math.floor(Math.random()*emptyCells.length);
        let randCell = emptyCells[rand];


     
        if(emptyCells.length > 0) {
    
            randCell.innerHTML += `<p class="cellValue">${state.unit}</p>`;
            randCell.dataset.state = 'full';
            setTurn('player');
        }
        
   }

   return {
        chooseCell
   }

  
})