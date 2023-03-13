  import 'react-native-gesture-handler'
    import React, { useEffect } from 'react';


  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import HomeScreen from './src/navigation/HomeScreen';
  import FirstScreen from './src/navigation/FirstScreen';
  import Login   from './src/navigation/Login';
  import Register  from './src/navigation/Register';
  import DashBoard from './src/navigation/DashBoard';
  import SplashScreens from './src/navigation/SplashScreens';
  import GivePassword from './src/navigation/GivePassword';
  import Products from './src/navigation/Products';


  const Stack=createStackNavigator();

  const App=()=>{
    // useEffect(()=>{
    //   SplashScreen.hide();
    // },[])
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        
          <Stack.Screen name="SplashScreens" component={SplashScreens}/>
          <Stack.Screen name="FirstScreen" component={FirstScreen}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="GivePassword" component={GivePassword}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="DashBoard" component={DashBoard}/>
          <Stack.Screen name="Products" component={Products}/>
        </Stack.Navigator>

      </NavigationContainer>
    )
  }
  export default App;
  // class App extends React.Component{
  //   constructor(){
  //     super();
  //     this.state={ isVisible : true,
  //     // this.state={
  //     //   name:'',
  //     //   password:'',
  //     //   address:''
  //     }
  //   }
  // // submit(){
  // // console.warn("All Values : ",this.state)
  // // }
  // Hide_Splash_Screen=()=>{
  // this.setState({ isVisible : false
  // });
  // }
  // componentDidMount(){
  //   var that = this;
  // setTimeout(function(){ that.Hide_Splash_Screen();
  // }, 3000);
  // }

  //   render(){
    

  //       let Splash_Screen = (
  //         <View style={styles.SplashScreen_RootView}>
  //         <View style={styles.SplashScreen_ChildView}>
  //         <Image source={require('./src/images/home.jpg')}
  //         style={{width:'100%', height: '100%', resizeMode:
  //         'contain'}} />
  //         </View>
  //         </View> )
  //       return(
  //       // <View>
  //       //   <TextInput placeholder='Enter name' 
  //       //   style={styles.TextBox}
  //       //   onChangeText={(text)=>{this.setState({name:text})}}>
          
  //       //   </TextInput>
  //       //   <TextInput placeholder='Enter Password' 
  //       //   style={styles.TextBox}
  //       //   secureTextEntry={true}
  //       //   onChangeText={(text)=>{this.setState({password:text})}}>
          
  //       //   </TextInput>
  //       //   <TextInput placeholder='Enter E-mail Address' 
  //       //   style={styles.TextBox}
  //       //   onChangeText={(text)=>{this.setState({address:text})}}>
          
  //       //   </TextInput>
  //       //   <Button title='Submit'onPress={()=>{this.submit()}}/>
  //       // </View>

  // <View style = { styles.MainContainer }>
  // <Text style={{textAlign: 'center',width: '100%'
  // ,backgroundColor: '#36fffc'}}> The screen came earlier shows a Splash Screen</Text>
  // {
  // (this.state.isVisible === true) ? Splash_Screen : null
  // }
  // </View>
  // );
  // }
  // }
  // const styles = StyleSheet.create(
  // {
  // MainContainer:
  // {
  // flex: 1,
  // justifyContent: 'center', alignItems: 'center',
  // paddingTop: ( Platform.OS === 'android' ) ? 10 : 0
  // },
  // SplashScreen_RootView:
  // {
  // justifyContent: 'center', flex:1,
  // margin: 20,
  // position: 'absolute', width: '100%',
  // height: '100%',
  // },
  // SplashScreen_ChildView:
  // {
  // ustifyContent: 'center', alignItems: 'center', 
  // flex:1,
  // },
  // });
  // //     );
  // //   }
  // // }

  // // const App  = () => {
  // // return (
  // //   <AppNavContainer >
    
  // // </AppNavContainer>
  // // )
  //    const styless=StyleSheet.create({
  //     TextBox:{
  //       borderColor:'skyblue',
  //       borderWidth:2,padding:10,marginHorizontal:20,marginTop:10,marginVertical:20
  //     }
  //    })
  


  //export default App;
