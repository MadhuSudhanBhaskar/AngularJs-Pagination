<script>
$(document).ready(function(){
	$( ".check li.test:gt(4)" ).addClass("invisible");
});
var app=angular.module('app',[]);

app.controller('MainCtrl',function($scope){
$scope.currentPage=0;
	$scope.range= [
					{number: "1"},
					{number: "2"},
					{number: "3"},
					{number: "4"},
					{number: "5"},
					{number: "6"},
					{number: "7"},
					{number: "8"}
				];


$scope.step=function(e)
{
	$scope.currentPage=e;
	if(e === 0){
		$scope.currentPage=e;
		$( ".check li#test" ).addClass("inactive");
		$( ".check li.test:eq(1)" ).removeClass("active");
	}
	else
	{
		var len=$('.check .test').length;
		if((e+1) === len)
		{
			var gtr=e+1;
			var i=e-4;
			$( ".check li#next" ).addClass("inactive");
			pagePrint(len,gtr,i);
		}
		else
		{
			$( ".check li#next" ).removeClass("inactive");
			var gtr=e+4;
			var newGTR;
			if(gtr<len){
				newGTR=gtr;
			}
			else{
				newGTR=len;
			}
			var m=e-1;
			pagePrint(len,newGTR,m);
		}				
	}
};
$scope.prevPage=function(){
	var t=$scope.currentPage;
	if(t == 0) return false;
	$scope.step(t-1);
	}

$scope.nextPage=function(){
	var t=$scope.currentPage;
	var len=$('.check .test').length;
	if((t+1) == len) return false;
	$scope.step(t+1);
	}
});

function pagePrint(len,gtr,m)
{
	for(var i=0;i<len;i++){
		$( ".check li.test:eq("+i+")" ).removeClass("visible");
		$( ".check li.test:eq("+i+")" ).addClass("invisible");
		$( ".check li.test:eq("+i+")" ).removeClass("active");
	}	
	while(m<gtr && m < len){
		$( ".check li.test:eq("+m+")" ).removeClass("invisible");
		$( ".check li.test:eq("+m+")" ).addClass("visible");
		m++;
	}
}

</script>
