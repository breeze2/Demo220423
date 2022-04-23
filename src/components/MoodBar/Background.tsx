import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShadowView from '../ShadowView';
import {
  getScoreType,
  moodColor,
  moodHighlightBorderColor,
  moodHighlightColors,
} from './config';

export const MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID =
  'MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  full: {
    width: '100%',
    height: '100%',
  },
  active: {
    position: 'absolute',
    top: -6,
    bottom: -6,
    left: -6,
    right: -6,
    borderWidth: 3,
  },
});

interface IBackgroundProps {
  activated: boolean;
  width: number;
  score?: number;
}

function Background(props: IBackgroundProps) {
  const {activated, score, width} = props;
  const radius = width / 2;
  const borderRadius = radius + 6;
  const scoreType = getScoreType(score);
  const color = moodColor[scoreType];
  const hlColors = moodHighlightColors[scoreType];
  const hlBorderColor = moodHighlightBorderColor[scoreType];
  return (
    <View style={styles.wrapper}>
      {activated ? (
        <ShadowView distance={6 + 4} style={styles.full}>
          <LinearGradient
            style={[
              styles.active,
              {
                borderColor: hlBorderColor,
                borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,
                borderBottomLeftRadius: borderRadius,
                borderBottomRightRadius: borderRadius,
              },
            ]}
            colors={hlColors}
            testID={MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID}
          />
        </ShadowView>
      ) : (
        <View
          style={[styles.full, {borderRadius: radius, backgroundColor: color}]}
        />
      )}
    </View>
  );
}

export default memo(Background);
