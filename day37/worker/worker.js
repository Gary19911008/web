

/*
后台woker是一个缩小版的浏览器执行环境
不能操作dom, css 没有window
*/
var timer, role, count = 0 ;


//this就是后台线程本身
//this.onmessage就是用于接收主线程发来的数据
this.onmessage = function(event){
  count = event.data.count;
  role = event.data.role;

  clearInterval(timer);

  timer = setInterval(function(){
    console.log( role + " 中的count: ", count++);
    if (count >= 22) {

      //postMessage给主线程发送消息
      postMessage("领导，我把活干完了");
      clearInterval(timer);
    }
  }, 1000);
}
