import React, {useState, useRef} from 'react'
import {StyleSheet, View} from 'react-native'
import Box from './Box.js'
import getGameState from '../getGameState.js'
import GameState from '../GameState.js'

const Board = ({onGameStateUpdate}) => {
    const {container, rowLayout} = styles
    const logicalBoard = new Array(9).fill("", 0, 9)
    let xTurn = true
    const borderSize = 4

    const onBoxUpdate = (i) => {
        if(logicalBoard[i] !== "") return logicalBoard[i] 

        const modifiedBoxState =  xTurn ? "X" : "O"
        logicalBoard[i] = modifiedBoxState
        xTurn = !xTurn

        const gameState = getGameState(logicalBoard, modifiedBoxState)

        if(gameState !== GameState.Ongoing)
            onGameStateUpdate(gameState)

        return logicalBoard[i]
    }

    return (
        <View style={container}>
            <View style={rowLayout}>
                <Box index={0} state={logicalBoard[0]} onBoxUpdate={onBoxUpdate} borderStyles={{borderRightWidth: borderSize, borderBottomWidth: borderSize}}/>
                <Box index={1} state={logicalBoard[1]} onBoxUpdate={onBoxUpdate} borderStyles={{borderRightWidth: borderSize, borderBottomWidth: borderSize}}/>
                <Box index={2} state={logicalBoard[2]} onBoxUpdate={onBoxUpdate} borderStyles={{borderBottomWidth: borderSize}}/>
            </View>

            <View style={rowLayout}>
                <Box index={3} state={logicalBoard[3]} onBoxUpdate={onBoxUpdate} borderStyles={{borderRightWidth: borderSize, borderBottomWidth: borderSize}}/>
                <Box index={4} state={logicalBoard[4]} onBoxUpdate={onBoxUpdate} borderStyles={{borderRightWidth: borderSize, borderBottomWidth: borderSize}}/>
                <Box index={5} state={logicalBoard[5]} onBoxUpdate={onBoxUpdate} borderStyles={{borderBottomWidth: borderSize}}/>
            </View>

            <View style={rowLayout}>
                <Box index={6} state={logicalBoard[6]} onBoxUpdate={onBoxUpdate} borderStyles={{borderRightWidth: borderSize}}/>
                <Box index={7} state={logicalBoard[7]} onBoxUpdate={onBoxUpdate} borderStyles={{borderRightWidth: borderSize}}/>
                <Box index={8} state={logicalBoard[8]} onBoxUpdate={onBoxUpdate}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    rowLayout: {
        flexDirection: 'row'
    }
})

export default Board