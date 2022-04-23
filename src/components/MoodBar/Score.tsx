import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
  },
});

interface IScoreProps {
  score?: number;
  top: number;
  width: number;
}

function Score(props: IScoreProps) {
  const {score, top, width} = props;
  const fontSize = width * 0.55;
  return (
    <View style={[styles.wrapper, {top: top + 6}]}>
      <Text style={[styles.text, {fontSize}]}>{score}</Text>
    </View>
  );
}

export default memo(Score);
