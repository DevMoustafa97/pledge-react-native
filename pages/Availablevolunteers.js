import React from 'react';
import { Text , StyleSheet , View , Button ,TouchableOpacity, Image , ImageBackground , TextInput , ScrollView} from 'react-native';



const Availablevolunteers = ({navigation}) =>{

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

<ImageBackground source = {require('../../assets/bg13.png')} style= {styles.ImageBackground} >
<ScrollView>
<Text style={styles.title}> Available Volunteers </Text>
<View style={{left:50 , top:55}}>
<View>

<View style={styles.imageandname}>
{userimage}
{username}
</View>
 
{/* <View>
    el rating stars
</View> */}
{fivestarss}

<View style={styles.buttons}>
<TouchableOpacity style={styles.viewbutton}>
       <Text style={styles.viewandbooktext}> View </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.bookbutton}>
       <Text style={styles.viewandbooktext}> Book </Text>
   </TouchableOpacity>
</View>



</View>


<View>

<View style={styles.imageandname}>
{userimage}
{username}
</View>
 
{/* <View>
    el rating stars
</View> */}
{fivestarss}

<View style={styles.buttons}>
<TouchableOpacity style={styles.viewbutton}>
       <Text style={styles.viewandbooktext}> View </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.bookbutton}>
       <Text style={styles.viewandbooktext}> Book </Text>
   </TouchableOpacity>
</View>



</View>


<View>

<View style={styles.imageandname}>
{userimage}
{username}
</View>
 
{/* <View>
    el rating stars
</View> */}
{fivestarss}

<View style={styles.buttons}>
<TouchableOpacity style={styles.viewbutton}>
       <Text style={styles.viewandbooktext}> View </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.bookbutton}>
       <Text style={styles.viewandbooktext}> Book </Text>
   </TouchableOpacity>
</View>



</View>


<View>

<View style={styles.imageandname}>
{userimage}
{username}
</View>
 
{/* <View>
    el rating stars
</View> */}
{fivestarss}

<View style={styles.buttons}>
<TouchableOpacity style={styles.viewbutton}>
       <Text style={styles.viewandbooktext}> View </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.bookbutton}>
       <Text style={styles.viewandbooktext}> Book </Text>
   </TouchableOpacity>
</View>



</View>


<View>

<View style={styles.imageandname}>
{userimage}
{username}
</View>
 
{/* <View>
    el rating stars
</View> */}
{fivestarss}

<View style={styles.buttons}>
<TouchableOpacity style={styles.viewbutton}>
       <Text style={styles.viewandbooktext}> View </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.bookbutton}>
       <Text style={styles.viewandbooktext}> Book </Text>
   </TouchableOpacity>
</View>

</View>

</View>
<TouchableOpacity>
    <Text style={{fontSize:20 , textDecorationLine:'underline' ,  top:60, left:150}}> Back </Text>
</TouchableOpacity>




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

    title:{
        fontSize:40,
        //fontWeight:"300",
        top:20,
        left:10,
        textDecorationLine:"underline"
    },


    imageandname:{
        flexDirection:'row',
        
        
    },

    userimage:{
        width:80,
        height:80
    },

    username:{
        fontSize:25,
    },

    stars:{
        flexDirection:'row'
    },

    starssize:{
        width:20,
        height:20,
        bottom:40,
        left:100,
        
    },

    
    buttons:{
        flexDirection:'row',
        left:90,
        bottom:30,
    
    },

    viewbutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        
    },

     bookbutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        left:10
    },

    viewandbooktext:{
        fontSize:22 ,
    }


 });



export default Availablevolunteers;