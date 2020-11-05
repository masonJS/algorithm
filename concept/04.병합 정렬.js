/**
 * 병합 정렬
 * Intro
 * - 데이터를 가장 작은 데이터들로 분할한 다음에 하나로 합치는 과정에서 정렬하는 방법
 * - [분할 정복 전략]을 따른다
 *    - '분할하여 정복한다' 라는 알고리즘 기법
 *    - 1. 가장 간단한 단계로 기본 단계를 찾는다.
 *    - 2. 주어진 문제를 가능한한 작게 줄여서 기본 단계가 되게끔 만드는 법을 찾는다.
 *
 * Big O
 * Worst Case: O(nlog2n)
 *
 * Best Case: O(nlog2n)
 *
 * 병합 정렬은 데이터를 분할하는 단계와 다시 병합하는 단계로 나누어지는데 분할 단계에서는 시간 복잡도에 포함되지 않는다.
 * 분할된 데이터를 병합하는 단계에서 1/2씩 쪼개진 배열을 합치는 과정이기에 재귀 호출의 길이는 log2n이다.
 * 그리고 각각의 단계에서 데이터의 개수만큼 크기를 비교하는 연산이 필요하기 때문에 최대 n번의 비교 연산을 하게 된다.
 * 그러므로 병합 정렬의 시간복잡도는 nlog2n, 최선일때도 최악일때도 동일하다.
 *
 * 장점
 * - 최악의 경우에도 O(nlog2n)의 시간을 소요하므로 데이터 분포에 영향을 덜 받는다.
 *
 * 단점
 * - in place 알고리즘이 아니므로 별도의 메모리 공간이 필요하다.
 * */

function mergeSort(array) {
  if(array.length < 2) return array
  const pivot = Math.floor(array.length / 2)
  const left = array.slice(0, pivot)
  const right = array.slice(pivot, array.length)

  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  const result = [];
  while(left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }

  while(left.length) result.push(left.shift())
  while(right.length) result.push(right.shift())

  return result
}

console.log(mergeSort([6,4,5,2,3,1]))


/* Ref: https://im-developer.tistory.com/134?category=846746 */
