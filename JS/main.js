import {displayController} from './view.js';
import {player} from './player.js';
import {computer} from './computer.js';
let gameGrid = document.querySelector('.gameGrid');
const gameController = (() => {
    let val = 0;
    let state = {
        winner:null,
        isOver:false,
        currentTurn:'player',
        player:player('X'),
        computer:computer('O',displayController.cells)
       
      
    }
    let init = () => {
    
        chooseTurn();
        console.log(state.player);
        displayController.showGrid();
    
    }
    const checkWin = () => {

    }
    let setTurn = (turn) => {
        state.currentTurn = turn;
    }
    let chooseTurn = () => {
     
        console.log(state.currentTurn);
        if(state.currentTurn == 'player') {
            gameGrid.addEventListener('click',(e) => {
                state.player.chooseCell(e,setTurn);
                chooseTurn();
            })
         
        } else{
            state.computer.chooseCell(setTurn);
        
           
        }
   
    }

    return {
        init,
        player:state.player,
        turn:state.currentTurn,
        chooseTurn
    }
})();

gameController.init();
