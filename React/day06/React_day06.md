*2019/08/26 学习React的第六天*

### axios
axios是使用promise机制封装的ajax，可以在浏览器和nodejs使用。相对比jquery来说axios是更加纯粹的ajax的框架

* 安装 
`yarn add axios`

* 默认配置
`axios.defaults.baseURL = 'https://api.example.com';`
`axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;`
`axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';`

* 参数
通过参数的设定可以改变axios的请求行为，常见的参数如下
url: '/user',
method: 'get', // default
baseURL: 'https://some-domain.com/api/',
responseType: 'json', // default
headers: {'X-Requested-With': 'XMLHttpRequest'},
transformRequest: [function (data, headers) {return data;}],
transformResponse: [function (data) {return data; }],
params: { ID: 12345 },
paramsSerializer: function(params) { 
return Qs.stringify(params, {arrayFormat: 'brackets'}) },
data: {firstName: 'Fred'},
withCredentials: false,
… 其余查看API

* 拦截器
可以在请求发送前或者是响应回来后添加拦截器
```javascript
// Add a request interceptor
axios.interceptors.request.use(function (config) { 
// Do something before request is sent 
return config; 
}, function (error) { 
// Do something with request error 
return Promise.reject(error); 
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
// Do something with response data
return response;
}, function (error) {
// Do something with response error
return Promise.reject(error);
});
```

* response格式
```javascript
{ 
data: {}, 
status: 200, 
statusText: 'OK', 
headers: {}, //服务器端返回的头部信息
config: {}, 
request: {}
}
```

* 快捷API
可以调用如下api完成ajax请求
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])

##### qs
将json数据转为表单格式数据
* 安装
`yarn add qs`

* 使用
`qs.stringify(json-obj);`