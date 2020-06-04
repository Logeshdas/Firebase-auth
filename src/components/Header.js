import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <>
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>Brand name</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    flex: 0.1,
    backgroundColor: '#5d5d5a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff4e3',
  },
});
