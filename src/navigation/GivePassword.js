import { useNavigation, useRoute } from "@react-navigation/native";
import React  from "react";
import { View,Text, Button,StyleSheet,Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const GivePassword=()=>{
   
    const navigation =useNavigation();
        const newpass=()=>{
          navigation.navigate("Login")
        }
    return <View style={{marginTop:30}}>
          <Text style={styles.text_footer}>Enter Recovery Email Here : </Text>
      <View style={styles.textInput}>
  
   
<TextInput placeholder="Enter Email Address:"></TextInput>
        </View>
        <View style={styles.btncontainers}>
         <Pressable style={styles.btns} onPress={newpass}>
       <View>
       <Text  style={[{color: 'white'},{alignItems:'center'},{fontWeight:'bold'},{fontSize:18}]}>Click Me </Text>
       </View>
       </Pressable>
     </View>      

    </View>
}
const styles = StyleSheet.create({

  textInput: {
    border: '#e8e8e8',
    borderWidth: 1,
    marginTop: 10,
    borderRadius:10,
  borderColor:'#009387',
    color: '#05375a',
  },
  text_footer: {
    marginTop:10,
    color: '#05375a',
    fontSize: 20,
  },
    btns: {
      height: 50,
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
      justifyContent: 'center',
    },

    btncontainers: {
      backgroundColor: '#009387',
      width: '100%',
       justifyContent: 'center',
      borderRadius: 10,
      marginTop: 15,  
    }, 
  
})
export default GivePassword
