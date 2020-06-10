import React from 'react';
import { Button  } from 'react-native-elements'
import { useFonts } from '@use-expo/font';
import { Formik } from 'formik';
import * as yup from 'yup'
import { ImageBackground, StyleSheet, TextInput, View ,Text,Alert } from 'react-native';
import {AppLoading} from 'expo'
import * as firebase from 'firebase';
import 'firebase/firestore';


export const user = 'useruser';

export default function Login  ({navigation}) {

    //firebase auth stuff
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
  //yup validation
  const ReviewSchema = yup.object({
    email:yup.string().required().email(),
    password:yup.string().required()
  })

  

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
            validationSchema = {ReviewSchema}
            onSubmit = {(values) => {
              auth.signInWithEmailAndPassword(values.email, values.password).then((resp) => {
                
                if(resp.user.uid){

                  navigation.navigate('Profile', {uid:resp.user.uid})
                }
                
                
              }).catch(err=>{
                
                  Alert.alert(
                    'Pledge',
                    err.message,
                    [
                    
                      { text: 'OK' }
                    ],
                    { cancelable: false }
                  );
               
              })
              


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
                    <Text style = {{fontSize:12,color:'crimson'}}>{formikProps.touched.email && formikProps.errors.email}</Text>
                    <View style = {{marginTop:"5%"}}>
                    <Text style = {{fontSize:48}} >Password:</Text>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:"0%", paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        secureTextEntry = {true}
                        onChangeText = {formikProps.handleChange('password')}
                        value = {formikProps.values.password}
                     />
                     <Text style = {{fontSize:12,color:'crimson'}}>{formikProps.touched.password && formikProps.errors.password}</Text>
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
    buttonStyle :{width:260,marginTop:"10%",marginHorizontal:'7%', borderRadius:10, borderColor:'#000',borderWidth:2,backgroundColor:'#ff00ff00' ,maxHeight:60 ,marginBottom:10},
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
