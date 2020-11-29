/**
 * https://app.codility.com/c/run/trainingKBSSUH-D29/
 * */

const N = 32;

function solution(N){
  const binaryN = N.toString(2);
  const len = binaryN.length;
  let i;
  let answer = [0];
  let count = 0;
  for(i = 1; i < len; i++){
    switch (binaryN[i]){
      case '0':
        count++;
        break;
      case '1':
        answer.push(count)
        count = 0;
        break;
    }
  }
  return Math.max(...answer)
}

console.log(solution(N))
