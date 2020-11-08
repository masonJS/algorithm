/**
 * https://programmers.co.kr/learn/courses/30/lessons/62048
 *
 * [대각선을 지나가는 단위 정사각형의 개수]
 *  w + h - w 와 h의 최대 공약수
 *
 * */

function gcd (w, h) {
  const mode = w % h;
  return mode === 0 ? h : gcd(h, mode)
}

function solution(w, h) {
  return w * h - (w + h - gcd(w, h))
}
