/**
 https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 * */

const s = 'sooossppp'

function solution (s) {
  const length = s.length;
  let i = 0;
  let count = 0;
  for (i; i < length; i++) {
    if (s.charAt(i).toLowerCase() === 'p') count++;
    else if(s.charAt(i).toLowerCase() === 'y') count--;
  }
  return count === 0
}

// 다른 풀이법
function otherSolution (s) {
  return s.toLowerCase().split('p').length === s.toLowerCase().split('s').length
}

console.log(solution(s))

