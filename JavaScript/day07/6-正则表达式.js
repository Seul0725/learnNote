var str = 'helloworld javascript';
//贪婪模式和非贪婪模式，默认是贪婪模式
var pattern = /\w{3,8}?/i;
console.log(pattern.exec(str));//['hellowor']

// \d? 出现0-1次
// \d?? 出现0次 \d{2,5}?出现2次

//验证电话号码
var str = '12346564666';
var pattern = /^\d{11}$/;
console.log(pattern.test(str));






