import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
  Alert
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
console.disableYellowBox = true;





export default function Profile ({ navigation }) {
    
  // firebase stuff
  const firebaseConfig = {
    apiKey: "AIzaSyCoe0stc988TFu-VSHOyjU4w0AhkdynpqU",
    authDomain: "test-1f901.firebaseapp.com",
    databaseURL: "https://test-1f901.firebaseio.com",
    projectId: "test-1f901",
    storageBucket: "test-1f901.appspot.com",
    messagingSenderId: "820076856872",
    appId: "1:820076856872:web:0d17bd56f1734453cd571d",
    measurementId: "G-F2Y1GJGPMD"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  
  const auth = firebase.auth()
  
    // getting user info and storing them
    const userId = navigation.getParam('uid');
  
    var userName = '';
    var type = ''
    var profPic = '';
    var userNameLink = ''

    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
     userName = snapshot.val().firstName + ' ' + snapshot.val().lastName;
     userNameLink = snapshot.val().firstName + snapshot.val().lastName;
     type = snapshot.val().type
     profPic = snapshot.val().profPic
      
    });
    

  // Image picker stuff
  const [image, setImage] = useState( profPic|| 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png');

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  var profilePic = 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png';
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result );
    profilePic = result.uri
    console.log(profilePic)
    if (!result.cancelled) {
      this.uploadImage(result.uri,  `${userId}/${userName}`)
      .then(() => {
        Alert.alert("Pledge",'Immage uploaded successfully');
        
      })
      .catch((error) => {
        Alert.alert(error);
      });

      setImage(result.uri);
    }
  };

 uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);

    ref.getDownloadURL().then(function(url) {

      firebase.database().ref('users/' + userId).update({profPic:url})
      .then(()=>{

          console.log('we are here now')
        }
        ).catch(err=>{
          console.log(err)
        })
    })
    return ref.put(blob);
  }



   const handleLogout = ()=>{
     auth.signOut().then(() => {
       navigation.navigate('Home')
    })

  }
  const handleExplore = ()=>{
   pickImage()
  }


    //render data from database

    

    return (
      <ImageBackground source = {require('../assets/background.png')} style = {styles.background}>

      <View style={styles.container}>
          <Image style={styles.avatar} source={{uri:image}}/>
          <TouchableOpacity style={styles.changeImage} onPressIn ={handleExplore}>
                <Text style = {styles.underline}>Chage profile picture</Text>  
              </TouchableOpacity>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{userName}</Text>
              {type == 'volunteer'?<Text style={styles.userType}>Volunteer</Text>:null}
              
              {/* <Text style={styles.info}>some text</Text>
              <Text style={styles.description}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</Text>
               */}
              <TouchableOpacity style={styles.buttonContainer} onPressIn ={handleExplore}>
                <Text >Explore</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPressIn ={handleLogout}>
                <Text>Log out</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </ImageBackground>
    );
  
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#FFF",
    height:0,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    // marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    top:-200,
    },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:0,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:0,
  },
  name:{
    fontSize:28,
    color: "#000",
    fontWeight: "600"
  },
  userType:{
    fontSize:16,
    color: "#696969",
    fontWeight: "600",
    backgroundColor:"#ffb71c",
    borderRadius:30,
    paddingHorizontal:10
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:0
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:0,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:260,
    borderRadius:10,
    borderColor:'#000',
    borderWidth:2,
    backgroundColor: "#00BFFF00",
  },
  changeImage:{
    marginTop:10,
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000000"
    
  },
  background:{
    width:"100%",
    height:"100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  underline:{
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});
 