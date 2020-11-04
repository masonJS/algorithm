/**
 * 버블 정렬
 * Intro
 * - 데이터 두개씩 묶어 크기 비교를 한후 크키가 큰쪽이 오른쪽으로 밀어내는 방법
 * - n번째 정렬 회차가 끝나면, 뒤에서 n번째 자리의 데이터가 정해진다.
 *
 * Big O
 * Worst Case: O(n^2)
 *  - 정렬이 하나도 안되어 있는 경우
 *  - 각 자리를 찾기 위해 n번의 순회를 해야하며 n번의 회전 동안에 요소의 개수만큼 또 순회해야 하므로 n * n
 * Best Case: O(n)
 *  - 이미 정렬되어진 경우
 *
 * 장점
 * - 추가적인 메모리 공간이 아닌 데이터가 저장된 그 공간 내에서 정렬이 가능한 in place 알고리즘
 * - 구현이 쉽다.
 *
 * 단점
 * - 자료가 많아질수록 성능이 떨어진다.
 *
 * */


function bubbleSort(array) {
  const len = array.length;
  let i,j;
  for(i = 0; i < len; i ++) {
    let temp;
    for(j = 0; j < len - 1 - i; j++) {
      // len - 1 인 이유는 비교로직이 array[i], array[i+1] 두 값을 가지고 비교하기 때문에 검색대상에 마지막 값도 포함되기때문에
      if (array[j] > array[j+1]) {
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
    if (temp === undefined) {
      break;
    }
  }

  return array
}

console.log(bubbleSort([6,4,5,2,3,1]))

/* Ref: https://im-developer.tistory.com/133?category=846746 */
