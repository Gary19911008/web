
var timer, count = 0 ;
timer = setInterval(function(){
  console.log(count++);
  if (count >= 10){
    throw new Error("到达极限");
  }
}, 1000);
