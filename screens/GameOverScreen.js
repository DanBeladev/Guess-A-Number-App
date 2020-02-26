import React from 'react'
import {View,StyleSheet,Text, Button, Image} from 'react-native'

const GameOverScreen = props => {
return(
    <View style={styles.screen}>
        <Image
        style={styles.gameOverImg}
        source={require('../assets/game-over.png')}></Image>
        <Text >The Game is Over!</Text>
        <Text >Number of rounds: {props.roundsNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <Button title="NEW GAME" onPress={props.onRestart}/>
    </View>
)
};

const styles = StyleSheet.create({
    screen:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    },
    gameOverImg:{
        width:300,
        maxWidth:'80%',
        height:200

    }
});

export default GameOverScreen;
