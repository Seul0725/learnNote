//axios的使用
//引入axios
const axios = require('axios');
// console.log(axios);
//默认传递JSON数据
//post在(url,data)
axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then((re) => {
    //re封装后的，不完全是后台数据
    console.log(re.data);
}).catch((err) => {
    console.log(err);
});