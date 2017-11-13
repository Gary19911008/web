/*
功能：实现一个比较通用的获得浏览器窗口的垂直，水平的滚动距离
返回值：对象
*/

function getScrollValue(){
  if (window.pageYOffset >= 0) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  } else if (document.documentElement.scrollTop >= 0) {
    return {
      left: document.documentElement.scrollLeft,
      top:  document.documentElement.scrollTop
    }
  } else {
    return {
      left: document.body.scrollLeft,
      top:  document.body.scrollTop
    }
  }
}
