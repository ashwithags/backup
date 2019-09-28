angular.module('LocatorApp.directive',[])
.directive('header',function(){
	return{
		templateUrl: 'pages/header.html'
	};
})
.directive('rightsidebar',function(){
	return{
		templateUrl: 'pages/right-sidebar.html'
	};
})
.directive('sidebar',function(){
	return{
		templateUrl: 'pages/left-sidebar.html'
	};
});