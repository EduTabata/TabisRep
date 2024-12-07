const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data=board]")
const winningMessage = document.querySelector("[data-winning-message]")
const winningMessageTextElement = document.querySelector("[data-winning-message-text]")
const restarButton = document.querySelector("[data-restart-Button]")


let isoTurn;

const combinacoesvitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const startGame() => {
    isoTurn = false;


    for (const cell of cellElements){
        cell.classList.remove("o")
        cell.classList.remove("x")
        cell.removeEventListener("click", handleclick)
        cell.addEventListener("click, handleClick", {once : true});
        
        setBoardHoverClass()
        winningMessage.classList.remove('show-winning-message')
    }
    
    const endGame = (isDraw) => {
        if (isDraw) {
            winningMessageTextElement.innerText = "Empate!"
        } else { winningMessageTextElement.innerText= isoTurn ? '"o" Venceu!': '"x" Venceu!'}
        winningMessage.classList.add("show-winning-message")
    }

    const checkForWin = (currentplayer) => {
        return winningCombinations.some(combination) => {
            return combination.every(index) => {
                return cellElements[index].classList.contains(currentplayer)
            }
        }
    }
     
    const checkForDraw = () => {
        return [...cellElements].every((cell) =>{
            return,cell.classList.contains("x") || cell.classList,contains("o")
        })
    }
     const placeMark = (cell, classToAdd) => {
        cell.classList.add(classToAdd)
     }

     const setBoardHoverClass = () => {
        board.classList.remove('o')
        board.classList.remove('x')

        if (isoTurn) {
            board.classList.add('o')
            board.classList.add('x')
        }
     }
    
     const swapTurns = () => {
        isoTurn = !isoTurn;

        setBoardHoverClass()
     }
     const handleClick = (e) => {
        //colocar a marcação (X ou O)
        const cell = e.target
        const classToAdd = isoTurn ? 'o' :'x'
        

        placeMark(cell, classToAdd)

        //Veriuficar por vitória
        const isWin = checkForWin(classToAdd)
        
        //Verificar por empate
        const isDraw = checkForDraw()
        if (isWin) {
            endGame(false)
        } else if(isDraw){endGame(true)}
    else {
        //mudar o símbolo
        swapTurns()
    } 
     }
     
     startGame()

     restartButton.addEventListener("click", startGame)
    