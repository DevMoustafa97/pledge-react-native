import React from 'react';
import { Text , StyleSheet , View , Button ,TouchableOpacity, Image , ImageBackground , TextInput , ScrollView} from 'react-native';



const Editprofiles = ({navigation}) =>{

const userimage = <Image source={require('../../assets/user.png')} style={styles.userimage} />
const userfirstname = <Text style={styles.textt}>First name</Text>  ;
const userlastname = <Text style={styles.textt}>Last name</Text>;
const useremail = <Text style={styles.textt}>E-mail</Text>;
const userbirthdate = <Text style={styles.textt}>Birth Date</Text>;
const usercountry = <Text style={styles.textt}>Country</Text>;
const usercity = <Text style={styles.textt}>City</Text>;
const userregion = <Text style={styles.textt}>Region</Text>;
const useraddress = <Text style={styles.textt}>Address</Text>;


    return(

<ImageBackground source = {require('../../assets/bg13.png')} style={styles.ImageBackground} >
<View>

<Text style={styles.title} >Edit Profile</Text>
{userimage}

<View style={styles.tworows}>
<View>
    {userfirstname}
    {userlastname}
    {useremail}
    {userbirthdate}
    {usercountry}
    {usercity}
    {userregion}
    {useraddress}
</View>

<View>
<TouchableOpacity><Text style={styles.edittext}>Edit</Text></TouchableOpacity>
<TouchableOpacity><Text style={styles.edittext}>Edit</Text></TouchableOpacity>
<TouchableOpacity><Text style={styles.edittext}>Edit</Text></TouchableOpacity>
<TouchableOpacity><Text style={styles.edittext}>Edit</Text></TouchableOpacity>
<TouchableOpacity><Text style={styles.edittext}>Edit</Text></TouchableOpacity>
<TouchableOpacity><Text style={styles.edittext}>Edit</Text></TouchableOpacity>
<TouchableOpacity><Text style={styles.edittext}>Edit</Text></TouchableOpacity>
<TouchableOpacity><Text style={styles.edittext}>Edit</Text></TouchableOpacity>

</View>

</View>

<View style={styles.buttons}>
<TouchableOpacity><Text style={styles.edittext}>Change Password</Text></TouchableOpacity>

<TouchableOpacity>
    <Text  style={{fontSize:20 , textDecorationLine:'underline', top:15}} >Back</Text>
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
        fontSize:45,
        fontWeight:"300",
        top:20,
        marginBottom:15, 
        marginHorizontal:80,
        textDecorationLine:"underline"

    },

    userimage:{
        height:130,
        width:130,
        marginHorizontal:110,
        marginVertical:15,

    },

    tworows:{
        flexDirection:"row",
        marginTop:15,
        marginBottom:20
        

    },

    textt:{
        fontSize: 25,
        left:20,
        marginRight:195

    },

    edittext:{
        fontSize:25,
        textDecorationLine:'underline'

    },

    buttons:{
        alignItems:'center',
        
    
    
    }
 });



export default Editprofiles;