import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  score: {
    color: '#2D2F33',
    fontSize: 72,
    fontWeight: '800',
    lineHeight: 98,
  },
  text: {
    color: '#929292',
    fontSize: 18,
    fontWeight: '500',
  },
});

interface IMoodScoreProps {
  score: number;
}

function MoodScore(props: IMoodScoreProps) {
  const {score} = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.text}>{'周平均心情指数'}</Text>
    </View>
  );
}

export default memo(MoodScore);
