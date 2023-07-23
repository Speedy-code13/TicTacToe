import React, {useState, useRef} from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Board from './src/components/Board.js'
import GameState from './src/utilities/GameState.js';
import SplashScreen from './src/screens/SplashScreen.js';

export default function App() {
  const {blurContainer, container} = styles
  const [inSplashScreen, setInSplashScreen] = useState(false)
  const gameResult = useRef('erorr')

  const onRoundOver = (gameState) => {
    setInSplashScreen(true)
    gameResult.current = gameState
  }

  const onRestartGame = () => {
    setInSplashScreen(false)
  }

  
  return (
    <SafeAreaView style={container}>
      {inSplashScreen ? <SplashScreen onRestartGame={onRestartGame} gameResult={gameResult.current}/> : <Board onRoundOver={onRoundOver}/>}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
