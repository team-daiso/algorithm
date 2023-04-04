function solution(progresses, speeds) {
  let deploy = [];

  while (progresses.length !== 0) {
    progresses = progresses.map((progress, i) => (progress += speeds[i]));

    if (progresses[0] >= 100) {
      // 100보다 작은 인덱스를 찾아 그 전까지만 배포
      let lastIdx = progresses.findIndex((el) => el < 100);
      // 만약 100보다 작은 인덱스가 없다면, 전체 다 배포 가능
      if (lastIdx === -1) {
        lastIdx = progresses.length;
      }

      deploy.push(lastIdx);
      progresses = progresses.slice(lastIdx);
      speeds = speeds.slice(lastIdx);
    }
  }

  return deploy;
}
