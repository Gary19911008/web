/*
水平移动(基于定位的！！！)
@elem,要移动的DOM对象
@target,目的位置(数值)
@step, 步长(数值)
@interval, 定时器的间隔
*/
function move(elem,target,step,interval){
  clearInterval(elem.timer);

  //根据起点和终点，决定步长是正值还是负值 ！！！！
  step = elem.offsetLeft < target ? step  : -step;

  elem.timer = setInterval(function() {
    elem.style.left = elem.offsetLeft + step + "px";

    if(Math.abs(target - elem.offsetLeft) <= Math.abs(step)){
      clearInterval(elem.timer);
      //不够一步时，直接到位
      elem.style.left = target + "px";
      return;
    }

  }, interval);
}
