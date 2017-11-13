

# 跨域资源共享(cors)

## 页面之间的通信
### 破解方法(iframe,必须同源)
* window.name ,适用于iframe嵌套页面，需要监听window.name的变化
* hash,片段标识符，适用于iframe，直接使用 hashchange事件，监听自身hash变化即可（单页面路由）

### HTML5中标准的API
* window.open, window.postMessage方法, window.onmessage事件


## 客户端和服务端之间的通信
* jsonp, 利用script发送get请求
* XMLHttpRequest, 需要服务端设置 Access-Control-Allow-Origin http的响应头
