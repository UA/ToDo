import React from "react";
import { StyleSheet, Text, View, Platform, ScrollView,TextInput,Alert } from "react-native";
import Button from './Button'; 
const items = [];

export default class App extends React.Component {

  constructor(props){
super(props);
this.addItem = this.addItem.bind(this);
  }
  state= {
    toDo: ''
  }

  renderItem(item) {
    return (
      <View key={item} style={styles.toDoListItem}>
        <Text style={styles.text}>
        {item}
        </Text>
      </View>
    );
  }

  addItem(){
   if(this.state.toDo == ''){
    Alert.alert('Lütfen bir şeyler giriniz.')
    return;
   }
    items.push(this.state.toDo);
    this.setState({toDo:''});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <View style={styles.input} >
            <TextInput value={this.state.toDo} onChangeText={(v)=>this.setState({toDo:v})} placeholder={'Giriniz'} style={styles.textInput}></TextInput>
          </View>
          <View style={styles.button} >
             <Button onPress={this.addItem} text={'Ekle'}></Button>
          </View>
        </View>
        <View style={styles.line}></View>
        <ScrollView>
         {
           items.map((item)=> this.renderItem(item))
         }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  inputView: {
    height: 100,
    flexDirection: "row",
    padding: 8
  },
  input: {
    flex: 4,
    marginRight: 8,
    justifyContent:'center',
  },
  button: {
    flex: 1,
  },
  toDoListItem: {
    height: 100,
    margin: 8,
    paddingLeft:10,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 12,
    backgroundColor:'#f4f4f4',
    borderColor:'black',

  },
  text: {
    color: "black",
    fontSize:24,
  },
  textInput: {
    height:32,
    borderRadius:12,
  },
  line: {
    height:0.8,
    backgroundColor:'gray',
    marginHorizontal:10,
  }
});
