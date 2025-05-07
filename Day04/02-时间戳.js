//时间戳
// 1.getTime() --必须要实例化 要有new
const date = new Date()
console.log(date.getTime())

// 2. +new Date()
console.log(+new Date())
// 获取指定时间戳
console.log(+new Date('2025-4-26 15:46:00'))

// 3. Date.now()
console.log(Date.now())
