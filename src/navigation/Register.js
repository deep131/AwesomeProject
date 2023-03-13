import {useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Dimensions,
  StatusBar,
  Model,
  TouchableOpacity,
} from 'react-native';

import {
  Dropdown,

} from 'sharingan-rn-modal-dropdown';
import {TextInput} from 'react-native-gesture-handler';
export const data = [
  {
    value: '1',
    label: 'Vadodara',
    employee_salary: '320800',
    employee_age: '61',

  },
  {
    value: '2',
    label: 'Ahemdabad',
    employee_salary: '170750',
    employee_age: '63',
    avatarSource: {

    },
  },
  {
    value: '3',
    label: 'Surat',
    employee_salary: '86000',
    employee_age: '66',
  
  },
  {
    value: '4',
    label: 'Rajkot',
    employee_salary: '433060',
    employee_age: '22',
  },
];


const Register = () => {
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: 'Male', selected: false},
    {id: 2, value: false, name: 'Female', selected: false},
    {id: 3, value: false, name: 'Other', selected: false},
  ]);
  const [valueSS, setValueSS] = useState('');
  const onChangeSS = (value) => {
    setValueSS(value);
  }

  const onRadioBtnClick = item => {
    let updatedState = isLiked.map(isLikedItem =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };
  <StatusBar backgroundColor="rgba(52, 52, 52, alpha)" />;
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const loginbtn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Here</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email </Text>
        <View style={styles.textInput}>
          <TextInput placeholder="Enter Email"></TextInput>
        </View>
        <Text style={styles.text_footer}>Password </Text>
        <View style={styles.textInput}>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            style={styles.input}
          ></TextInput>
        </View>

        <Text style={styles.text_footer}>Confirm Password </Text>
        <View style={styles.textInput}>
          <TextInput
            secureTextEntry={true}
            placeholder="Re-Enter Password"
            style={styles.input}
          ></TextInput>
        </View>
        <Text style={styles.text_footer}> Gender</Text>
        <View style={styles.radioButtonContainer}>
          {isLiked.map(item => (
            <View style={styles.radioButtonContainer}>
              <TouchableOpacity
                onPress={() => onRadioBtnClick(item)}
                style={styles.radioButton}
              >
                {item.selected ? <View style={styles.radioButtonIcon} /> : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
                <Text style={styles.radioButtonText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
            
          ))}
        </View>
     
        <View style={styles.dropdown}>
          <Dropdown
          style={{borderRadius:250}}
            label="Choose City "
            data={data}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
          />
        </View>
        <View style={styles.btncontainer}>
          <Pressable style={styles.btn} onPress={loginbtn}>
            <View>
              <Text
                style={[
                  {color: 'white'},
                  {alignItems: 'flex-end'},
                  {fontWeight: 'bold'},
                  {fontSize: 20},
                ]}
              >
                Register
              </Text>
            </View>
          </Pressable>
        </View>
       
      </View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.35;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  dropdown:{
    marginTop:20,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius:300
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 8,
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
  Picker: {
    width: 300,
    flex: 1,
    borderWidth: 20,
    borderRadius: 100,
    borderColor: 'red',
    color: 'black',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
    marginTop: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#98CFB6',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
  
});
export default Register;
