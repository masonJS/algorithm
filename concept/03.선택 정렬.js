/**
 * 선택 정렬
 * Intro
 * - 주어진 리스트에서 최소값을 찾아 맨 앞에 배치, 이 작업을 계속적을 순회하는 정렬
 * - n번째 정렬회차가 끝나면, 앞에서 n번째 자리의 데이터가 정해진다. (버블정렬과 반대)
 *
 * Big O
 * Worst Case: O(n^2)
 *  - 정렬이 하나도 안되어 있는 경우
 * Best Case: O(n^2)
 *  - 이미 정렬이 되어있는 경우
 *
 * 장점
 * - in place 알고리즘
 * 단점
 * - 최선의 경우에도 O(n^2) 복잡도를 갖고 있기 때문에 성능이 떨어진다.
 * */


function selectionSort (array) {
  const len = array.length;
  let i,j;
  for(i = 0; i < len; i++) {
    let minIndex = i;
    for (j = i +1; j < len; j++) {
      if(array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if(minIndex !== i){
      let temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp
    }
  }
  return array
}

console.log(selectionSort([6,4,5,2,3,1]))

/* Ref: https://im-developer.tistory.com/133?category=846746 */

