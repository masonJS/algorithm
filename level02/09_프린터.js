/**
 * https://programmers.co.kr/learn/courses/30/lessons/42587
 *
 * */

function solution(priorities, location) {
  let answer = 0;
  const queue = [];
  let mappingPriorities = priorities.map((v, i) => ({ val: v, index: i }))
  while(mappingPriorities.length > 0) {
    let [ document, ...resDocuments ] = mappingPriorities
    const hasHighPriority = resDocuments.some(obj => obj.val > document.val)
    if (hasHighPriority) {
      mappingPriorities = [ ...resDocuments, document ]
    } else {
      queue.push(document)
      mappingPriorities = resDocuments
    }
  }
  answer = queue.findIndex(obj => obj.index === location) + 1
  return answer;
}


console.log(solution([1, 1, 9, 1, 1, 1]	, 0	))
