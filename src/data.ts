export const user = {
  name: '李强',
  avatar: undefined,
};

export const moods = [
  {
    day: 6,
    score: 88,
  },
  {
    day: 0,
    score: 80,
  },
  {
    day: 1,
    score: undefined,
  },
  {
    day: 2,
    score: 90,
  },
  {
    day: 3,
    score: 92,
  },
  {
    day: 4,
    score: 97,
  },
  {
    day: 5,
    score: 81,
  },
];

export function getMeanMood(list: typeof moods) {
  const scores: number[] = [];
  list.forEach(mood => {
    if (mood.score !== undefined) {
      scores.push(mood.score);
    }
  });
  return Math.round(
    scores.reduce((prev, score) => prev + score, 0) / scores.length,
  );
}
