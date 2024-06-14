// Log.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Log = ({ correctWords, incorrectWords }) => {
  return (
    <View style={styles.log}>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>正解</Text>
        {correctWords.map((word, index) => (
          <Text key={index} style={styles.word}>{word.en}</Text>
        ))}
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>不正解</Text>
        {incorrectWords.map((word, index) => (
          <Text key={index} style={styles.word}>{word.en}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  log: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f6e58d',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  word: {
    fontSize: 16,
  },
});

export default Log;
