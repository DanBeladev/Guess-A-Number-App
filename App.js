import React ,{useState}from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHnadler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHnadler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const configureNewGmaeHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content  = <StartGameScreen onStartGame={startGameHnadler}/>

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHnadler}/>
  }else if(guessRounds>0){
    content = <GameOverScreen roundsNumber ={guessRounds} userNumber={userNumber} onRestart = {configureNewGmaeHandler}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  flex:1
}
});
