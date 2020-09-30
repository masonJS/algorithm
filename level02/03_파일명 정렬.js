/**
 https://programmers.co.kr/learn/courses/30/lessons/17686
 */

const arr = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]

function solution(files) {
  function compare(a, b) {
    const regexNum = /[0-9]/g
    const numbIndexA = a.indexOf(a.match(regexNum)[0])
    const numbIndexB = b.indexOf(b.match(regexNum)[0])
    const sortHead = a.substring(0, numbIndexA).toLowerCase().localeCompare(b.substring(0, numbIndexB).toLowerCase())
    if (sortHead === 0) {
      const subStrA = a.substring(numbIndexA)
      const subStrB = b.substring(numbIndexB)
      return parseInt(subStrA) - parseInt(subStrB)
    } else if (sortHead === 1) {
      return 1
    } else {
      return -1
    }
  }

  return files
    .map((file, index) => ({ file, index }))
    .sort((a, b) => {
      const sortResult = compare(a.file, b.file)
      return sortResult === 0 ? a.index - b.index : sortResult })
    .map(({file}) => file)
}

console.log(solution(arr))
