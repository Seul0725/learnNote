//js
//处理点击切换页面
$(function(){
	$(".sc-body li").click(function(event){
		var text = $(event.target).text();
		switch(text){
			case "学生管理":
				//加载页面 加载的是相对于index.html的相对路径
				$(".content").load("./pages/student.html");
				break;
			case "课程管理":
				$(".content").load("./pages/course.html");
				break;
			case "班级管理":
				$(".content").load("./pages/class.html");
				break;
			case "年级管理":
				$(".content").load("./pages/grade.html");
				break;
			case "教师管理":
				$(".content").load("./pages/teacher.html");
				break;
		}
	});
});