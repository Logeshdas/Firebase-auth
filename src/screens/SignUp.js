import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import CheckBox from '@react-native-community/checkbox';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [errorMessage, setErrMsg] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() =>
        Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        ),
      )
      .catch(error => setErrMsg(error.message));
  };

  return (
    <>
      <View style={styles.brandContainer}>
        <Text style={styles.brand}>Brand name</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/hero.png')}
          style={styles.image}
        />

        {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={confirmPassword => setconfirmPassword(confirmPassword)}
          value={confirmPassword}
        />
        <View style={{flexDirection: 'row', margin: 20}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={() =>
              toggleCheckBox
                ? setToggleCheckBox(false)
                : setToggleCheckBox(true)
            }
          />
          <Text style={{marginTop: 5, fontSize: 14}}>
            I understand terms and conditions
          </Text>
        </View>
        <TouchableOpacity style={{width: '70%'}} onPress={handleSignUp}>
          <Text style={styles.button}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '70%'}}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonTwo}>
            Already have an account? Click here
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 8,
  },
  brandContainer: {
    flex: 0.1,
    backgroundColor: '#5d5d5a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff4e3',
  },
  image: {
    width: '80%',
    height: '30%',
    marginTop: 30,
  },
  button: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#ffa45c',
    textAlign: 'center',
    color: '#fff4e3',
    fontSize: 16,
  },
  buttonTwo: {
    padding: 10,
    borderRadius: 25,
    textAlign: 'center',
    color: '#5d5d5a',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
