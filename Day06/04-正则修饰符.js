// 1. i --匹配时不区分大小写
console.log(/^java$/.test('java'))
console.log(/^java$/i.test('JAVA'))
console.log(/^java$/i.test('java'))

//2. g --查找全局符合规则的字符串

const str = 'java是一门编程语言，学完JAVA薪资很高'
// 替换符  --字符串.replace(/正则表达式/,'替换字符')
const res = str.replace(/java/ig, 'javaScript')  //全局不区分大小写替换
const res2 = str.replace(/java/i, 'javaScript')  //非全局，仅会匹配替换到一个
console.log(res)
console.log(res2)
