function solution(skill, skill_trees) {
  let count = 0;

  skill = [...skill];

  // ["BACDE", "CBADF", "AECB", "BDA"]
  outer: for (let tree of skill_trees) {
    tree = [...tree]; // ["B", "A", "C", "D", "E"];

    for (let i = 0; i < tree.length; i++) {
      // 선행 스킬 순서에 현재 스킬이 있는지 확인
      const index = skill.indexOf(tree[i]);

      if (index > -1) {
        const skills = skill.slice(0, index);

        // 선행 스킬을 순회하며 현재 스킬 이전에 나왔는지 확인
        for (let ss of skills) {
          // 나오지 않았다면 불가능한 스킬트리이므로 다음 스킬 트리로 넘어감
          if (!tree.slice(0, i).includes(ss)) continue outer;
        }
      }
    }

    // 위 과정을 거쳤다면 가능한 스킬 트리이므로 count!
    count++;
  }

  return count;
}
