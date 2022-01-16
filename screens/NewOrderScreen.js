import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import axios from 'axios';  


export default class WelcomeScreen extends Component {

    constructor(){
        super()
        this.state={
          crust : '',
          flavor: '',
          size:'',
          table_no:''
        }

      
      }
updateOrder=()=>{

      axios.post('https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza', {
          Crust: this.state.crust,
          Flavor: this.state.flavor,
          Size: this.state.size,
          Table_No:this.state.crust
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
      
}


render(){
    return(
        <View>
           
          <TextInput placeholder="select your crust cheese or classic" onChangeText={(text)=>{this.setState({
              crust: text
            })}}></TextInput>
            <TextInput placeholder="select your flavor Cheese, Veggie, Pepperoni or Margherita" onChangeText={(text)=>{this.setState({
              flavor: text
            })}}></TextInput>
             <TextInput placeholder="select size  (Small, Medium, Large, fiesta)" onChangeText={(text)=>{this.setState({
              size: text
            })}}></TextInput>
             <TextInput placeholder="select table number " onChangeText={(text)=>{this.setState({
              table_no: text
            })}}></TextInput>
            <button onClick={this.updateOrder}>place order</button>
      <button onClick={()=>{this.props.navigation.navigate('HomeScreen')}}style={{width:100}}>orders</button>
        </View>
        
    )
}
}