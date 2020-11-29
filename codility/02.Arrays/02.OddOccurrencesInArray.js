const A = [9, 3, 9, 3, 9, 7, 9]

function solution(A){
  const totalCountA = A.reduce((a, c) => {
    a[c] ? a[c]++ : (a[c] = 1)
    return a
  }, {})

  for(let key in totalCountA){
    if(totalCountA[key] % 2 === 1){
      return parseInt(key)
    }
  }

}

console.log(solution(A))

