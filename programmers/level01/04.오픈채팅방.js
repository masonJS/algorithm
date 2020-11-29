/**
 * https://programmers.co.kr/learn/courses/30/lessons/42888
 * */

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

function solution(record) {
  const enterMessage = (name) => `${name}님이 들어왔습니다.`
  const leaveMessage = (name) => `${name}님이 나갔습니다.`
  const recordList = []
  const nicknameObj = {}
  for(let i = 0; i < record.length; i++){
    const [action, id, nickname] = record[i].split(' ')
    if(action === 'Enter'){
      nicknameObj[id] = nickname
      recordList.push({ action, id })
    } else if(action === 'Leave'){
      recordList.push({ action, id })
    } else{
      nicknameObj[id] = nickname
    }
  }
  return recordList.map(({ action, id }) => action === 'Enter' ? enterMessage(nicknameObj[id]) : leaveMessage(nicknameObj[id]))
}

console.log(solution(record))

// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
