/**
 * https://app.codility.com/c/run/trainingMY95SV-6W2/
 * */
const A = [3, 8, 9, 7, 6];
const K = 3;

function solution(A, K) {
  const len = K
  let i;
  let answer = A;
  if(!answer.length) return answer
  for(i = 0; i < len; i++){
    const lastElement = answer.pop()
    answer.unshift(lastElement)
  }

  return answer
}

console.log(solution(A, K))
