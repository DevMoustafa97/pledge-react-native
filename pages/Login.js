import React from 'react';
import { Button ,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { useFonts } from '@use-expo/font';
import { Formik } from 'formik';

import { ImageBackground, StyleSheet, TextInput, View ,Text } from 'react-native';
import {AppLoading} from 'expo'




export default function Login({navigation}) {

  const goBack = () =>{
    navigation.navigate('Home')
  }

  let [fontsLoaded] = useFonts({'farsan': require('../assets/fonts/Farsan-Regular.ttf'),});

  if (!fontsLoaded) {
    return <AppLoading />;
  }else {

  return (
    <ImageBackground source = {require('../assets/background.png')} style = {styles.background}>
        <View style = {styles.root}>
        <Formik
            initialValues = {{email:'', password:''}}
            onSubmit = {(values) => {
                console.log(values)
            }}>

            {(formikProps) => (
                <View>
                    <View style = {styles.header}>

                    <Text style = {styles.textHeader} >Log in</Text>
                    </View>
                    <View style = {{marginTop:"5%"}} >

                    <Text  style = {{fontSize:48}} >Email:</Text>

                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:0, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "email-address"
                        onChangeText = {formikProps.handleChange('email')}
                        value = {formikProps.values.email}
                        />
                    </View>
                    <View style = {{marginTop:"5%"}}>
                    <Text style = {{fontSize:48}} >Password:</Text>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:"20%", paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        secureTextEntry = {true}
                        onChangeText = {formikProps.handleChange('password')}
                        value = {formikProps.values.password}
                    />
                    </View>
                    <Button onPress = {formikProps.handleSubmit} title="Log in" type="outline" buttonStyle = {styles.buttonStyle} titleStyle = {styles.innerText} />
                </View>
            )
            
        }
        </Formik>
        <Button onPress = {goBack} title="Back" type="outline" buttonStyle = {styles.backButton} titleStyle = {styles.backText} />
       </View>
    </ImageBackground>
  );
  
  }
}

const styles = StyleSheet.create({
    root:{
      padding:30,
      paddingTop:"0%",
    },
    
    header:{
        fontSize:72,

        //border stuff
        borderBottomColor:'#000',
        borderTopColor:'#0000',
        borderLeftColor:'#f000',
        borderRightColor:'#f000',

    textAlign:'center',
    borderWidth:2,
    marginTop:"5%",
    width:"95%",
    textAlign:'center',
    marginHorizontal:"3%"
    },
    textHeader:{
        fontSize:72,
        fontWeight:"100",
        textAlign:"center"
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
    backButton :{
        width:100,
        marginHorizontal:'32%',
          borderColor:'#0000',
          borderWidth:2,
          backgroundColor:'#ff00ff00' ,
          maxHeight:60 ,
          marginBottom:10,
        borderBottomColor : "#000",
        padding:0,
    },
    backText:{
        color:"#000", fontSize:24, fontWeight:"100" ,fontFamily:'Roboto'
    },
    buttonStyle :{width:260,marginTop:"0%",marginHorizontal:'7%', borderRadius:10, borderColor:'#000',borderWidth:2,backgroundColor:'#ff00ff00' ,maxHeight:60 ,marginBottom:10},
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
