
/**
 * https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
 * */

function solution(s) {
  let i;
  const repeat = s.length
  const resArray = []
  for(i = 0; i < repeat; i++) {
    let unit = i + 1;
    let newStr = ''
    let j;
    let count = 1;
    for(j = 0; j < s.length; j+=unit) {
     const curStr = s.substring(j, j + unit);
     const nextStr = s.substring(j + unit, j + 2 * unit);
     if (curStr === nextStr) {
       count ++;
     } else {
       if (count === 1) {
         newStr = newStr + curStr
       } else {
         newStr = newStr + count + curStr
       }
       count = 1;
     }
    }
    resArray.push(newStr.length)
  }
  return Math.min(...resArray)
}

console.log(solution('a'))
