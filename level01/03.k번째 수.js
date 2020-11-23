// https://programmers.co.kr/learn/courses/30/lessons/42748

const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

function solution(array, commands){
  return commands.map((arr) => {
    return array
      .slice(arr[0] - 1, arr[1])
      .sort((a,b) => a - b)
      .filter((_, i) => arr[2] >= i + 1)
      .pop()
  })
}


console.log(solution(array, commands))
