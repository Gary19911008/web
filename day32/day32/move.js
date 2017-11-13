/*
封装函数，实现水平匀速移动
function move(elem,step,interval,target);
@elem, 要移动的元素
@step, 每一次移动的步长(px)
@interval, 定时器的间隔时间
@target, 最终位置
*/


function linearMove (elem, target, step, interval) {

  //定义参数的默认值，当用户没有传入时，可以使用默认值
  var step = step || 10;
  var interval = interval || 50;


  //每次都要清除已有的定时器
  //将定时器id挂在自身的dom对象上即可，不用定义全局变量
  clearInterval(elem.timer);

  //根据起点和终点判断 步长的正负
  step = ( box.offsetLeft < target )  ? step : -step;

  elem.timer = setInterval(function () {
    box.style.left = box.offsetLeft  +  step + "px";

    //当距离终点不到一步时，直接强制设为终点
    if (Math.abs(target - box.offsetLeft) < Math.abs(step)) {
      box.style.left = target +  "px";
      clearInterval(elem.timer);
    }
  }, interval);

}


/*
封装函数，实现水平减速移动
function slowDownMove(elem,interval,target);
@elem, 要移动的元素
@interval, 定时器的间隔时间
@target, 最终位置
*/


function slowDownMove(elem, target, interval) {

  var interval = interval || 50;


  //每次都要清除已有的定时器
  //将定时器id挂在自身的dom对象上即可，不用定义全局变量
  clearInterval(elem.timer);

  elem.timer = setInterval(function () {

    //需要每次得到最新的step,step会递减
    var step = (target - box.offsetLeft) / 20;

    //使用Math.ceil Math.floor保证最终 box.offsetLeft === target
    step =  step > 0 ? Math.ceil(step) : Math.floor(step);
    box.style.left = box.offsetLeft  +  step + "px";

    if ( target === box.offsetLeft ) {
      clearInterval(elem.timer);
    }
  }, interval);
}
