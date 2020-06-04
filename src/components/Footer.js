import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.1,
    backgroundColor: '#5d5d5a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff4e3',
  },
});
