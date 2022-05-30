const data = require('./mock-data')
const LATENCY = 16

export function getAllMessages (cb) {
  console.log("init")
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}

export function createMessage ({ text, authorName, thread }, cb) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  // 메세지 가공해서 콜백함수에 넘김
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: authorName, // 내 닉네임
  }

  setTimeout(() => {
    cb(message)
  }, LATENCY)
}
