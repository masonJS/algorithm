/**
 * https://programmers.co.kr/learn/courses/30/lessons/12899
 * */

function solution(n) {
  return n ? solution( (n - (n % 3 || 3))/ 3) + (n % 3 || 4) : ''
}

console.log(solution(11))
