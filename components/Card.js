import React from 'react'
import {View,StyleSheet} from 'react-native'


const Card = props => {
return(
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
);
};

const styles = StyleSheet.create({
    card:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:5,
        elevation:5,
        borderRadius:10
    },

});

export default Card;
