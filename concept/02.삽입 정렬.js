/**
 * 삽입 정렬
 * Intro
 * - 왼쪽에서 오른쪽으로 가면서 데이터를 왼쪽 데이터들과 비교하여 삽입하는 형식
 *
 * Big O
 * Worst Case: O(n^2)
 *  - 정렬이 하나도 안되어 있는 경우
 * Best Case: O(n)
 *  - 이미 정렬이 되어있는 경우
 *
 * 장점
 * - in place 알고리즘
 * 단점
 * - 자료가 많아질수록 성능이 떨어진다.
 * */


function insertionSort (array) {
  const len = array.length;
  let i;
  for(i = 1; i < len; i++) {
    const cur = array[i];
    let left = i - 1;
    while(left >=0 && array[left] > cur) {
      array[left + 1] = array[left];
      left --;
    }
    array[left + 1] = cur
  }
  return array
}

console.log(insertionSort([6,4,5,2,3,1]))

/* Ref: https://im-developer.tistory.com/133?category=846746 */


