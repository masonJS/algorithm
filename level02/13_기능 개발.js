/**
 * https://programmers.co.kr/learn/courses/30/lessons/42586
 * */
function solution(progresses, speeds) {
  const answer = [];
  let i;
  while(progresses.length) {
    let count = 0;
    for(i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i]
    }
    while(progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    }
    if(count !== 0) {
      answer.push(count)
    }
  }
  return answer
}


console.log(solution([96, 99, 98, 97]		, [1, 1, 1, 1]	))
