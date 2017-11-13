// 减速移动
function slowDown(target){
  clearInterval(timer);
  timer = setInterval(function(){
    var speed = (target - current) / 10;

    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    current += speed;

    window.scrollTo(0,current);

    if (target === current) {
      clearInterval(timer);

    }
  },30);
}
