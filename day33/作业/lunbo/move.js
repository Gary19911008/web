   /*
    功能：将一个dom对象移动到指定位置
    @obj, 要移动的元素DOM对象
    @target, 最终的位置
    */
	function move(obj, target ,step, time){

		var step = step || 100; //设置默认值
		var time = time || 30;

		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var speed = (target > obj.offsetLeft) ? step  : -step;
			obj.style.left = obj.offsetLeft + speed + "px";

			if (Math.abs(target - obj.offsetLeft) < step){
				obj.style.left = target +  "px";
				clearInterval(obj.timer);
				return;
			}
		}, time);
	}


	function easeIn(obj, target){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){

            var speed = (target - obj.offsetLeft) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			obj.style.left = obj.offsetLeft + speed + "px";
			if (target == obj.offsetLeft){
				obj.style.left = target +  "px";
				clearInterval(obj.timer);
				return;
			}
		}, 10);
	}