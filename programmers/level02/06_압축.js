/**
 * https://programmers.co.kr/learn/courses/30/lessons/17684
 *
 * */

const { range } = require('../../function/range')
const { log } = require('../../function/log')
const str = 'KAKAO'

function solution(msg) {
  const alphabets = range('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1).map(num => String.fromCharCode(num))
  const len = msg.length
  let i = 0
  const result = []
  while(i < len) {
    let j = 1
    while(alphabets.indexOf(msg.substring(i, i+j)) !== -1 && i + j <= msg.length) {
      j ++
    }
    alphabets.push(msg.substring(i, i+j))
    result.push(alphabets.indexOf(msg.substring(i, i+j-1)) + 1)
    i += j - 1
  }
  return result
}

log(solution(str))

