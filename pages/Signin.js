//mazbot bs css momkn yb2a ahsan
import React from 'react';
import { Text , StyleSheet , View , Button ,TouchableOpacity, Image , ImageBackground , TextInput, Dimensions} from 'react-native';

const { width: WIDTH } = Dimensions.get('window') //msh fahmaha

const Signin = ({navigation}) => {
    return(


<ImageBackground source = {require('../../assets/bbg9.jpg')} style= {styles.ImageBackground}>

<View style={styles.logoandlogotext}>
     <Image source={require('../../assets/logo.png')} style={styles.logo}/>
     <Text style={styles.logotext}>Log In</Text>
</View>

<View>
    <Text style={styles.text}>E-mail:</Text>
    <TextInput
       placeholder = ' '
      placeholderTextColor="indigo" 
       underlineColorAndroid='transparent' // eh da
       style={styles.input}
    /> 


    <Text style={styles.text}>Password:</Text>
    <TextInput
       placeholder = ' '
       secureTextEntry={true}
       placeholderTextColor={'black'}
       underlineColorAndroid='transparent' //ehda??
       style={styles.input}
    />


<TouchableOpacity style={styles.touchableopacity}>
    <Text style={styles.text}> Log In </Text>
</TouchableOpacity>
    
</View>

</ImageBackground>




    );
};



const styles = StyleSheet.create ({
    ImageBackground:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:null,
        height:null
    },

    logo:{
        width:120,
        height:120
    },

    logotext: {
        color:'black',
        fontSize : 20,
        fontWeight:'700',
        marginTop: 10,    
    },

    logoandlogotext:{
       alignItems:'center' 
    },

    input:{
        width: WIDTH - 55,
        height:45,//ERTFA3 EL MORB3
        borderRadius:10, //TDWERT EL MORB3
        fontSize:20, //5AT EL KATABA
        paddingLeft:20, //BO3D EL KALAM 3N EL MORB3
        marginHorizontal:25,
        color: 'indigo' ,//da lon eli haytktbt
        //backgroundColor:'	rgb(255,240,245)', //LON ELMORB3 KOLO
        borderWidth: 1  ,//SOMK EL MORB3
    
    },

    
    
     text:{
        fontSize:20,
        paddingLeft:30,
        fontWeight:"500",
        marginTop:20, //el masafa ben el kalam wl fo2o
        marginBottom:5
    },

    touchableopacity:{
        width: WIDTH - 55,
        height:75,//ERTFA3 EL MORB3
        borderRadius:25, //TDWERT EL MORB3
        //backgroundColor= ' rgb(255,240,245)',
        //justifyContent='center',
        //color:'indigo',
        alignItems:'center',
        marginTop:10
    }




  });



export default Signin;