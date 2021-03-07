let gameGrid = document.querySelector('.gameGrid');
import {playerBase} from './playerBase.js';
export const player = ((unit) => {
    const basePlayer = playerBase(unit,true);
   
    let chooseCell = (e,setTurn) => {
         
             
                if(e.target) {
                    let cell = e.target.closest('.cell');
                    if(cell.dataset.state == 'empty') {
                        console.log('we are empty');
                        basePlayer.state.chosenCell = cell;
                        

                            basePlayer.updateCell();
                            setTurn('com');

                    
                            
                     
                    
                    }
                }
                
               
            
    
         
    }
  

    return {
        turn:basePlayer.state.isTurn,
        chooseCell
    }
})