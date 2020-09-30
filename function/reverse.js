const reverse = arr => {
  const len = arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2)
  let newArr = []
  for(let i = 0; i < len; i ++) {
    newArr.splice(i, 0, arr[arr.length - 1 - i], arr[i])
  }
  if (arr.length % 2 !== 0) {
    newArr.splice(len, 0, arr[len])
  }
  return newArr
}

console.log(reverse([1, 2, 3, 4, 5, 6]))
