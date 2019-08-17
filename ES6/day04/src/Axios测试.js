const axios = require('axios');
axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
});