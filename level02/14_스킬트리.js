function solution(skill, skill_trees) {
  let answer = 0;
  let i, j;
  for(i = 0; i < skill_trees.length; i++) {
    const skillList = skill.split('');
    const skillTree = skill_trees[i].split('');
    let isTrueSkill = true;

    for(j=0; j < skillTree.length; j++) {
      if(skillList.some(skill => skill === skillTree[j])) {
        if(skillList[0] === skillTree[j]){
          isTrueSkill = true;
          skillList.shift();
        } else{
          isTrueSkill = false
          break;
        }
      }
    }

    if(isTrueSkill) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("CBD"	,["BACDE", "CBADF", "AECB", "BDA"]	))
