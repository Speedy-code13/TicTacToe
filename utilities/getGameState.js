import GameState from "./GameState.js"

const winCombinations =
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function isBoardFilled(logicalBoard){
    for(let i = 0; i < logicalBoard.length; ++i){
        if(logicalBoard[i] === "") return false
    }
    
    return true
}

const getGameState = (logicalBoard, modifiedBoxState) => {
    for(let i = 0; i < winCombinations.length; ++i){
        const winCombination = winCombinations[i]
        if(logicalBoard[winCombination[0]] === modifiedBoxState && 
            logicalBoard[winCombination[1]] === modifiedBoxState && 
            logicalBoard[winCombination[2]] == modifiedBoxState)
            
            return modifiedBoxState === 'X' ? GameState.WonX : GameState.WonO
    }

    if(isBoardFilled(logicalBoard)) return GameState.Draw

    return GameState.Ongoing
}

export default getGameState