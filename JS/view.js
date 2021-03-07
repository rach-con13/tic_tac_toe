export const displayController = (() => {
        let grid = ["","","",
                "","","",
                "","",""];
        let cells = Array.from(document.querySelectorAll('.cell'))
        
    
    const showGrid = (() => {
            
            cells.forEach((cell,index) => {
                cell.innerHTML = `<p class='cellValue'>${grid[index]}</p>`;
            })
            
    })

    const showAlert = ((alert) => {
        console.log(alert);
    })

    return {
        showGrid,
        cells,
        showAlert
    }
})();