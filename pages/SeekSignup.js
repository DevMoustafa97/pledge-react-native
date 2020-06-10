import React from 'react';
import { Button } from 'react-native-elements'
import { useFonts } from '@use-expo/font';
import { Formik } from 'formik';
import { ImageBackground, StyleSheet, TextInput, View ,Text,ScrollView,Alert } from 'react-native';
import {AppLoading} from 'expo'
import * as yup from 'yup'
import * as firebase from 'firebase';
import 'firebase/firestore';


export default function VolSignup({navigation}) {

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
  const firestore = firebase.firestore();


   //yup validation
   const ReviewSchema = yup.object({
    Firstname: yup.string().required(),
    Lastname: yup.string().required(),
    Email:yup.string().required().email(),
    password:yup.string().required(),
    age: yup.number().min(21).required(),
    phone: yup.number().required()

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
                    <View style = {styles.header}>
                    <Text style = {styles.textHeader} >Sign up</Text>
                    </View>
        <View style = {styles.root}>
        <Formik
            initialValues = {{Firstname:'',Lastname:'', Email:'', password:'',phone:'',age:'',type:'seek'}}
            validationSchema = {ReviewSchema}
            onSubmit = {(values) => {
                console.log(values.Email)
                auth.createUserWithEmailAndPassword(values.Email,values.password).then(resp=>{
                  
                  firebase.database().ref('users/' + resp.user.uid).set(
                    {
                      firstName:values.Firstname,
                      lastName:values.Lastname,
                      email:values.Email,
                      password:values.password,
                      phone:values.phone,
                      age:values.age,
                      type:values.type
                    })
                }).catch(err => {
                  Alert.alert(
                    'Pledge',
                    err.message,
                    [
                    
                      { text: 'OK' }
                    ],
                    { cancelable: false }
                  );
                })
                Alert.alert(
                  'Pledge',
                  'Successfully signed up log in to proceed',
                  [
                  
                    { text: 'OK', onPress: () => navigation.navigate('Login') }
                  ],
                  { cancelable: false }
                );
            }}>

            {(formikProps) => (
                <ScrollView
                  showsVerticalScrollIndicator = {false}
                >

                

                    <View style = {{marginTop:"0%"}} >
                    <Text  style = {{fontSize:32}} >First Name:</Text>
                    </View>

                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        onChangeText = {formikProps.handleChange('Firstname')}
                        value = {formikProps.values.Firstname}
                    />
                     <Text style = {{fontSize:12,color:'crimson'}}>{formikProps.touched.Firstname && formikProps.errors.Firstname}</Text>


                    <View style = {{marginTop:"0%"}} >
                    <Text  style = {{fontSize:32}} >Last Name:</Text>
                    </View>

                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "email-address"
                        onChangeText = {formikProps.handleChange('Lastname')}
                        value = {formikProps.values.Lastname}
                    />
                    <Text style = {{fontSize:12,color:'crimson'}}>{formikProps.touched.Lastname && formikProps.errors.Lastname}</Text>

                    <View style = {{marginTop:"0%"}} >
                    <Text  style = {{fontSize:32}} >Email:</Text>
                    </View>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "email-address"
                        onChangeText = {formikProps.handleChange('Email')}
                        value = {formikProps.values.Email}
                    />
                    <Text style = {{fontSize:12,color:'crimson'}}>{formikProps.touched.Email && formikProps.errors.Email}</Text>

                    <View style = {{marginTop:"0%"}} >
                    <Text  style = {{fontSize:32}} >Password:</Text>
                    </View>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        secureTextEntry = {true}
                        onChangeText = {formikProps.handleChange('password')}
                        value = {formikProps.values.password}
                    />
                    <Text style = {{fontSize:12,color:'crimson'}}>{formikProps.touched.password && formikProps.errors.password}</Text>

                    <View style = {{marginTop:"0%"}} >
                    <Text  style = {{fontSize:32}} >Phone number:</Text>
                    </View>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "numeric"
                        onChangeText = {formikProps.handleChange('phone')}
                        value = {formikProps.values.phone}
                    />
                    <Text style = {{fontSize:12,color:'crimson'}}>{formikProps.touched.phone && formikProps.errors.phone}</Text>

                    <View style = {{marginTop:"0%"}} >
                    <Text  style = {{fontSize:32}} >Age:</Text>
                    </View>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "numeric"
                        onChangeText = {formikProps.handleChange('age')}
                        value = {formikProps.values.age}
                    />
                    <Text style = {{fontSize:12,color:'crimson'}}>{formikProps.touched.age && formikProps.errors.age}</Text>

                  <Button onPress={formikProps.handleSubmit} title="Sign up" type="outline" buttonStyle = {styles.buttonStyle} titleStyle = {styles.innerText} />
                  <Button onPress = {goBack} title="Back" type="outline" buttonStyle = {styles.backButton} titleStyle = {styles.backText} />
                    
                        <Text  style = {{fontSize:32}} ></Text>
                        <Text  style = {{fontSize:32}} ></Text>
                        <Text  style = {{fontSize:32}} ></Text>
                        <Text  style = {{fontSize:32}} ></Text>
                        <Text  style = {{fontSize:32}} ></Text>
                        <Text  style = {{fontSize:32}} ></Text>
                        <Text  style = {{fontSize:32}} ></Text>
                        <Text  style = {{fontSize:32}} ></Text>
                  
                    
                </ScrollView>
            )
            
          }
        </Formik>
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
        // marginBottom:"5%",
        marginTop:"60%",
        width:"80%",
        textAlign:'center',
        marginHorizontal:"10%"

    },
    textHeader:{
        fontSize:50,
        fontWeight:"100",
        textAlign:"center",
        fontFamily:'Roboto'
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
        marginHorizontal:'30%',
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
    buttonStyle :{width:260,marginTop:"5%",marginHorizontal:'7%', borderRadius:10, borderColor:'#000',borderWidth:2,backgroundColor:'#ff00ff00' ,maxHeight:60 ,marginBottom:10},
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
