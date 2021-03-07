import {displayController} from './view.js';
import {player} from './player.js';
import {computer} from './computer.js';
const gameController = (() => {
    let state = {
        winner:null,
        isOver:false,
        currentTurn:'player',
        player:player('X'),
        computer:computer('O')
       
      
    }
    const init = () => {
        displayController.showGrid();
        chooseTurn();
    }
    const checkWin = () => {

    }
    const chooseTurn = () => {
        switch(state.currentTurn) {
            case "player":
                state.player.chooseCell(state.currentTurn)
                break;
            case "com":
                console.log('computers turn');
              
                break;
        }
    }

    return {
        init
    }
})();

gameController.init();