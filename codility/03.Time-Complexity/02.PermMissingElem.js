/**
 * https://app.codility.com/c/run/trainingU2W2XV-QG4/
 * */

function solution(A){
  const add = (a, b) => a + b;
  if(!A.length) return 1;
  return Array.from({ length: A.length + 1 }).map((_, i) => i + 1).reduce(add) - A.reduce(add)
}


console.log(solution([]))

