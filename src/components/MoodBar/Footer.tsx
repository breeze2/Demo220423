import React, {memo} from 'react';
import {Text, StyleSheet} from 'react-native';
import ShadowView from '../ShadowView';
import {moodDay} from './config';

const styles = StyleSheet.create({
  body: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#2D2F33',
    fontWeight: '500',
    fontSize: 18,
  },
  lastBody: {
    borderRadius: 8,
    backgroundColor: '#2D2F33',
  },
  lastText: {
    color: 'white',
  },
});

interface IFooterProps {
  day: number;
  activated?: boolean;
  last?: boolean;
  width: number;
}

function Footer(props: IFooterProps) {
  const {activated = false, day, last, width} = props;
  const fontSize = width * 0.5;
  return (
    <ShadowView
      distance={activated ? 4 : 0}
      style={[
        styles.body,
        last && !activated && styles.lastBody,
        {
          width,
          height: width,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {fontSize},
          last && !activated && styles.lastText,
        ]}>
        {moodDay[day]}
      </Text>
    </ShadowView>
  );
}

export default memo(Footer);
