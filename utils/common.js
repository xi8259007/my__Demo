/**
 *  生成指定范围随机数：n 到 m 之间的数字；n 到 m m+1；是否整数
 */
export const randomNumber = (n, m, flag = true) => {
  const rule = n + Math.random() * (m - n)
  return flag ? Math.floor(rule) : Number(rule.toFixed(!flag))
}

/**
 *  数值分隔： num; place 默认 千分位
 */
export const separateNumber = (num, place = 3) => {
  const data = String(num).split('').reverse()
  const result = []
  while (data.length > 0) {
    const num = data.splice(0, place).reverse().join('')
    result.push(num)
  }
  return result.reverse().join(',')
}

/**
 *  数组去重复
 */
export const unique = (arr) => {
  return Array.from(new Set(arr))
}

/**
 *  数组乱序
 */
export const scrambling = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i
    ;[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
  return arr
}

/**
 *  数组扁平化
 */
export const flatten = (arr) => {
  const data = arr.toString().split(',')
  return data.map((item) => Number(item))
  // arr.flat(Infinity)
}

/**
 *  数组中随机数
 */
export const randomArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 *
 ****************************** @字符串操作
 *
 */

/**
 *  字符串随机生成
 */
export const randomString = (len = 4) => {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
  const strLen = chars.length
  let randomStr = ''
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen))
  }
  return randomStr
}

/**
 *  字符串首字母大写
 */
export const fistLetterUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 *  数字转化为大写金额
 */
export const digitUppercase = (num) => {
  const fraction = ['角', '分']
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ]
  let num = Math.abs(num)
  let str = ''
  for (let i = 0; i < fraction.length; i++) {
    str += (
      digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, '')
  }
  str = str || '整'
  num = Math.floor(num)
  for (let i = 0; i < unit[0].length && num > 0; i++) {
    let p = ''
    for (let j = 0; j < unit[1].length && num > 0; j++) {
      p = digit[num % 10] + unit[1][j] + p
      num = Math.floor(num / 10)
    }
    str = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + str
  }
  return str
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}

/**
 *  数字转化为中文数字
 */
export const intToChinese = (num) => {
  const str = String(num)
  const len = str.length - 1
  const idxs = [
    '',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
  ]
  const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
    let pos = 0
    if ($1[0] !== '0') {
      pos = len - idx
      if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '十') {
        return idxs[len - idx]
      }
      return num[$1[0]] + idxs[len - idx]
    } else {
      let left = len - idx
      let right = len - idx + $1.length
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - (left % 4)
      }
      if (pos) {
        return idxs[pos] + num[$1[0]]
      } else if (idx + $1.length >= len) {
        return ''
      } else {
        return num[$1[0]]
      }
    }
  })
}

/**
 * 校验是否回文数
 */
export const isPalindrome = (num) => {
  return
  num > 0 && num.toString().split('').reverse().join('') === num.toString()
}

/**
 *  校验身份证号码
 */
export const isIDcard = (num) => {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(num)
}

/**
 *  校验是否为中国大陆手机号
 */
export const isTel = (value) => {
  return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString())
}

/**
 *  校验是否包含中文
 */
export const isCNChars = (str) => {
  return /[\u4e00-\u9fa5]/.test(str)
}

/**
 *  校验是否包含中文
 */
export const isPostalCode = (num) => {
  return /^[1-9][0-9]{5}$/.test(num.toString())
}

/**
 *  校验是否为IPv6地址
 */
export const isIPv6 = (str) => {
  return Boolean(
    str.match(/:/g)
      ? str.match(/:/g).length <= 7
      : false && /::/.test(str)
      ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str)
      : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str)
  )
}

/**
 *  校验是否为邮箱地址
 */
export const isEmail = (value) => {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
}

/**
 *  判断设备类型
 */
export const getTerminalType = () => {
  const flag = navigator.userAgent.match(
    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
  )
  if (flag) {
    return 'mobile'
  } else {
    return 'desktop'
  }
}

/**
 *  获取URL参数列表
 */
export const getUrlParams = (url) => {}
export const getUrlState = (URL) => {}

export const getExplorerInfo = () => {
  const t = navigator.userAgent.toLowerCase()
  return 0 <= t.indexOf('msie')
    ? {
        //ie < 11
        browser: 'IE',
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        browser: 'IE',
        version: 11,
      }
    : 0 <= t.indexOf('edge')
    ? {
        browser: 'Edge',
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf('firefox')
    ? {
        browser: 'Firefox',
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf('chrome')
    ? {
        browser: 'Chrome',
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf('opera')
    ? {
        browser: 'Opera',
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : 0 <= t.indexOf('Safari')
    ? {
        browser: 'Safari',
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        browser: t,
        version: -1,
      }
}

/**
 *  深浅拷贝
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
 *  时间戳转日期
 *  utc时间格式 和 北京时间相差8小时；年月日时分秒、
 *  const currentTime = reactive({ now: '' })
 *  setInterval(formatTimestamp, 500)
 */
export function formatTimestamp(timestamp = +new Date()) {
  const arrWeek = ['日', '一', '二', '三', '四', '五', '六']
  const date = new Date(timestamp + 8 * 3600 * 1000)
  const formatDate = date.toJSON().substr(0, 19).replace('T', ' ')
  return formatDate.replace(/-/g, '/') + ' 星期' + arrWeek[date.getDay()] //currentTime.now
}
