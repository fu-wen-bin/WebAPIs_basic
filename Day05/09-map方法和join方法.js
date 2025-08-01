//map方法和join方法

const arr = ['red', 'blue', 'yellow']

// 1. 数组 map 方法  --相比于凭借字符串有返回值  返回数组
const newArr = arr.map(function (ele, index) {
  console.log(ele)  // 数组元素
  console.log(index)  // 数组元素
  return ele + '颜色'
})
console.log(newArr)

// 2. 数组 join() 方法  --把数组中的所有元素转换成一个字符串
// 小括号里写什么,什么就是分隔符  /  如果为空则为逗号分隔

console.log(newArr.join(''))  //空分隔符

console.log(newArr.join())    //逗号分隔

console.log(newArr.join('|')) //竖线分隔
