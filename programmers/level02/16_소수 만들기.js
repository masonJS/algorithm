/**
 * https://programmers.co.kr/learn/courses/30/lessons/12977
 * */

const array = [1,2,7,6,4]	;

function solution(nums){
  const len = nums.length;
  let count = 0;
  for(let i = 0; i < len; i ++){
    for(let j = i + 1; j < len; j++){
      for(let k = j + 1; k < len; k++){
        const sumNum = nums[i] + nums[j] + nums[k]
        if(isPrimeNumber(sumNum)){
          count ++;
        }
      }
    }
  }

  function isPrimeNumber(num){
    if(num <= 1) return false
    if((num % 2) === 0) return false
    let i = 3;
    while(num > i){
      if(num % i === 0) return false
      i+=2;
    }
    return true
  }
  return count
}

console.log(solution(array))
