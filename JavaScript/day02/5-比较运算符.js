console.log(3<2);//false
console.log(3>2);//true
console.log(3>=2);//true
console.log(3<=2);//false
console.log('-----');
console.log(true == 'true');//false
console.log(1 == '1');//true
console.log(1 == true);//true
console.log(0 == null);//false
console.log(undefined == 0);//false
console.log(2 == true);//false
console.log('--------');
/*
 *number比string，如果看起来一样，==true
 *number比boolean，如果boolean转换成number，与number一样，==true
 *string比boolean，即使看起来一样，==false
 *null==null true，其他为false
 *undefined==undefined true，其他为false
 */
console.log(true === 'true');//false
console.log(1 === '1');//false
console.log(1 !== '1');//true
console.log(1 != '1');//false








