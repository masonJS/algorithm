/**
 * https://programmers.co.kr/learn/courses/18/lessons/1878
 * */

function solution(v) {
  let answer = [];
  const xValue = v.map(arr => arr[0]).filter((value, index, arr) => arr.lastIndexOf(value) === arr.indexOf(value))
  const yValue = v.map(arr => arr[1]).filter((value, index, arr) => arr.lastIndexOf(value) === arr.indexOf(value))
  answer = [ ...xValue, ...yValue ]
  return answer;
}

console.log(solution([[1, 4], [3, 4], [3, 10]]	))
