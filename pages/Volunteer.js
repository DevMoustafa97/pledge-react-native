import React from 'react';
import { Text , StyleSheet , View , Button ,TouchableOpacity, Image , ImageBackground , TextInput, ScrollView} from 'react-native';



const Volunteer = ({navigation}) =>{
    
    const username = <Text style={styles.username}> User Name </Text>
    const userimage = <Image source={require('../../assets/user.png')} style={styles.userimage} />
    const bio = <Text style={styles.bio}> bio data about the user  i am layla i am 20 ysr old i am a student i enjoy bla bla bla bla</Text>


    const fivestarss =
    <View style={styles.stars}>
    <Image source={require('../../assets/1star.png')} style={styles.starssize}/>
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    </View>
    
    
    const fourstarss =
    <View style={styles.stars}>
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    </View>
    
    
    const threestarss =
    <View style={styles.stars}>
    <Image source={require('../../assets/1star.png')} style={styles.starssize}/>
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    </View>
    
    
    const twostarss =
    <View style={styles.stars}>
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    </View>
    
    
    const onestarss =
    <View style={styles.stars}>
    <Image source={require('../../assets/1star.png')} style={styles.starssize} />
    </View>


    return(

<ImageBackground source = {require('../../assets/bg13.png')} style={styles.ImageBackground} >
<ScrollView>
<View>



{userimage}
{username}
{/* ana mzwda hieght bta3 user name 3shan ydene msafa n7ot rating stars lma ahotha azbto */}
{fivestarss}
{bio}

<View style={styles.buttons}>

<TouchableOpacity style={styles.acceptbutton}>
       <Text style={styles.acceptanddeclinetext}> Accept </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.declinebutton}>
       <Text style={styles.acceptanddeclinetext}> Decline </Text>
   </TouchableOpacity>

   </View>

<TouchableOpacity>
    <Text style={{fontSize:20 , textDecorationLine:'underline', left:150}}> Back </Text>
</TouchableOpacity>




</View>
</ScrollView>
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

    userimage:{
        height:140,
        width:140,
        marginHorizontal:110,
        marginVertical:15,

    },

    username:{
        fontSize:35,
        marginHorizontal:95,
        textDecorationLine:'underline',
        height:60

    },

    stars:{
        flexDirection:'row'
    },

    starssize:{
        width:35,
        height:35,
        left:100,
        
    },

    bio:{
        top:20,
        left:15,
        fontSize:27,
        height:210

    },

    acceptbutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        alignItems:'center',
        right:7
        
    },

    declinebutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        alignItems:'center',
        left:7
        
    },

    acceptanddeclinetext:{
        fontSize:40 ,
        

    },
    
    buttons:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:20
        
        
    }

 });



export default Volunteer;