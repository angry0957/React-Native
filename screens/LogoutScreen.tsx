import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  FlatList,
  ScrollView,
  Alert,
  AsyncStorage
} from 'react-native';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import LogoutHelper from './LogoutHeloper';
import HomeScreen from './Home';
import { Toast } from 'native-base';


export default class LogoutScreenDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  // componentDidMount(){
  //   this.setState({isLoading: true})
  //   let data = {
  //     method: 'POST',
  //     credentials: 'same-origin',
  //     mode: 'same-origin',
  //     body: JSON.stringify({
  //       "token": ""
  //     }),
  //     headers: {
  //       'Accept':       'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   }

  //   fetch('http://easyrentsale.com/api/getcategory', data)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       if(responseJson.result){

  //         for (var i = responseJson.data.category.length - 1; i >= 0; i--) {
  //           responseJson.data.category[i].image = '../assets/' + responseJson.data.category[i].id + '.png'
  //         }
  //         this.setState({data: responseJson.data.category})
  //       }
  //       else {
  //         this.setState({isLoading: false})
  //       }
  //     })
  //     .catch((error) =>{
  //       this.setState({isLoading: false})
  //     });

  // }


  // avatarImage(name) {
  //   switch (name) {
  //     case "../assets/1.png":
  //       return require("../assets/1.png");
  //     case "../assets/2.png":
  //       return require("../assets/2.png");
  //     case "../assets/3.png":
  //       return require("../assets/3.png");
  //     case "../assets/4.png":
  //       return require("../assets/4.png");
  //     case "../assets/5.png":
  //       return require("../assets/5.png");
  //     case "../assets/6.png":
  //       return require("../assets/6.png");
  //     case "../assets/7.png":
  //       return require("../assets/7.png");
  //     case "../assets/8.png":
  //       return require("../assets/8.png");
  //     case "../assets/9.png":
  //       return require("../assets/9.png");
  //     case "../assets/12.png":
  //       return require("../assets/12.png");
  //     case "../assets/11.png":
  //       return require("../assets/11.png");
  //     case "../assets/13.png":
  //       return require("../assets/13.png");
  //     case "../assets/14.png":
  //       return require("../assets/14.png");
  //     case "../assets/15.png":
  //       return require("../assets/15.png");
  //     case "../assets/16.png":
  //       return require("../assets/16.png");
  //     case "../assets/17.png":
  //       return require("../assets/17.png");
  //    case "../assets/18.png":
  //       return require("../assets/18.png");
  //     case "../assets/19.png":
  //       return require("../assets/19.png");
  //     case "../assets/21.png":
  //       return require("../assets/21.png");
  //     case "../assets/22.png":
  //       return require("../assets/22.png");
  //     case "../assets/1.png":
  //       return require("../assets/1.png");
  //     default:
  //       return require('../assets/1.png');
  //   }
  // }

  // onChange(name){
  // }

  render() {
    return (
      <View style={styles.container}>
        <LogoutHelper/>
        <HomeScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#318080',
    }
}); 