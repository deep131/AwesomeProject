import React, { useEffect } from 'react';
import { Text, View,Image, Dimensions ,StyleSheet,StatusBar} from 'react-native';


const SplashScreens = ({navigation }) => {
  const COLORS = {primary: '#FFFFFF'};
  <StatusBar backgroundColor={COLORS.primary} />
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('FirstScreen'); //Navigate to your destination screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'FirstScreen' }], //Remove the custom screen from history
      });
    }, 5000); // set your time out here in miliseconds 
  }, []);
  return (

 
    <View style={styles.container}>
     
        <View style={styles.header }>
          <Image 
          source={require('../images/homesweet.jpg')}
          style={styles.logo}
          resizeMode="stretch"/>

    
      

        </View>
     
    </View>
  );
};

export default SplashScreens;
const {height}=Dimensions.get("screen")
const height_logo=height*.30
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignContent:'center',
    alignItems:'baseline'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      paddingHorizontal: 20,
      marginLeft:50,
      paddingBottom: 50
  },
  footer: {

      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent:'center'
      // paddingVertical: 30
  },
  text_header: {
      color: '#05375a',
      fontWeight: 'bold',
      fontSize: 30
  },
  logo:{
    height:height_logo,
    width:height_logo,
    borderRadius:20
  },
  text_footer: {
    marginTop:20,
      color: '#05375a',
      fontSize: 20,
  
  }, 
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});