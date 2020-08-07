import React, {useState} from 'react';
import { Text,View, TouchableOpacity, StyleSheet, ImageBackground,Image, Button } from 'react-native';
import {CheckBox, Input} from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const BookingDetails = ({navigation}) => {
    const goBack = () =>{
        navigation.navigate('ComponentsScreen')
      }
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
    return(
        <ImageBackground source={require('../../assets/img.png')} style={{width: '100%', height: '100%'}}>
            <View>
            <View style={styles.alignment}>
            <Image source={require('../../assets/Logo.png')} style={styles.logo}/>
            <Text style={styles.logoText}>Pledge</Text>
            </View>
            <View>
    <Text style = {styles.textHeader} >Booking Details </Text>
            </View>
            <View>
            </View>
            <View>
                <View style={styles.alignment}>
            <Text style={styles.textStyle}>Date:</Text>

            <Text style={styles.textStylee}>{day}/{month}/{year}</Text>
                </View>

                <View style={styles.alignment}>
                        <Text style={styles.textStyle}>Time:</Text>
                        <Text style={styles.textStylee}>{hour}:{minutes}</Text>
                
                </View>
                       
                        <TouchableOpacity
                            style={styles.button}
                            onPress={showDatePicker}
                        >
                            <Text style={styles.textStylee}>select date and time</Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <Text numberOfLines={1}>               
    _____________________________________________________________________________
                </Text>


            </View>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={{fontSize:30}}>Search for volunteers</Text>
            </TouchableOpacity>
           </View>
           <Button onPress = {goBack} title="Back" />

        </ImageBackground>
);
}

const styles= StyleSheet.create({
    textHeader:{
        fontSize:50,
        fontWeight:"100",
        textAlign:"center",
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
        logo:{
            width: 50,
            height: 50
        },
        
        logoText:{
        fontSize: 24,
        lineHeight: 55,
        textAlign: 'center'
        },
        textStyle:{
            fontSize:50,
            marginTop:50
            
    },
        alignment:{
            flexDirection:'row'
        },
        
        textStylee:{
            fontSize:50,
            fontWeight:"100",
            marginTop:50
        },
        button: {
            alignItems: "center",
            backgroundColor: "#ff00ff00",
            borderColor: "#ff00ff00",
            padding: 10
          },
          buttonStyle :{
              width:260,
              
              marginHorizontal:'7%',
                borderRadius:13,
                 borderColor:'#000',
                 borderWidth:2,
                 backgroundColor:'#ff00ff00' ,
                 
                 marginBottom:10,
                 marginLeft:2,
                 marginTop:50,
                 padding:5,
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'center',
                 width:'100%'
                 
                 
        },
        textStyleee:{
            fontSize:50,
            marginTop:50,
            color:'#0000FF'
            
    },
    
})
export default BookingDetails;
