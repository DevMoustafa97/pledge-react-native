import React from 'react';
import { Text , StyleSheet , View , Button ,TouchableOpacity, Image , ImageBackground , TextInput, ScrollView} from 'react-native';



const Volunteerprofile = ({navigation}) =>{
    
    const username = <Text style={styles.username}> User Name </Text>
    const userimage = <Image source={require('../../assets/user.png')} style={styles.userimage} />
 

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

<View style={styles.buttons}>

<TouchableOpacity style={styles.availabilitybutton}>
       <Text style={styles.availabilityandrequeststext}> Availability </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.requestsbutton}>
       <Text style={styles.availabilityandrequeststext}> Requests </Text>
   </TouchableOpacity>

   </View>

   <View style={{height:80}}/> 

<TouchableOpacity>
    <Text style={{fontSize:20 , textDecorationLine:'underline', left:150}}> Edit profile </Text>
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
        height:170,
        width:170,
        marginHorizontal:110,
        marginVertical:15,

    },

    username:{
        fontSize:35,
        marginHorizontal:95,
        fontWeight:"600",
        height:60



    },


    stars:{
        flexDirection:'row'
    },

    starssize:{
        width:35,
        height:35,
        left:100,
        marginBottom:40
        
    },

    availabilitybutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        alignItems:'center',
        
        
    },

    requestsbutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        alignItems:'center',
        top:20
        
    },

    availabilityandrequeststext:{
        fontSize:40 ,
        

    },
    
    buttons:{
        //flexDirection:'row',
        justifyContent:'center',
        marginBottom:10
        
    }

 });



export default Volunteerprofile;