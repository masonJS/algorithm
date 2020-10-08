/**
 * https://programmers.co.kr/learn/courses/30/lessons/42583
 * 
 * */

function solution(bridge_length, weight, truck_weights) {
  let answer = 0
  let queue = []
  while(queue.length > 0 || truck_weights.length > 0) {
    answer +=1
    if (queue.length && (queue[0].timer + bridge_length) === answer) {
      queue.shift()
    }
    if (
      truck_weights.length
      && (!queue.length || queue.map(({weight}) => weight).reduce((a,b) => a + b) + truck_weights[0] <= weight)
    ){
      queue.push({
        timer: answer,
        weight: truck_weights[0]
      })
      truck_weights.shift()
    }
  }
  return answer;
}

