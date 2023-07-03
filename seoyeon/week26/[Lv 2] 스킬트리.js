function solution(skill, skill_trees) {
  skill_trees = skill_trees.map((a) => {
    let divideSkills = skill.split("");
    let test = true; // 선행 스킬을 먼저 배웠는지 기준
    for (let b of a.split("")) {
      //먼저 원소가 스킬에 포함되는지 확인
      if (divideSkills.includes(b)) {
        //포함되면 선행스킬이 맞는지 확인
        if (divideSkills[0] === b) {
          divideSkills.shift();
        } else {
          //아니면 선행스킬을 먼저 배우지 못함으로, test를 false로 변환
          test = false;
          break;
        }
      }
    }
    return test;
  });

  return skill_trees.filter((v) => v === true).length;
}
