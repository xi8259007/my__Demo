/**
 *
 *        v 2023.05.29
 *        Echart api
 *        官网  https://echarts.apache.org/zh/option.html#title.textStyle
 *
 **/

const options = {
  backgroundColor: 'rgba(0,0,0,0)', //  全局背景
  color: ['#ff0000'], //  默认色板

  //  ****************    布 局    ****************
  /**
   *      布 局
   */
  grid: {
    id: '',
    show: false,                //  是否显示直角坐标系网格
    containLabel: true,         //  false用于多个grid对齐，true用于防止标签溢出
    left: 'auto',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    
  },
  /**
   *      标 题
   *      @textStyle            //   主标题文字样式
   *      @subtextStyle         //  副标题文字样式
   */
  title: {
    id: '',                     //  组件 ID，默认不指定
    show: true,
    shadowBlur: 0,              //  图形阴影的模糊大小，必须!设置了show:true以及值不为 tranparent 的背景色 backgroundColor
    shadowColor: 'transparent', //  阴影颜色，必须!设置了 show: true
    shadowOffsetX: 0,           //  阴影水平方向上的偏移距离，必须!设置了 show: true
    shadowOffsetY: 0,           //  阴影垂直方向上的偏移距离，必须!设置了 show: true
    z: 2,                       //  图形的前后顺序
    left: 'auto',               //  'left' ¦ 'center' ¦ 'right'  ¦ 20 ¦ 20%
    top: 'auto',                //  'top'  ¦ 'middle' ¦ 'bottom' ¦ 20 ¦ 20%
    right: 'auto',              //  20   ¦   20%
    bottom: 'auto',             //  20   ¦   20%
    padding: 5,                 //  默认各方向内边距为5，[10, 5] ¦ [10, 10, 5, 5]
    itemGap: 10,                //  主副标题之间的间距
    textAlign: 'auto',          //  整体（包括text和subtext）的水平对齐，'auto' ¦ 'left' ¦ 'right'  ¦ 'center'
    textVerticalAlign: 'auto',  //  整体（包括text和subtext）的垂直对齐，'auto' ¦  'top' ¦ 'bottom' ¦ 'middle'
    triggerEvent: false,        //  是否触发事件，false ¦ true
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    borderWidth: 0,
    borderRadius: 0,

    text: '主标题',              //  支持使用 \n 换行
    link: '',                   //  主标题文本超链接
    target: '',                 //  指定窗口打开主标题超链接，  'self' ¦ 'blank'
    textStyle: {
      fontSize: 18,
      fontStyle: 'normal',      //  'normal' ¦ 'italic' ¦ 'oblique' ¦
      fontWeight: 'normal',     //  'normal' ¦ 'bold'   ¦ 'bolder'  ¦ 'lighter' ¦ 100 ¦ 200 ¦ 300 ¦ 400
      fontFamily: 'sans-serif',
      color: '#556677',
      lineHeight: 20,
      rich: {
        //  详情官网api
        a: {
          //  rich中如果没有 lineHeight，取父层级的 lineHeight  为 20
          color: 'red',
          lineHeight: 10,
        },
      },
      width: 50,
      height: 40,
      backgroundColor: 'transparent', //  文字块背景色
      borderColor: 'transparent', //  文字块边框颜色
      borderWidth: 0, //  文字块边框宽度
      borderRadius: 0, //  文字块的圆角
      padding: 0, //  文字块的内边距
      shadowColor: 'transparent', //  文字块的背景阴影颜色
      shadowBlur: 0, //  文字块的背景阴影长度
      shadowOffsetX: 0, //  文字块的背景阴影 X 偏移
      shadowOffsetY: 0, //  文字块的背景阴影 Y 偏移
      textBorderColor: 'transparent', //  文字本身的描边颜色
      textBorderWidth: 0, //  文字本身的描边宽度
      textBorderType: 'solid', //  文字本身的描边类型，'solid' ¦ 'dashed' ¦ 'dotted'
      textBorderDashOffset: 0, //  设置虚线的偏移量，v5.0.0 开始支持
      textShadowColor: 'transparent', //  文字本身的阴影颜色
      textShadowBlur: 0, //  文字本身的阴影长度
      textShadowOffsetX: 0, //  文字本身的阴影 X 偏移
      textShadowOffsetY: 0, //  文字本身的阴影 Y 偏移
      overflow: 'none', //  文字超出宽度是否换行（配置width有效），'truncate'（截断） ¦ 'break'（换行） ¦ 'breakAll'（单词换行）
      ellipsis: '...', //  文字末尾显示的文本，overflow配置为'truncate'有效
      lineOverflow: 'none', //  文字超出高度部分截断（配置height有效），'truncate'（截断）
    },

    subtext: '副标题',
    sublink: '',
    subtarget: '',
    subtextStyle: {
      fontSize: 14,
      fontWeight: 'bolder',
      color: '#333',
    },
  },

  /**
   *      图 例
   */
  legend: {
    id: '',
    show: true,
    type: 'plain',              //  图例的类型，'plain':普通图例  'scroll':可滚动翻页的图例
    orient: 'horizontal',       //  布局方式，默认为水平布局，  'horizontal' ¦ 'vertical'
    align: 'auto',              //  图例标记和文本的对齐，  'auto' ¦ 'left' ¦ 'right'
    left: 'auto',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: 'auto',              //  图例组件的宽度
    height: 'auto',             //  图例组件的高度
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    borderColor: '#ccc',
    icon: 'circle',
    padding: 5,
    itemGap: 10,
    itemWidth: 25,
    itemHeight: 14,
    symbolKeepAspect: true,     //  如果图标（可能来自系列的 symbol 或用户自定义的legend.data.icon）是path://的形式，是否在缩放时保持该图形的长宽比。
    selectedMode: true,         //  图例选择的模式，
    inactiveColor: '#ccc',      //  图例关闭时的颜色
    data: [],                   //  数据
    textStyle: {
      color: '#999',
      fontSize: 12,
      backgroundColor: 'transparent', // 文字块背景色，一定要加上，否则对齐不会生效
      rich: {                   //  样式class名 变量
        a: {
          width: 150,
          align: 'left',
        },
        c: {
          align: 'right',
        },
      },
    },
    formatter: (name: any) => {
      const res: any = seriesData.filter((item: any) => item.name == name);
      return `{a|${name} | ${parseFloat(res[0].proportion).toFixed(2)}%}  {c|${res[0].value}}`;
    },
  },

  /**
   *       鼠标提示
   *       @axisPointer         //坐标轴指示器，坐标轴触发有效
   */
  tooltip: {
    trigger: 'axis',            //  触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
    showDelay: 20,              //  显示延迟，添加显示延迟可以避免频繁切换，单位ms
    hideDelay: 100,             //  隐藏延迟，单位ms
    transitionDuration: 0.4,    //  动画变换时间，单位s
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderColor: '#333',
    borderRadius: 4,
    borderWidth: 0,
    padding: 5,
    axisPointer: {
      type: 'line',             //  'line' ¦ 'shadow'
      lineStyle: {
        color: '#48b',
        width: 2,
        type: 'solid',
      },
      shadowStyle: {
        width: 'auto',          // 阴影大小
        color: 'rgba(150,150,150,0.3)', // 阴影颜色
      },
    },
    textStyle: {},
  },

  yAxis: {
    //  ****************     Y 轴    ****************
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    name: '??', //
    nameRotate: 90,
    nameTextStyle: {
      //  文字样式，默认取全局样式
      fontSize: 12,
    },
  },

  /**
   *      数 据 
   */
  series: [
    {
      name: '????',
      type: 'bar',              //  type line bar
      barMinHeight: 0,
      barMaxWidth: 20,
      barWidth: 20,
      barGap: 20,               //  柱间距离，默认为柱形宽度的30%，可设固定值
      yAxisIndex: 0,            //  层级关联
      smooth: true,             //  圆滑
      showSymbol: false,        //  显示圆点
    },
  ],
}
