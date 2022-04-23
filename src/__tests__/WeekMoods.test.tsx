import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {MOOD_BAR_TEST_ID} from '../components/MoodBar';
import {moodDay} from '../components/MoodBar/config';
import WeekMoods from '../components/WeekMoods';
import {moods, user} from '../data';
import {MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID} from '../components/MoodBar/Background';
import {ReactTestInstance} from 'react-test-renderer';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
beforeEach(() => {
  jest.useFakeTimers();
});

function isParent(child: ReactTestInstance, node: ReactTestInstance): boolean {
  if (!child.parent) {
    return false;
  }
  if (child.parent === node) {
    return true;
  }
  return isParent(child.parent, node);
}

test('WeekMoods', async () => {
  const element = <WeekMoods />;
  const wrapper = render(element);

  let bars = wrapper.queryAllByTestId(MOOD_BAR_TEST_ID);
  let highlightBg = wrapper.queryByTestId(
    MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID,
  );
  expect(highlightBg).toBeFalsy();
  expect(bars).toHaveLength(moods.length);

  const barScore1 = wrapper.getByText(String(moods[1].score));
  fireEvent(barScore1, 'press');
  bars = wrapper.queryAllByTestId(MOOD_BAR_TEST_ID);
  highlightBg = wrapper.queryByTestId(MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID);
  expect(highlightBg).toBeTruthy();
  expect(isParent(highlightBg!, bars[1])).toBeTruthy();

  const userName = wrapper.getByText(user.name);
  fireEvent(userName, 'press');
  highlightBg = wrapper.queryByTestId(MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID);
  expect(highlightBg).toBeFalsy();

  const barFooter5 = wrapper.getByText(String(moodDay[moods[5].day]));
  fireEvent(barFooter5, 'press');
  bars = wrapper.queryAllByTestId(MOOD_BAR_TEST_ID);
  highlightBg = wrapper.queryByTestId(MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID);
  expect(highlightBg).toBeTruthy();
  expect(isParent(highlightBg!, bars[1])).toBeFalsy();
  expect(isParent(highlightBg!, bars[5])).toBeTruthy();

  const barFooter2 = wrapper.getByText(String(moodDay[moods[2].day]));
  fireEvent(barFooter2, 'press');
  highlightBg = wrapper.queryByTestId(MOOD_BAR_HIGHLIGHT_BACKGROUND_TEST_ID);
  expect(highlightBg).toBeFalsy();
});
