
/*
获得整个浏览器滚动条滚动值
*/
function getScroll(){
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
