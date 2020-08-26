/**
 R x C 크기의 격자가 있습니다. 각 격자 칸에서는 오른쪽, 또는 아래 방향으로 1칸씩 이동 가능합니다. 다음은 R = 2, C = 4인 격자의 가장 왼쪽 위인 (1, 1)에서 시작하여 가장 오른쪽 아래인 (2, 4)로 이동하는 방법을 나타낸 그림입니다.
 위 그림과 같이 2 x 4크기의 격자에서 이동하는 방법은 4가지가 있습니다. 격자의 행(R)과 열(C)이 주어질 때, 가장 왼쪽 위에서 가장 오른쪽 아래로 이동하는 방법의 수를 구하여 return 하는 함수를 완성해 주세요.

 [제한사항]
 격자의 크기 R, C : 1 ≤ R, C ≤ 50, R, C는 정수

 [입출력 예]
 R	C	answer
 2	4	4
 3	3	6
 입출력 예 설명
 입출력 예#1
 2 x 4 크기의 격자에서 이동 가능한 방법은 위 그림과 같이 4가지 입니다.

 입출력 예#2
 3 x 3 크기의 격자에서 이동 가능한 방법은 6가지 입니다,
 *
 *
 * */

const log = console.log;

const permutation = n => Array(n).fill().map((v, i) => i + 1).reduce((a,b) => a * b)

function solution(r, c) {
  return permutation(r + c - 2 ) / (permutation(r - 1) * permutation(c - 1))
}


log(solution(3, 4))



