import GoodMoodSVG from '../../assets/icons/good-mood.svg';
import NormalMoodSVG from '../../assets/icons/normal-mood.svg';
import UnknownSVG from '../../assets/icons/unknown.svg';

export const moodEmojiSVG = {
  good: GoodMoodSVG,
  normal: NormalMoodSVG,
  unknown: UnknownSVG,
};

export const moodColor = {
  good: '#FF823C',
  normal: '#52C873',
  unknown: '#CFCFCF',
};

export const moodHighlightColors = {
  good: ['#FFA14A', '#FFCC4A'],
  normal: ['#42F373', '#A1FD44'],
  unknown: ['#CFCFCF'],
};

export const moodBgColor = {
  good: '#FFDEC9',
  normal: '#D4F3D3',
  unknown: '#F2F2F2',
};

export const moodHighlightBgColor = {
  good: '#FFF2EA',
  normal: '#EEFFEE',
  unknown: '#F2F2F2',
};

export const moodHighlightBorderColor = {
  good: '#FFE9D4',
  normal: '#DCFFD6',
  unknown: '#F2F2F2',
};

export const moodDay = ['日', '一', '二', '三', '四', '五', '六'];

export function getScoreType(score: number | undefined) {
  if (score === undefined) {
    return 'unknown';
  }
  if (score >= 90) {
    return 'good';
  }
  return 'normal';
}
