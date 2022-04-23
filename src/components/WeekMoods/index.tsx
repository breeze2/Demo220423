import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {getMeanMood, moods, user} from '../../data';
import MoodScore from './MoodScore';
import UserAvatar from './UserAvatar';

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
    top: 10,
  },
  bgLine2: {
    top: 160,
  },
  bars: {
    marginTop: 34,
    height: 360,
    width: '100%',
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

function WeekMoods() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatar}>
        <UserAvatar name={user.name} image={user.avatar} />
      </View>
      <View style={styles.score}>
        <MoodScore score={getMeanMood(moods)} />
      </View>
      <View style={styles.bars}>
        <View style={[styles.bgLine, styles.bgLine1]} />
        <View style={[styles.bgLine, styles.bgLine2]} />
      </View>
    </View>
  );
}

export default memo(WeekMoods);
