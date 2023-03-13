import {NavigationRouteContext, useNavigation} from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Button,
  Pressable,
  Dimensions,
  StatusBar,  
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Login = () => {

  const [MyuserData,setMyuserData]=useState();
// //Api Demo starts
//    const getUserData= async ()=>{
//         const response=await fetch("https://fakestoreapi.com/products")
//         const myData= await response.json();
//         setMyuserData(myData)
//         console.log(myData)
//     }

//     useEffect(()=>{
//     getUserData();
//     },[]);
//     return(
//         <View>
//             <FlatList data={MyuserData} renderItem={({item})=>{
//               return(<View>
//                 <View>
//                 <Image style={{height:300,width:300}} source={{ uri:item.image}} /></View>
//                 <Text>{item.id}</Text>
//                 <Text>{item.price}</Text>
//                 <Text>{item.title}</Text>
//               </View>
//             );
//             }} />
//         </View>

//     );

//     //Api Demo Ends
  <StatusBar backgroundColor="rgba(52, 52, 52, alpha)" />;
  const {height} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dashboard = () => {
    navigation.navigate('DashBoard', {
      email: email,
      password: password,
    });
  };
  const recoveryemail = () => {
    navigation.navigate('GivePassword', {});
  };

  const register = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Login</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email </Text>
        <View style={styles.textInput}>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email"
          ></TextInput>
        </View>
        <Text style={styles.text_footer}>Password </Text>
        <View style={styles.textInput}>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            placeholder="Enter Password"
            style={styles.input}
          ></TextInput>
        </View>
        <View>
          <Pressable onPress={recoveryemail}>
            <View>
              <Text
                style={[
                  {color: '#05375a'},
                  {alignItems: 'center'},
                  {fontSize: 16},
                  {marginLeft: 190},
                ]}
              >
                Forgot Passwod ?
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.btncontainer}>
          <Pressable style={styles.btn} onPress={dashboard}>
            <View>
              <Text
                style={[
                  {color: 'white'},
                  {alignItems: 'center'},
                  {fontWeight: 'bold'},
                  {fontSize: 20},
                ]}
              >
                Log In
              </Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Text style={[{marginTop: 8}, {color: '#05375a'}, {fontSize: 16}]}>
            New Here? Register Below.
          </Text>
        </View>
        <View style={styles.btncontainer}>
          <Pressable style={styles.btn} onPress={register}>
            <View>
              <Text
                style={[
                  {color: 'white'},
                  {alignItems: 'flex-end'},
                  {fontWeight: 'bold'},
                  {fontSize: 20},
                ]}
              >
                Sign Up
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.fb}>
          <Pressable style={styles.btn} onPress={register}>
            <View>
              <Text
                style={[
                  {color: 'white'},
                  {alignItems: 'center'},
                  {fontWeight: 'bold'},
                  {fontSize: 20},
                ]}
              >
                Sign Up
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>

    // <View style={styles.container}>

    //
    //    <View style={styles.container}>
    //
    //     </View>
    //    <View style={styles.container}>

    // </View>
    //
    // <View style={styles.container}>
    //     <Pressable style={styles.btn} onPress={register}>
    //   <View>
    //   <Text  style={[{color: 'black'},{alignItems:'center'},{fontWeight:'bold'}]}>Sign In</Text>
    //   </View>
    //   </Pressable>
    // </View>
    // <View style={styles.container}>
    //     <Pressable onPress={() => navigation.navigate('Firstscreen')}style={styles.fbbtn} >
    //   <View>
    //   <Text  style={[{color: '#4765A9'},{alignItems:'center'},{fontWeight:'bold'},]}>Sign In With Facebook</Text>
    //   </View>
    //   </Pressable>
    // </View>
    // <View style={styles.container}>
    //     <Pressable onPress={() => navigation.navigate('Firstscreen')}style={styles.googlebtn} >
    //   <View>
    //   <Text  style={[{color: '#DD4D44'},{alignItems:'center'},{fontWeight:'bold'}]}>Sign In With Google</Text>
    //   </View>
    //   </Pressable>
    // </View>
    // <View style={styles.container}>
    //     <Pressable onPress={() => navigation.navigate('Firstscreen')}style={styles.appplebtn} >
    //   <View>
    //   <Text  style={[{color: '#363636'},{alignItems:'center'},{fontWeight:'bold'}]}>Sign In With Apple</Text>
    //   </View>
    //   </Pressable>
    // </View>
    // </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.35;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  logo: {
    height: height_logo,
    width: height_logo,
    borderRadius: 20,
  },
  text_footer: {
    marginTop: 10,
    color: '#05375a',
    fontSize: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    border: '#e8e8e8',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#009387',
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  btncontainer: {
    backgroundColor: '#009387',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  btn: {
    height: 50,
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  fbbtn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7EAF4',
  },
  appplebtn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },
  googlebtn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAE9EA',
  },
});
export default Login;
