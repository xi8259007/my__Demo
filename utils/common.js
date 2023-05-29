/**
 * @深浅拷贝
 */
export function deepClone(data) {
  if (typeof data === 'symbol') {
    return Symbol.for(data.description) //	Symbol
  } else if (typeof data != 'object') {
    return data //	基本类型
  } else if (data instanceof Array) {
    return data.map((item) => deepClone(item)) //	数组	1、arr instanceof Array	2、Array.isArray(arr)	3、arr.constructor == Array
  } else if (data.constructor === Object) {
    let _data = {}
    for (let key in data) {
      _data[key] = deepClone(data[key])
    }
    return _data //	对象、Json
  } else {
    return new data.constructor(data) //	系统对象、自定义对象
  }
}

/**
 * @时间戳转日期
 * utc时间格式 和 北京时间相差8小时；年月日时分秒、
 * const currentTime = reactive({ now: '' })
 * setInterval(formatTimestamp, 500)
 */
export function formatTimestamp(timestamp = +new Date()) {
  const arrWeek = ['日', '一', '二', '三', '四', '五', '六']
  const date = new Date(timestamp + 8 * 3600 * 1000)
  const formatDate = date.toJSON().substr(0, 19).replace('T', ' ')
  return formatDate.replace(/-/g, '/') + ' 星期' + arrWeek[date.getDay()] //currentTime.now
}

/**
 * @随机数
 * n 到 m 之间的数字；n 到 m m+1；整数
 */
export function randomNum(n, m, integer = Boolean) {
  const numRule = n + Math.random() * (m - n)
  return integer ? Math.floor(numRule) : Number(numRule.toFixed(!integer))
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
 * @判断回文数
 */
export function isPalindrome(n) {
  if (n < 0) {
    return false
  } else {
    return n.toString().split('').reverse().join('') === n.toString()
  }
}
