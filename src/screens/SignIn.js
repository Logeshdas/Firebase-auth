import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button,Alert} from 'react-native';
import firebase from '@react-native-firebase/app';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrMsg] = useState(null);
  const handleLogin = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
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
    <View style={styles.container}>
      <Text>Login</Text>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});
