/**
 https://programmers.co.kr/learn/courses/30/lessons/17686
 */


function solution(files) {
  const answerWrap = files.map((file, index) => ({file, index}));
  const compare = (a,b) => {
    const regexNum = /[0-9]/g;

    const numIndexA = a.indexOf((a.match(regexNum))[0]);
    const numIndexB = b.indexOf((b.match(regexNum))[0]);

    const sortByHead = (a.substring(0, numIndexA)).toLowerCase().localeCompare(b.substring(0, numIndexB).toLowerCase());

    if (sortByHead === 0) {
      const subStrA = parseInt(a.substring(numIndexA));
      const subStrB = parseInt(b.substring(numIndexB));

      if (subStrA<subStrB){
        return -1;
      } else if (subStrA>subStrB){
        return 1;
      } else {
        return 0;
      }
    } else if (sortByHead === -1){
      return -1;
    } else {
      return 1;
    }
  }

  answerWrap.sort((a, b) => {
    const result = compare(a.file, b.file);
    return result === 0 ? a.index - b.index : result;
  })
  return answerWrap.map(answer => answer.file);
}


console.log(solution(arr))
