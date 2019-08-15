import React, { Component } from 'react';
import { TextField } from 'react-native-materialui-textfield';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ImageBackground,
  Alert,
  ScrollView,
  Picker,
  StatusBar,
  ToastAndroid,
  TouchableWithoutFeedback,
  TouchableOpacity,
  CheckBox
} from 'react-native';
import Loader from './LoaderScreen';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import * as ImagePicker from 'expo-image-picker'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import Toast from 'react-native-simple-toast';


class EditScreen extends Component {

  constructor(props) {
    super(props);
      this.state = {
        name: '',
        email   : '',
        username: '',
        password: '',
        mobile: '',
        profile: '',
        isLoading: false,
        pickerResult: null,
        hidePassword: true,
      }
      this.update = this.update.bind(this)
      this.change = this.change.bind(this);
      this.changePassword = this.changePassword.bind(this);

  }

  _pickImg = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
    });
    if(pickerResult.cancelled == true){
      return
    }

    this.setState({
      pickerResult,
    });
  };

  componentDidMount(){
    let user_data = this.props.facebookToken.FirstLaunchCheck
    this.setState({
      "email": user_data.email,
      "username": user_data.username,
      "name": user_data.name,
      "profile": user_data.profile,
      "mobile": user_data.mobile_no,

    })
  }

  change(){
    this.setState({hidePassword: !this.state.hidePassword})
  }

  changePassword(){
    const {navigate} = this.props.navigation;
    let user_data = this.props.facebookToken.FirstLaunchCheck
    let profile = ''
    if (this.state.pickerResult == null){
      profile = user_data.profile
    }
    else {
      profile = this.state.pickerResult.base64
    }
    let data2 = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        "token": user_data.token,
        "user_id": user_data.user_id,
        "password": this.state.password,
        "cpassword":this.state.password
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      }
    }

    fetch('https://www.easyrentsale.com/api/changepassword', data2)
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.result){
          let body = {
            "username": this.state.username,
            "email":  this.state.email,
            "mobile_no": this.state.mobile,
            "name": this.state.name,
            "profile": profile
          }
          const result = Object.assign({}, this.props.facebookToken.FirstLaunchCheck, body);
          this.props.dispatch(firstLaunchCheck(result))
          Toast.show("Profile Updated Successfully", Toast.SHORT)
          this.setState({isLoading: false})
          navigate('Home')
        }
        else {
          this.setState({isLoading: false})
          Toast.show(responseJson, Toast.SHORT);
        }
      })
      .catch((error) =>{
        this.setState({isLoading: false})
      });

  }

  update(){
    this.setState({isLoading: true})
    const {navigate} = this.props.navigation;
    let user_data = this.props.facebookToken.FirstLaunchCheck
    let profile = ''
    if (this.state.pickerResult == null){
      profile = user_data.profile
    }
    else {
      profile = this.state.pickerResult.base64
    }
    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        "token": user_data.token,
        "user_id": user_data.user_id,
        "username": this.state.username,
        "email":  this.state.email,
        "mobile_no": this.state.mobile,
        "name": this.state.name,
        "profile": profile 
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      }
    }

    fetch('https://www.easyrentsale.com/api/updateprofile', data)
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.result){
            if(this.state.password == ''){
              this.setState({isLoading: false})
            let body = {
              "username": this.state.username,
              "email":  this.state.email,
              "mobile_no": this.state.mobile,
              "name": this.state.name,
              "profile": profile
            }
            const result = Object.assign({}, this.props.facebookToken.FirstLaunchCheck, body);
            this.props.dispatch(firstLaunchCheck(result))
            Toast.show("Profile Updated Successfully", Toast.SHORT)
            navigate('Home')
            this.setState({isLoading: false})

          }
          else{
            this.changePassword()
          }
        }
        else {
          this.setState({isLoading: false})
          Toast.show(responseJson, Toast.SHORT);
        }
      })
      .catch((error) =>{
        this.setState({isLoading: false})
      });

  }




  render() {
    let Loading:any = '';
      if (this.state.isLoading) {
        Loading =  <DotIndicator style={{top: '50%', position: 'absolute', alignSelf: 'center'}} color='white' />
      }
      else{
        Loading=null;
      }
    let { pickerResult } = this.state;
    let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null;
    let profile = <Image
                    source={{uri: this.state.profile}}
                    style={{ width: 100, height: 100, borderRadius: 100/2}}
                    />
    return (
      <ImageBackground source={require('../assets/BG.png')} style={styles.body}>
        {Loading}

      <View style={styles.container}>
        <TouchableOpacity onPress={this._pickImg}>
          {pickerResult
            ? <Image
                source={{uri: imageUri}}
                style={{ width: 100, height: 100, borderRadius: 100/2 }}
              />
            : profile}
        </TouchableOpacity>

          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.2}}>
            <Image source={require('../assets/UserIcon.png')}
              style={{top: 30}} />
            </View>
            <View style={{flex: 0.8}}>
            <TextField
              style={styles.input}
              textColor= 'white'
              label='Name'
              value={this.state.name}
              onChangeText={ (name) => this.setState({ name }) }
            />
            </View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.2}}>
            <Image source={require('../assets/EmailIcon.png')}
              style={{top: 30}} />
            </View>
            <View style={{flex: 0.8}}>
            <TextField
              style={styles.input}
              textColor= 'white'
              label='Email'
              value={this.state.email}
              onChangeText={ (email) => this.setState({ email }) }
            />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.2}}>
            <Image source={require('../assets/UserIcon.png')}
              style={{top: 30}} />
            </View>
            <View style={{flex: 0.8}}>
            <TextField
              editable={false} selectTextOnFocus={false}
              style={styles.input}
              textColor= 'white'
              label='Username'
              value={this.state.username}
              onChangeText={ (username) => this.setState({ username }) }
            />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.2}}>
            <Image source={require('../assets/LockIcon.png')}
              style={{top: 20}} />
            </View>
            <View style={{flex: 0.8}}>
              <TextField
                style={styles.input}  
                textColor= 'white'
                label='Password'
                secureTextEntry={this.state.hidePassword}
                value={this.state.password}
                onChangeText={ (password) => this.setState({ password }) }
              />
              <TouchableWithoutFeedback
            onPress={this.change}
            >
            
            <Image 
              source={require('../assets/EyeShape.png')}
              resizeMode={'contain'}   /* <= changed  */
              style={{alignSelf: 'flex-end', position:'absolute', top: 25, height: 20}} />
            </TouchableWithoutFeedback>  
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.2}}>
            <Image source={require('../assets/MobileIcon.png')}
              style={{top: 30}} />
            </View>
            <View style={{flex: 0.8}}>
            <TextField
              style={styles.input}
              textColor= 'white'
              label='Mobile'
              value={this.state.mobile}
              onChangeText={ (mobile) => this.setState({ mobile }) }
            />
            </View>
          </View>
          
            <View style={{flex: 1, flexDirection: 'row', padding: 10, height: 70, justifyContent: 'center', marginTop: 10}}>
            <TouchableOpacity 
            onPress={this.update}
            style={{height: 50, flex: 15, flexDirection: 'column', borderRadius: 40, padding: 10, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center'}}>
              <Text  style={{padding: 20, alignSelf: 'center'}}>Update</Text>
            </TouchableOpacity>
            </View>
      </View>
      </ImageBackground>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    padding: 10,
  },
  
});



function mapStateToProps(state) {
  return {
      facebookToken: state
  }
}
const mapDispatchToEvents = (dispatch) => {
  return {
    dispatch,
    INC,
    firstLaunchCheck
  };
};
export default connect(mapStateToProps, mapDispatchToEvents)(EditScreen)