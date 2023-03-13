import { useNavigation, useRoute } from "@react-navigation/native";
import React  from "react";
import { View,Text, Button,StyleSheet ,Pressable} from "react-native";
const DashBoard=()=>{
    const route =useRoute();
    const navigation =useNavigation();
        const logout=()=>{
          navigation.navigate("Login")
        }
    return <View style={{marginTop:200}}>
      <View style={{alignItems:'center'}}>
        <Text style={[{alignItems:'center',fontWeight:"900"}]}>{route.params.email}</Text>
        <Text style={[{alignItems:'center',fontWeight:"900"}]}>{route.params.password}</Text>
        </View>
        <View style={styles.btncontainer}>
         <Pressable style={styles.btns} onPress={logout}>
       <View>
       <Text  style={[{color: 'white'},{alignItems:'center'},{fontWeight:'bold'},{fontSize:18}]}>Click Me </Text>
       </View>
       </Pressable>
     </View> 
    </View>
}
const styles = StyleSheet.create({
btncontainer: {
  backgroundColor: '#009387',
  width: '100%',
  justifyContent: 'center',
  borderRadius: 10,
},
btns: {
  height: 50,
  alignItems: 'center',
  color: 'white',
  fontWeight: 'bold',
  justifyContent: 'center',
}
});
export default DashBoard