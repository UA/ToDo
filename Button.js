import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default class Button extends Component{
    render(){
        return(
        <View style= {styles.buttonview}>
            <TouchableOpacity onPress={this.props.onPress} style= {styles.touchableOpacity}>
                <Text style= {styles.fontSize}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        </View>
        );
        
    }
}

const styles = StyleSheet.create({
    buttonview:{
    backgroundColor:'white',
    flex:1,  
    borderRadius:12,
    },
    touchableOpacity:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    text:{
        fontSize:16,
    }
});