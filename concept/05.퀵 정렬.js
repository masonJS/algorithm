/**
 * 퀵 정렬
 * Intro
 * - pivot(중심축)을 정하고 중심축보다 작은 값들은 왼쪽으로 큰 값을 오른쪽으로 정렬시키며
 *   왼쪽 값이 오른쪽 값보다 클경우 스위칭한다. (이 행위를 재귀적으로 반복한다.)
 * - [분할 정복 전략]을 따른다.
 *   - 기준 원소를 고른다.
 *   - 배열을 기준 원소보다 작은 원소의 배열과 기준 원소보다 큰 원소의 배열, 이렇게 2개의 하위 배열로 분할한다.
 *   - 하위 배열에 대해 재귀적으로 퀵 정렬을 호출한다.
 *
 * Big O
 * Worst case: O(n^2)
 *
 * Best case: O(nlog2n)
 * 빠른 성능으론 합병 정렬보다 빠르다. 운이 좋지 않으면 worst case가 발생
 *
 * 장점
 * 합병 정렬과 다르게 in place 알고리즘으로 추가적인 공간이 필요하지 않다.
 *
 * 단점
 * 병합 정렬은 stable 하지만, 퀵 정렬은 unstable 하다.
 * (원소들 중에 같은 값이 있는 경우에 정렬 이후 순서가 초기 순서와 달라질 수 있기때문)
 *
 * */


function quickSort(array, left = 0, right = array.length -1) {
  let pivotIndex = right;
  pivotIndex = partition(array, left, right - 1, pivotIndex)
  if (left < pivotIndex - 1)
    quickSort(array, left, pivotIndex -1)
  if (pivotIndex + 1 < right)
    quickSort(array, pivotIndex + 1, right)
  return array
}

function partition(array, left, right, pivotIndex) {
  const pivot = array[pivotIndex];
  while(left <= right) {
    while(array[left] < pivot) {
      left ++;
    }
    while(array[right] > pivot) {
      right --;
    }
    if(left <= right) {
      swap(array, left, right)
      left ++;
      right --;
    }
  }
  swap(array, left, pivotIndex)
  return left
}

function swap(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp
}


console.log(quickSort([6,4,5,2,3,1]))


// ref: https://www.zerocho.com/category/Algorithm/post/57f72d415141fc5fe4f4ca8b
