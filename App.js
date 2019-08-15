import React from "react";
import { StyleSheet, Text, View, AsyncStorage, Image, } from "react-native";
import QuestionsScreen from "./screens/question";
//import AnswersScreen from './screens/answer'
import ProfileScreen from "./screens/profile";

import Nav from './navigator';

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

//import Onboarding from "react-native-onboarding-swiper";


/*redux components*/
import {createStore} from 'redux';
import allReducers from './reducers/index';
import {Provider,} from 'react-redux';
import {firstLaunchCheck} from './actions/index';

const store=createStore(allReducers);


export default class App extends React.Component {
  constructor(props) {
    super(props);    
  }
  
  render() {   

    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}


