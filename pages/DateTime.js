import React , {useState} from 'react';
import { Button } from 'react-native-elements'
import { useFonts } from '@use-expo/font';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ImageBackground, StyleSheet, View ,Text } from 'react-native';
import {AppLoading} from 'expo'
import { TouchableOpacity } from 'react-native-gesture-handler';




export default function DateTime  ({navigation}) {
    
    const [day,setDay] = useState('DD')
    const [month,setMonth] = useState('MM')
    const [year,setYear] = useState('YYYY')
    const [hour,setHour] = useState('HH')
    const [minutes,setMinutes] = useState('MM')

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    
    if(isDatePickerVisible){
        setDatePickerVisibility(false);
    }
      
    let selection = '' + date 

     setDay(selection.slice(8,10))
     setMonth(selection.slice(4,7))
     setYear(selection.slice(11,15))
     setHour(selection.slice(16,18))
     setMinutes(selection.slice(19,21))

    hideDatePicker()
        
  };

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
            <View>
                        <View style = {styles.header}>
                        <Text style = {styles.textHeader} >Availability</Text>
                        </View>
                        
                        <Text>Date</Text>
                        <Text>{day}/{month}/{year}</Text>
                        <Text>Time</Text>
                        <Text>{hour}:{minutes}</Text>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={showDatePicker}
                        >
                            <Text>select date and time</Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        
                        
            </View>
        
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
        fontSize:48,
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
        textDecorationStyle:'underline',
        padding:0,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
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
