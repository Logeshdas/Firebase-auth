import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Entypo';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrMsg] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    if ((email && password)) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() =>
          Alert.alert(
            'Logged in successfully',
            '',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          ),
        )
        .catch(error => setErrMsg(error.message));
    } else {
      Alert.alert(
        'Please fill all the fields',
        '',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image
          source={require('../assets/images/hero.png')}
          style={styles.image}
        />

        {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <View style={styles.passwordSection}>
          <TextInput
            secureTextEntry={!showPassword ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => setPassword(password)}
            value={password}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-with-line'}
              size={20}
              color="black"
              style={{marginTop: 15}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={() =>
                toggleCheckBox
                  ? setToggleCheckBox(false)
                  : setToggleCheckBox(true)
              }
            />
            <Text style={{marginTop: 5, fontSize: 14}}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password ?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{width: '70%'}} onPress={handleLogin}>
          <Text style={styles.button}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
        
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonTwo}>
            Don't have an account? SignUp here
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  passwordSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 8,
  },
  image: {
    width: '80%',
    height: '40%',
    marginTop: 40,
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
  checkboxContainer: {
    flexDirection: 'row',
    margin: 20,
    marginRight: 50,
  },
  forgotPassword: {
    marginTop: 25,
    fontSize: 14,
    marginRight: 50,
    textDecorationLine: 'underline',
  },
});
