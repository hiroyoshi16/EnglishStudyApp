// Card.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ word, index }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{index % 2 === 0 ? '問題' : '回答'}</Text>
      <Text style={styles.word}>{index % 2 === 0 ? word.en : word.jp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    backgroundColor: '#f7d794',
    borderRadius: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Card;
