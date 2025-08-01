// 元字符
console.log(/哈/.test('哈'))  //true
console.log(/哈/.test('哈哈'))  //true
console.log(/哈/.test('二哈'))  //true
console.log('--------------')

// 1. 边界符  -- ^开头符  $结尾符  ^ $精确匹配
console.log(/^哈/.test('哈'))  //true
console.log(/^哈/.test('哈哈'))  //true
console.log(/^哈/.test('二哈'))  //false
console.log(/^哈$/.test('哈'))  //true     --哈开头 哈结尾，精确匹配只能由一个 哈
console.log(/^哈$/.test('哈哈'))  //false
console.log(/^哈$/.test('二哈'))  //false
console.log('--------------')

// 2. 量词  -- 某个模式重复次数

// *       0 次或以上
// +       1 次或以上
// ?       0 或 1 次
// {n}     重复 n 次
// {n,}    重复 n 次或以上
// {n,m}   重复 n 到 m 次

// 量词 *        >= 0 次
console.log('量词 * ')
console.log(/^哈*$/.test('哈'))  //true
console.log(/^哈*$/.test(''))  //true
console.log(/^哈*$/.test('哈哈'))  //true
console.log('--------------')

// 量词 +        >= 1 次
console.log('量词 + ')
console.log(/^哈+$/.test('哈'))  //true
console.log(/^哈+$/.test(''))  //false
console.log(/^哈+$/.test('哈哈'))  //true
console.log('--------------')

// 量词 ?        0 || 1 次
console.log('量词 ? ')
console.log(/^哈?$/.test('哈'))  //true
console.log(/^哈?$/.test(''))  //true
console.log(/^哈?$/.test('哈哈'))  //false
console.log('--------------')

// 量词 {n}      只能为 n 次
console.log('量词 {n} ')
console.log(/^哈{4}$/.test('哈'))  //false
console.log(/^哈{4}$/.test(''))  //false
console.log(/^哈{4}$/.test('哈哈'))  //false
console.log(/^哈{4}$/.test('哈哈哈哈'))  //true
console.log(/^哈{4}$/.test('哈哈哈哈哈哈'))  //false
console.log('--------------')

// 量词 {n,}     >= n 次
console.log('量词 {n,} ')
console.log(/^哈{4,}$/.test('哈'))  //false
console.log(/^哈{4,}$/.test(''))  //false
console.log(/^哈{4,}$/.test('哈哈'))  //false
console.log(/^哈{4,}$/.test('哈哈哈哈'))  //true
console.log(/^哈{4,}$/.test('哈哈哈哈哈哈'))  //true
console.log('--------------')

// 量词 {n,m}    n 到 m 次   --逗号左右两侧千万不能有空格
console.log('量词 {n,m} ')
console.log(/^哈{4,6}$/.test('哈'))  //false
console.log(/^哈{4,6}$/.test(''))  //false
console.log(/^哈{4,6}$/.test('哈哈'))  //false
console.log(/^哈{4,6}$/.test('哈哈哈哈'))  //true
console.log(/^哈{4,6}$/.test('哈哈哈哈哈哈'))  //true
console.log('--------------')

// 3. 字符类
// 3.1 []  匹配到其中任意一个都返回 true
// [a-z] [A-Z] [0-9]  --联用不需要空格  [a-zA-Z0-9]
// [^]  中括号内部的 ^ 为排除的意思
// .  匹配除了换行符任何单个字符

// \d  --匹配 0-9 之间任意一个数字     \D  --刚好相反
// \w  --匹配任意 字母 数字 下划线     \W  --刚好相反
// \s  --匹配 空格符 换行符 制表符     \S  --刚好相反

console.log(/[abc]/.test('a'))   //true
console.log(/[abc]/.test('b'))   //true
console.log(/[abc]/.test('c'))   //true
console.log('--------------')
