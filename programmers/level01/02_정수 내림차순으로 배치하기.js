/**
 https://programmers.co.kr/learn/courses/30/lessons/12933
 * */
const n = 118372

function solution (n) {
  return Number(n.toString().split('').sort((a,b) => b - a).join(''))
}

function otherSolution(n) {
  return parseInt(n.toString().split('').sort().reverse().join(''))
}


console.log(solution(n))
