import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import Board from './components/Board.js'
import GameState from './utilities/GameState.js';

export default function App() {
  const onGameStateUpdate = (gameState) => {
      
  }
  return (
    <SafeAreaView style={styles.container}>
      <Board onGameStateUpdate={onGameStateUpdate}/>
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
