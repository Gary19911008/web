

//将sum.js导入到当前作用域内
// 其中传入多个脚本文件时，文件的加载都是异步执行的(那个先加载完毕，不知道)，但是执行顺序都是按照传入的先后顺序。
importScripts("./sum.js");

setInterval(function(){
  var one = Math.floor(Math.random() * 20  + 10);
  var two = Math.floor(Math.random() * 20  + 10);
  this.postMessage(sum(one,two));

}, 1000);
