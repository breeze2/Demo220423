import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {getMeanMood, moods, user} from '../../data';
import MoodBar from '../MoodBar';
import MoodScore from './MoodScore';
import UserAvatar from './UserAvatar';

export const WEEK_MOODS_TEST_ID = 'WEEK_MOODS_TEST_ID';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 'auto',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginTop: 50,
  },
  score: {
    marginTop: 4,
  },
  bgLine: {
    position: 'absolute',
    width: '100%',
    height: 2,
    borderRadius: 2,
    backgroundColor: '#F2F2F2',
  },
  bgLine1: {
    top: 0,
  },
  bgLine2: {
    top: 150,
  },
  bars: {
    marginTop: 34,
    height: 348,
    width: '100%',
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 60,
  },
});

function calculateBarWidth(width: number) {
  const boxWidth = Math.min(Math.floor(width / 7), 58);
  return Math.max(boxWidth - 14, 24);
}

function WeekMoods() {
  const dimensions = useWindowDimensions();
  const [activatedDay, setActivatedDay] = useState<number>();
  const handleBarPress = useCallback((day: number | undefined) => {
    setActivatedDay(day);
  }, []);
  const handlePress = useCallback(() => {
    setActivatedDay(undefined);
  }, []);

  const animatedOpacities = useRef(
    moods.map(() => new Animated.Value(0)),
  ).current;
  useEffect(() => {
    const animations = animatedOpacities.map(value => {
      return Animated.timing(value, {
        toValue: 1,
        duration: 64,
        useNativeDriver: true,
      });
    });
    Animated.sequence(animations).start();
  }, [animatedOpacities]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.wrapper} testID={WEEK_MOODS_TEST_ID}>
        <View style={styles.avatar}>
          <UserAvatar name={user.name} image={user.avatar} />
        </View>
        <View style={styles.score}>
          <MoodScore score={getMeanMood(moods)} />
        </View>
        <View style={styles.bars}>
          <View style={[styles.bgLine, styles.bgLine1]} />
          <View style={[styles.bgLine, styles.bgLine2]} />
          {moods.map(({day, score}, i) => (
            <Animated.View style={{opacity: animatedOpacities[i]}} key={day}>
              <MoodBar
                activated={activatedDay === day}
                day={day}
                index={i}
                last={i === moods.length - 1}
                score={score}
                width={calculateBarWidth(dimensions.width - 12 * 2)}
                onPress={handleBarPress}
              />
            </Animated.View>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default memo(WeekMoods);
