import React from 'react';
import { Button } from 'react-native-elements';
import { useFonts } from '@use-expo/font';

import { ImageBackground, StyleSheet, Text, View ,Image } from 'react-native';
import {AppLoading} from 'expo'




export default function Home({navigation}) {

  const goLogin = () =>{
    navigation.navigate('Login')
  }
  const goVolSignup = () =>{
    navigation.navigate('VolSignup')
  }
  const goSeekSignup = () =>{
    navigation.navigate('SeekSignup')
  }


  let [fontsLoaded] = useFonts({'farsan': require('../assets/fonts/Farsan-Regular.ttf'),});

  if (!fontsLoaded) {
    return <AppLoading />;
  }else {

  return (
    <ImageBackground source = {require('../assets/background.png')} style = {styles.background}>
      <View style = {styles.root}>
        <Text style = {{fontFamily:'farsan' ,fontSize:72 , textAlign:'center', paddingTop:10}}>Pledge</Text>
        <Image source={require('../assets/Logo.png')}  />
        <Button onPress = {goLogin} title="Log in" type="outline" buttonStyle = {styles.buttonStyle} titleStyle = {styles.innerText} />
        <Text style = {{marginVertical:10}}>Or sign up as a :</Text>
        <Button onPress = {goVolSignup} title="Volunteer" type="outline" buttonStyle = {styles.buttonStyle} titleStyle = {styles.innerText} />
        <Button onPress = {goSeekSignup} title="Seeker for help" type="outline" buttonStyle = {styles.buttonStyle} titleStyle = {styles.innerText} />
       </View>
    </ImageBackground>
  );
  
  }
}

const styles = StyleSheet.create({
    root:{
      padding:50,
      paddingTop:"20%",
    },
     
    inputContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    background:{
      width:"100%",
      height:"100%",
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    logo:{
      borderColor:"#000",
      borderWidth:1
    },
    buttonStyle :{borderRadius:10, borderColor:'#000',borderWidth:2,backgroundColor:'#ff00ff00' ,maxHeight:60 ,marginBottom:10},
    innerText:{color:"#000", fontSize:32, fontWeight:"100" ,fontFamily:'Roboto' },
    input:{
      width:'80%',
      borderColor:'black',
      borderWidth:1,
      padding:10
    },
    listItem:{
      padding:10,
      backgroundColor:'#ccc',
      borderColor:'black',
      borderWidth:1,
      marginVertical:10,
      borderRadius:15
    }
    
});
