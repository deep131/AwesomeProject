import React
 from "react";
 import{
    StyleSheet,View,Text,Dimensions,TouchableOpacity,ScrollView
 }from 'react-native';

 const OPTIONS=['VADODARA','SURAT','RAJKOT']
 const WIDTH=Dimensions.get('window').width
 const HEIGHT=Dimensions.get('window').height
 const ModalPicker=(props)=>{

    return(
        <TouchableOpacity onPress={()=> props.changeModalVisibility(false)} style={styles.container}>
<View style={styles.modal}>

</View>
        </TouchableOpacity>
    )
 }

 const styles=StyleSheet.create({
    container:{
        flex:1,alignItems:'center', justifyContent:'center'
    },
    modal:{
        backgroundColor:'skyblue',
        borderRadius:10
    }
 })
 
 export {ModalPicker }