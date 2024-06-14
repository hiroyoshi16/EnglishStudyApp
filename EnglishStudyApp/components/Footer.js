import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Footer = ({ onCorrect, onIncorrect, isDisabled }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[styles.buttonCorrect, isDisabled && styles.disabledButton]}
        onPress={onCorrect}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>正解</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonIncorrect, isDisabled && styles.disabledButton]}
        onPress={onIncorrect}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>不正解</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  buttonCorrect: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
  },
  buttonIncorrect: {
    backgroundColor: '#F44336',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ddd',
  },
});

export default Footer;


