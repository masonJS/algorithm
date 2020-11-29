/**
 * https://programmers.co.kr/learn/courses/30/lessons/12911
 */
let num = 15;

function solution(num) {
  const oneCount = num.toString(2).match(/1/g).length
  while(num ++) {
    if (oneCount === num.toString(2).match(/1/g).length) return num
  }
}

// 다른 풀이법
// function solution (num, a = num+1) {
//   return num.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length ? a : solution(num, a+1)
// }

console.log(solution(num))

