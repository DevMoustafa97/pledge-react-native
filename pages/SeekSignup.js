import React from 'react';
import { Button } from 'react-native-elements'
import { useFonts } from '@use-expo/font';
import { Formik } from 'formik';
import { ImageBackground, StyleSheet, TextInput, View ,Text,ScrollView } from 'react-native';
import {AppLoading} from 'expo'




export default function SeekSignup({navigation}) {
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
            initialValues = {{fname:'',lname:'', email:'', password:'',phone:'',age:'',type:'seeker'}}
            onSubmit = {(values) => {
              console.log(values)
            }}>

            {(formikProps) => (
                <ScrollView
                  showsVerticalScrollIndicator = {false}
                >

                

                    <View style = {{marginTop:"5%"}} >
                    <Text  style = {{fontSize:32}} >First Name:</Text>
                    </View>

                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        onChangeText = {formikProps.handleChange('fname')}
                        value = {formikProps.values.fname}
                    />


                    <View style = {{marginTop:"5%"}} >
                    <Text  style = {{fontSize:32}} >Last Name:</Text>
                    </View>

                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "email-address"
                        onChangeText = {formikProps.handleChange('lname')}
                        value = {formikProps.values.lname}
                    />

                    <View style = {{marginTop:"5%"}} >
                    <Text  style = {{fontSize:32}} >Email:</Text>
                    </View>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "email-address"
                        onChangeText = {formikProps.handleChange('email')}
                        value = {formikProps.values.email}
                    />

                    <View style = {{marginTop:"5%"}} >
                    <Text  style = {{fontSize:32}} >Password:</Text>
                    </View>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        secureTextEntry = {true}
                        onChangeText = {formikProps.handleChange('password')}
                        value = {formikProps.values.password}
                    />


                    <View style = {{marginTop:"5%"}} >
                    <Text  style = {{fontSize:32}} >Phone number:</Text>
                    </View>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "numeric"
                        onChangeText = {formikProps.handleChange('phone')}
                        value = {formikProps.values.phone}
                    />

                    <View style = {{marginTop:"5%"}} >
                    <Text  style = {{fontSize:32}} >Age:</Text>
                    </View>
                    <TextInput 
                        style={{height: 50, borderColor: 'black', borderWidth: 2 ,borderRadius:7, marginBottom:10, paddingHorizontal:15,fontSize:21}}
                        placeholder = ''
                        keyboardType = "numeric"
                        onChangeText = {formikProps.handleChange('age')}
                        value = {formikProps.values.age}
                    />

                  <Button onPress={formikProps.handleSubmit} title="Sign up" type="outline" buttonStyle = {styles.buttonStyle} titleStyle = {styles.innerText} />
                  <Button onPress = {goBack} title="Back" type="outline" buttonStyle = {styles.backButton} titleStyle = {styles.backText} />
                    
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
        fontSize:72,
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
