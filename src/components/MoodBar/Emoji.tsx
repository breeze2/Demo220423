import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  getScoreType,
  moodBgColor,
  moodEmojiSVG,
  moodHighlightBgColor,
} from './config';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 4,
    left: 4,
  },
});

interface IEmojiProps {
  activated?: boolean;
  score?: number;
  width: number;
}

function Emoji(props: IEmojiProps) {
  const {activated = false, score, width} = props;
  const scoreType = getScoreType(score);
  const EmojiSVG = moodEmojiSVG[scoreType];
  const bgColor = activated
    ? moodHighlightBgColor[scoreType]
    : moodBgColor[scoreType];
  return (
    <View
      style={[
        styles.wrapper,
        {
          width: width,
          height: width,
          borderRadius: width / 2,
          backgroundColor: bgColor,
        },
      ]}>
      <EmojiSVG />
    </View>
  );
}

export default memo(Emoji);
