const range = (start, stop, step = 1) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + i * step)

const reverse = arr => {
  const len = (arr.length % 2 === 0) ? arr.length / 2 : Math.floor(arr.length / 2 )
  let newArr = []
  for (let i = 0; i < len ;i++) {
    newArr.splice(i, 0, arr[arr.length -i -1], arr[i])
  }
  if (arr.length % 2 !== 0) {
    newArr.splice(len , 0 , arr[len])
  }
  return newArr
}

module.exports = {
  range,
  reverse
}
