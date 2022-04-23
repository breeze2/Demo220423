import React, {memo, useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Background from './Background';
import Emoji from './Emoji';
import Footer from './Footer';
import Score from './Score';

export const MOOD_BAR_TEST_ID = 'MOOD_BAR_TEST_ID';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: 300,
    position: 'relative',
  },
  bodyBg: {
    position: 'absolute',
    bottom: 0,
  },
  footer: {
    marginTop: 12,
    height: 36,
    alignItems: 'center',
  },
});

interface IMoodBarProps {
  index: number;
  day: number;
  width: number;
  score?: number;
  last: boolean;
  activated: boolean;
  onPress?: (day: number | undefined) => void;
}

const maxHeight = 300;
const maxScore = 100;

function MoodBar(props: IMoodBarProps) {
  const {index, day, score, width, activated, last, onPress} = props;

  const handlePress = () => {
    /* istanbul ignore next */
    if (onPress) {
      onPress(score !== undefined ? day : undefined);
    }
  };

  const animatedHeight = useRef(new Animated.Value(width)).current;
  const minHeight = useMemo(() => width * 2 + 8, [width]);
  const barHeight =
    ((maxHeight - minHeight) * (score || 0)) / maxScore + minHeight;
  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: barHeight,
      duration: score ? score * 8 : 240,
      useNativeDriver: false,
      delay: index * 64,
    }).start();
  }, [animatedHeight, barHeight, score, index]);

  const animatedOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 64,
      useNativeDriver: true,
      delay: index * 64 + (score ? score * 8 : 240) - 64,
    }).start();
  }, [animatedOpacity, barHeight, score, index]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.wrapper} testID={MOOD_BAR_TEST_ID}>
        <View style={[styles.body, {width}]}>
          <Animated.View
            style={[
              styles.bodyBg,
              {
                width,
                height: animatedHeight,
              },
            ]}>
            <Background activated={activated} score={score} width={width} />
          </Animated.View>
          <Animated.View style={{opacity: animatedOpacity}}>
            <Score score={score} width={width} top={maxHeight - barHeight} />
          </Animated.View>
          <Emoji activated={activated} score={score} width={width - 4 * 2} />
        </View>
        <View style={[styles.footer, {width}]}>
          <Footer
            activated={activated}
            width={width - 8}
            day={day}
            last={last}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default memo(MoodBar);
