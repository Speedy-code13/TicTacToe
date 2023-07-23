import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import Board from './src/components/Board.js'
import GameState from './src/utilities/GameState.js';
import SplashScreen from './src/screens/SplashScreen.js';

export default function App() {
  const [inSplashScreen, setInSplashScreen] = useState(false)
  const onRoundOver = (gameState) => {
    setInSplashScreen(true)
  }
  return (
    <SafeAreaView style={styles.container}>
      {inSplashScreen && <SplashScreen/>}
      <Board onRoundOver={onRoundOver}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});
