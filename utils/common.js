/**
 * 深浅拷贝
 */
export function deepClone(data) {
  if (typeof data === 'symbol') {
    //	Symbol
    return Symbol.for(data.description)
  } else if (typeof data != 'object') {
    //	基本类型
    return data
  } else if (data instanceof Array) {
    //	数组	1、arr instanceof Array	2、Array.isArray(arr)	3、arr.constructor == Array
    return data.map((item) => clone(item))
  } else if (data.constructor === Object) {
    //	对象、Json
    let res = {}
    for (let key in data) {
      res[key] = clone(data[key])
    }
    return res
  } else {
    //	系统对象、自定义对象
    return new data.constructor(data)
  }
}

/**
 * 随机数	取整、保留小数
 * n 到 m 之间的数字
 * n 到 m m+1
 * 向下取整
 */
export function numRandom(n, m, integer) {
  const nRule = n + Math.random() * (m - n)
  return !integer ? Math.floor(nRule) : nRule.toFixed(integer)
}

/**
 * 分隔、千分位
 */
export function numSeparate(num, place = 3) {
  let arr = String(num).split('').reverse()
  let aRes = []
  while (arr.length > 0) {
    let n = arr.splice(0, place).reverse().join('')
    aRes.push(n)
  }
  return aRes.reverse().join(',')
}

/**
 * 日期转换
 */
export function time(time = +new Date()) {
  var date = new Date(time + 8 * 3600 * 1000)
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.')
}

/**
 * 倒计时
 * oVal = document.querySelector('#text')
 * time = 10;
 * @param {*} time
 */
export function countDown(time) {
  if (time > 0) {
    oVal.innerHTMl = time + '秒'
  } else {
    clearInterval(countDown)
    oVal.innerHTMl = '发送短信'
    oVal.disabled = false
  }
  time--
}
//	let timer = setInterval(countDown, 1000)
//	countDown()

export function isPalindrome(num) {
  if (num < 0) {
    return false
  }
  return num.toString().split('').reverse().join('') === num.toString()
}

export function realTime() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let week = date.getDay()
  let weekArr = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ]
  let hour = date.getHours() + '' // 时
  hour = +hour < 10 ? '0' + hour : hour // 如果只有一位，则前面补零
  let minute = date.getMinutes() + '' // 分
  minute = +minute < 10 ? '0' + minute : minute // 如果只有一位，则前面补零
  let second = date.getSeconds() + '' // 秒
  second = +second < 10 ? '0' + second : second // 如果只有一位，则前面补零
  currentTime.now = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`
}
//	setInterval(realTime, 500)
//	const currentTime = reactive({ now: '' })
