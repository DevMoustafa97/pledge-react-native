import React, {useState}from 'react';
import { Text , StyleSheet , View, ImageBackground, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import {CheckBox, Input} from 'react-native-elements';


const ComponentsScreen = ({navigation}) => {
    const goBack = () =>{
        navigation.navigate('BookingDetails')
      }
    const [checked,setChecked] = useState(false);
    const [checked1,setChecked1] = useState(false);
    const [checked2,setChecked2] = useState(false);
    const [checked3,setChecked3] = useState(false);
    const [checked4,setChecked4] = useState(false);

            return (
        <ImageBackground source={require('../../assets/img.png')} style={{width: '100%', height: '100%'}}>
            <View>
            <View style={styles.logoAlign}>
            <Image source={require('../../assets/Logo.png')} style={styles.logo}/>
            <Text style={styles.logoText}>Pledge</Text>
            </View>
            <Text style = {styles.textHeader} >Booking Details</Text>
            </View>
            <View>
                <Text style={styles.serviceStyle}>Service required:</Text>
                <CheckBox title='Babysitting'
                containerStyle={{backgroundColor:'#ff00ff00', borderColor:'#ff00ff00'}}
                checked={checked1}
                onPress={()=>{setChecked1(!checked1)}}
                />
                <CheckBox title='Teaching'
                containerStyle={{backgroundColor:'#ff00ff00', borderColor:'#ff00ff00'}}
                checked={checked}
                onPress={()=>{setChecked(!checked)}}
                />
                <CheckBox title='Caregiving'
                containerStyle={{backgroundColor:'#ff00ff00', borderColor:'#ff00ff00'}}
                checked={checked2}
                onPress={()=>{setChecked2(!checked2)}}
                />
                
             </View>
            <View>
                <Text style={styles.serviceStyle}>Address:</Text>
                <CheckBox title='Same Address'
                containerStyle={{backgroundColor:'#ff00ff00', borderColor:'#ff00ff00'}}
                checked={checked3}
                onPress={()=>{setChecked3(!checked3)}}/>
                <CheckBox title='Another Address'
                containerStyle={{backgroundColor:'#ff00ff00', borderColor:'#ff00ff00'}}
                checked={checked4}
                onPress={()=>{setChecked4(!checked4)}}/>
                <Input placeholder='Area, Street, Appartment'/>
            </View>
            <Button onPress = {goBack} title="Next" type="outline" />
       
      
            
            
            
       

           
        </ImageBackground>
    );
}


const styles = StyleSheet.create ({
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
          },
    logoAlign:{
        flexDirection:'row'
    },
    logoText:{
    fontSize: 24,
    lineHeight: 55,
    textAlign: 'center',
    

    },
    serviceStyle:{
        fontSize:50,
        fontWeight:"100",


        
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ff00ff00",
        borderColor: "#ff00ff00",
        padding: 10
      },

    
    });    
    export default ComponentsScreen;
    







