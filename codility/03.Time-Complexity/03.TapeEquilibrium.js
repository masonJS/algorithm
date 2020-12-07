const A = [1000]

function solution(A){
  let leftSumValue = A[0];
  let rightSumValue = A.reduce((a,b) => a + b) - leftSumValue;
  let minValue = Number.MAX_SAFE_INTEGER;
  if(!A.length) return 0;
  if(A.length === 1) return leftSumValue;

  for(let i = 1; i < A.length; i++){
    if(Math.abs(leftSumValue - rightSumValue) < minValue){
      minValue = Math.abs(leftSumValue - rightSumValue)
    }
    leftSumValue += A[i];
    rightSumValue -= A[i];
  }
  return minValue
}

console.log(solution(A))
