function solution(answers) {
  students = [
    { pattern: [1, 2, 3, 4, 5], score: 0 },
    { pattern: [2, 1, 2, 3, 2, 4, 2, 5], score: 0 },
    { pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], score: 0 },
  ];

  for (let i = 0; i < answers.length; i++) {
    for (let student of students) {
      const currentPattern = student.pattern[i % student.pattern.length];
      if (currentPattern === answers[i]) {
        student.score++;
      }
    }
  }

  const max = Math.max(...students.map((el) => el.score));

  const topScorer = students.map((el, i) => {
    if (el.score === max) return i + 1;
  });

  return topScorer.filter((num) => num);
}
