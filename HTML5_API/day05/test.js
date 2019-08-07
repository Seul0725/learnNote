var courseone = [
{id:1,name:'根编目',cate_path:null},
{id:2,name:'Java课程',cate_path:'1.2'},
{id:3,name:'Spring课程',cate_path:'1.2.3'},
{id:6,name:'Servlet课程',cate_path:'1.2.6'},
{id:4,name:'SpringBoot课程',cate_path:'1.2.3.4'},
{id:5,name:'Web课程',cate_path:'1.5'},
{id:7,name:'React课程',cate_path:'1.5.7'},
{id:8,name:'88课程',cate_path:'1.5.7.8'},
{id:9,name:'999课程',cate_path:'1.5.7.9'},
{id:10,name:'100课程',cate_path:'1.5.7.10'},
{id:11,name:'11111课程',cate_path:'1.5.7.11'},
{id:12,name:'12课程',cate_path:'1.5.7.12'}
];
course = this.result.filter(function(item){
	return item.cate_path;
})
// console.log(course)
course.forEach(function(item){
	item.cate_path = item.cate_path.split('.');
	item.cate_path = item.cate_path.map(Number);
})
// console.log(course);

course.forEach(function(item){
	item.children = [];
	course.forEach(function(Pitem){
		if(Pitem.cate_path[2] == item.cate_path[2] && item.cate_path.length+1 == Pitem.cate_path.length ){
			item.children.push(Pitem);

		}
		if(Pitem.cate_path[1] == item.cate_path[1] && item.cate_path.length+1 == Pitem.cate_path.length && item.cate_path.length == 2){
				item.children.push(Pitem)
			}
	})
})
// console.log(course)
var result = course.filter(function(item){
	return item.cate_path.length === 2;
})
console.log(result);