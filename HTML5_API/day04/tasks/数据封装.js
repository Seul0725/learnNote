var arr = [ 
	{
		id: 1,
		name: '根编目',
		cate_path: null
	},
	{
		id: 2,
		name: 'Java课程',
		cate_path: '1.2'
	},
	{
		id: 3,
		name: 'Spring课程',
		cate_path: '1.2.3'
	},
	{
		id: 6,
		name: 'Servlet课程',
		cate_path: '1.2.6'
	},
	{
		id: 4,
		name: 'SpringBoot课程',
		cate_path: '1.2.3.4'
	},
	{
		id: 5,
		name: 'Web课程',
		cate_path: '1.5'
	},
	{
		id: 7,
		name: 'React课程',
		cate_path: '1.5.7'
	},
	{
		id: 8,
		name: 'redux课程',
		cate_path: '1.5.7.8'
	}
];
// 一级编目
var firstTitle = arr.filter(function(item){
	if(item.cate_path){
		return item.cate_path.split('.').length==2;
	}
});
// 二级编目
var secondTitle = arr.filter(function(item){
	if(item.cate_path){
		return item.cate_path.split('.').length==3;
	}
});
// 三级编目
var thirdTitle = arr.filter(function(item){
	if(item.cate_path){
		return item.cate_path.split('.').length==4;
	}
});


firstTitle.forEach(function(item){
	var firstArr = item.cate_path.split('.');
	item.parent_id = firstArr[firstArr.length-2];
	item.list = [];
});
secondTitle.forEach(function(item){
	var secondArr = item.cate_path.split('.');
	item.parent_id = secondArr[secondArr.length-2];
	item.list = [];
});

thirdTitle.forEach(function(item){
	var thirdArr = item.cate_path.split('.');
	item.parent_id = thirdArr[thirdArr.length-2];
	item.list = [];
});

//更改对象属性名
arr.forEach(function(item){
	item.userLevel = item.name;
	item.name = item.parent_id;
});

for(var i=0;i<secondTitle.length;i++){
	for(var j=0;j<thirdTitle.length;j++){
		if(thirdTitle[j].parent_id==secondTitle[i].id){
			secondTitle[i].list.push(thirdTitle[j]);
		}	
	}
}
for(var i=0;i<firstTitle.length;i++){
	for(var j=0;j<secondTitle.length;j++){
		if(secondTitle[j].parent_id==firstTitle[i].id){
			firstTitle[i].list.push(secondTitle[j]);
		}	
	}
}
var arr = arr.slice(1);
/*//自动创建数据库及表
var db = openDatabase('user','1.0','first db',2*1024*1024);
db.transaction(function(ts){
	var sql = 'SELECT count(*) as num FROM sqlite_master WHERE type="table" AND name="cate"';
	ts.executeSql(sql,[],function(ts,result){
		console.log('查询成功',result.rows[0].num);
		if(result.rows[0].num==0){
			var sql = 'create table cate(name integer,userLevel text,parent_id integer,cate_path text)';
			ts.executeSql(sql,[],function(ts,result){
				console.log('创建表成功',result);
			},function(ts,error){
				console.log('创建表失败',error);
			});
			arr.forEach(function(item){
				sql = 'insert into cate values(?,?,?,?)';
				ts.executeSql(sql,[item.name,item.userLevel,item.parent_id,item.cate_path],function(ts,result){
					console.log('添加成功',result);
				},function(ts,error){
					console.log('添加失败',error);
				});
			});
		}
	},function(ts,error){
		console.log('查询失败',error);
	});
});
/*var sql = 'select * from cate';
MyExe(sql,[],function(result){
	var result = Array.from(result.rows);
	console.log(result);
},function(error){
	console.log(error);
});
*/
//删除表
/*var sql = 'drop table cate';
MyExe(sql,[],function(result){
	console.log('删除表成功',result);
},function(error){
	console.log('删除表失败',error);
});*/
/*function MyExe(sql,arr,fun1,fun2){
	var db = openDatabase('user','1.0','first db',2*1024*1024);
	db.transaction(function(ts){
		ts.executeSql(sql,arr,function(ts,result){
			fun1(result);
		},function(ts,error){
			fun2(error);
		});
	});
}*/


