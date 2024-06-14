import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import words from './words';

const App = () => {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState([]);

  useEffect(() => {
    if (incorrectCount >= 5) {
      Alert.alert('ゲームオーバー', '不正解が5回に達しました。最初からやり直してください。', [
        { text: 'OK', onPress: handleRestart },
      ]);
    } else if (index >= words.length) {
      Alert.alert('Congratulations!', '100個の単語を全て学習しました！', [
        { text: 'OK', onPress: handleRestart },
      ]);
    }
  }, [incorrectCount, index]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handleRestart = () => {
    setIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setIncorrectWords([]);
  };

  const handleCorrect = () => {
    setCorrectCount((prevCount) => prevCount + 1);
    handleNext();
  };

  const handleIncorrect = () => {
    setIncorrectCount((prevCount) => prevCount + 1);
    setIncorrectWords((prevWords) => [...prevWords, words[index]]);
    handleNext();
  };

  const isCardEven = index % 2 === 0;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Card word={words[index]} index={index} />
        <View style={styles.buttonContainer}>
          <Button title="次へ" onPress={handleNext} />
          <Button title="最初から" onPress={handleRestart} />
        </View>
        <Footer onCorrect={handleCorrect} onIncorrect={handleIncorrect} isDisabled={isCardEven} />
        <Text style={styles.status}>
          正解数: {correctCount} / 不正解数: {incorrectCount}
        </Text>
        <Text style={styles.note}>不正解5回以内で合格</Text>
        <View style={styles.incorrectWordsContainer}>
          <Text style={styles.incorrectWordsTitle}>不正解の単語</Text>
          {incorrectWords.map((word, index) => (
            <View key={index} style={styles.incorrectWord}>
              <Text style={styles.incorrectWordText}>{word.en}</Text>
              <Text style={styles.incorrectWordText}>{word.jp}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  status: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  note: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    color: '#888',
  },
  incorrectWordsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  incorrectWordsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  incorrectWord: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  incorrectWordText: {
    fontSize: 16,
    color: '#ff0000',
  },
});

export default App;

