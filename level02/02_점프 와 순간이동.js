/**
 https://programmers.co.kr/learn/courses/30/lessons/12980
 */

function solution(n)
{
  let answer = 0;
  while(n > 0){
    if (n % 2 !== 0){
      n -= 1;
      answer += 1;
    } else {
      n = n / 2;
    }
  }
  return answer
}
