import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default props => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.coreMine}></SafeAreaView>
      <SafeAreaView style={styles.line}></SafeAreaView>
      <SafeAreaView
        style={[styles.line, {transform: [{rotate: '45deg'}]}]}></SafeAreaView>
      <SafeAreaView
        style={[styles.line, {transform: [{rotate: '90deg'}]}]}></SafeAreaView>
      <SafeAreaView
        style={[styles.line, {transform: [{rotate: '135deg'}]}]}></SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coreMine: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black',
  },
});
