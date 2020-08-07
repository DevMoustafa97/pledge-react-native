import React from 'react';
import { Text , StyleSheet , View , Button ,TouchableOpacity, Image , ImageBackground , TextInput, ScrollView} from 'react-native';



const Requests = ({navigation}) =>{

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

<Text style={styles.title}> Requests </Text>

<View style={{ left:50, top:55}}> 

{/* awl user hybd2 */}
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
<TouchableOpacity style={styles.acceptbutton}>
       <Text style={styles.acceptanddeclinetext}> Accept </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.declinebutton}>
       <Text style={styles.acceptanddeclinetext}> Decline </Text>
   </TouchableOpacity>
</View>


</View>
{/* awl user done */}

{/* tani user start */}
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
<TouchableOpacity style={styles.acceptbutton}>
       <Text style={styles.acceptanddeclinetext}> Accept </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.declinebutton}>
       <Text style={styles.acceptanddeclinetext}> Decline </Text>
   </TouchableOpacity>
</View>


</View>
{/* tani user done */}

{/* talt user start */}
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
<TouchableOpacity style={styles.acceptbutton}>
       <Text style={styles.acceptanddeclinetext}> Accept </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.declinebutton}>
       <Text style={styles.acceptanddeclinetext}> Decline </Text>
   </TouchableOpacity>
</View>

</View>
{/* talt user done */}

{/* rab3 user start */}
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
<TouchableOpacity style={styles.acceptbutton}>
       <Text style={styles.acceptanddeclinetext}> Accept </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.declinebutton}>
       <Text style={styles.acceptanddeclinetext}> Decline </Text>
   </TouchableOpacity>
</View>


</View>
{/* rab3 user done */}

{/* 5ams user start */}

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
<TouchableOpacity style={styles.acceptbutton}>
       <Text style={styles.acceptanddeclinetext}> Accept </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.declinebutton}>
       <Text style={styles.acceptanddeclinetext}> Decline </Text>
   </TouchableOpacity>
</View>

</View>

{/* 5ams user done */}



</View>

<View>
<TouchableOpacity>
    <Text style={{fontSize:20 , textDecorationLine:'underline' , top:60, left:150 }}> Back </Text>
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

    title:{
        fontSize:55,
        top:20,
        marginHorizontal:60,
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
        fontSize:30,
    },

    stars:{
        flexDirection:'row'
    },

    starssize:{
        width:20,
        height:20,
        bottom:40,
        left:100
        
    },

    buttons:{
        flexDirection:'row',
        left:90,
        bottom:30,
        
    },

    acceptbutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        
    },

     declinebutton:{
        borderWidth:2 ,
        borderRadius:10 ,
        left:10
    },

    acceptanddeclinetext:{
        fontSize:22 ,
        
    },

    

  

   

 });



export default Requests;