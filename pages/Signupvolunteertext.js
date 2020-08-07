import React from 'react';
import { Text , StyleSheet , View , Button ,TouchableOpacity, Image , ImageBackground , TextInput , ScrollView} from 'react-native';



const Signupvolunteertext = ({navigation}) =>{

    return(

<ImageBackground source = {require('../../assets/bg13.png')} style={styles.ImageBackground}>

<View>

<Text style={styles.title}>Sign Up</Text>

<Text style={styles.bigtext}>Hello there if u wanna join our team please contact us at: user@email.com           to get your acceptance code and join our big family</Text>

<Text style={styles.smalltext}>Already have an acceptance code?</Text>

<View style={styles.buttons}>

<TouchableOpacity style={styles.signupbutton}>
    <Text style={styles.signuptext}>Sign Up</Text>
</TouchableOpacity>

<TouchableOpacity>
    <Text  style={{fontSize:20 , textDecorationLine:'underline'}} >Back</Text>
</TouchableOpacity>

</View>


</View>

</ImageBackground>
    );
};



const styles = StyleSheet.create ({
    ImageBackground:{
        flex:1,
        //justifyContent:'center',
        alignItems:'stretch',
        width:null,
        height:null
    },

    title:{
        fontSize:55,
        top:20,
        marginHorizontal:90,
        textDecorationLine:"underline"

    },

    bigtext:{
        fontSize:35,
        top:40,
        left:20,
        width:340

    },

    smalltext:{
        fontSize:20,
        top:60,
        left:20,

    },

    signupbutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        alignItems:'center',
        marginBottom:20,
        
    },

    signuptext:{
        fontSize:40 ,
        paddingHorizontal:10,

    },

    buttons:{
        alignItems:'center',
        top:90
    }

 });



export default Signupvolunteertext;