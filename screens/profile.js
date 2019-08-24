import React from 'react';
import { StyleSheet, Text, View, Button, Image, WebView, BackHandler } from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'My Ads',
      drawerIcon: () =><Image resizeMode={'contain'}  style={{height: 20, width: 30}} source={require('../assets/MyAdsIcon.png')}
                        />
    };

    constructor(props){
      super(props)  
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
  
    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
  
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
  
    handleBackButtonClick() {
      this.props.navigation.openDrawer();
      return true;
    }

    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <WebView
          source={{uri: 'https://easyrentsale.com/user/Admin?token='}}
          style={{marginTop: 20}}
        />
      );
    }
  }

export class PricingScreen extends React.Component {
    static navigationOptions = {
      title: 'Pricing',
      drawerIcon: () =><Image resizeMode={'contain'}  style={{height: 20, width: 30}} source={require('../assets/PricingIcon.png')}
                        />
    };

    constructor(props){
      super(props)  
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
  
    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
  
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
  
    handleBackButtonClick() {
      this.props.navigation.openDrawer();
      return true;
    }

    render() {
      const {navigate} = this.props.navigation;
      return (
        <WebView
        source={{uri: 'https://easyrentsale.com/pricing'}}
        style={{marginTop: 20}}
      />
      );
    }
  }

  export class AdsPostingScreen extends React.Component {
    static navigationOptions = {
      title: 'Ads Posting',
      drawerIcon: () =><Image resizeMode={'contain'}  style={{height: 20, width: 30}} source={require('../assets/AdPostingIcon.png')}
                        />
    };
    constructor(props){
      super(props)  
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
  
    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
  
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
  
    handleBackButtonClick() {
      this.props.navigation.openDrawer();
      return true;
    }

    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <WebView
          source={{uri: 'https://easyrentsale.com/product/add?token'}}
          style={{marginTop: 20}}
        />
      );
    }
  }

  export class EasiTaxiScreen extends React.Component {
    static navigationOptions = {
      title: 'Easy Taxi',
      drawerIcon: () =><Image resizeMode={'contain'}  style={{height: 20, width: 30}} source={require('../assets/EasyTaxi.png')}
                        />
    };


    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{marginTop:30,}}>
        <Text>This is Me hii.</Text> 
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Info"
          color="#222"
        />
        </View>
      );
    }
  }


  export class EasyHomeDeliveryScreen extends React.Component {
    static navigationOptions = {
      title: 'Easy Home Delivery',
      drawerIcon: () =><Image resizeMode={'contain'}  style={{height: 20, width: 30}} source={require('../assets/HomeDelevery.png')}
                        />
    };


    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{marginTop:30,}}>
        <Text>This is Me hii.</Text> 
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Info"
          color="#222"
        />
        </View>
      );
    }
  }


  export class ContactUSScreen extends React.Component {
    static navigationOptions = {
      title: 'Contact Us',
      drawerIcon: () =><Image resizeMode={'contain'}  style={{height: 20, width: 30}} source={require('../assets/ContactUS.png')}
                        />
    };

    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{marginTop:30,}}>
        <Text>This is Me hii.</Text> 
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Info"
          color="#222"
        />
        </View>
      );
    }
  }


  export class LogoutScreen extends React.Component {
    static navigationOptions = {
      title: 'Logout',
      drawerIcon: () =><Image resizeMode={'contain'}  style={{height: 20, width: 30}} source={require('../assets/LogoutIcon.png')}
                        />
    };

    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{marginTop:30,}}>
        <Text>This is Me hii.</Text> 
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Info"
          color="#222"
        />
        </View>
      );
    }
  }