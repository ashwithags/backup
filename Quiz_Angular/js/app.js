angular.module('Quiz_angular', ['ui.router','Quiz_angular.directive','Quiz_angular.controllers','Quiz_angular.services'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('login');	
		
	
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl : 'pages/login.html',
			controller : 'loginController'
		})
		.state('signUpBlock',{
			url: '/signup',
			templateUrl : 'pages/signUp.html',
			controller : 'signupController'
		})
		.state('inbuildDir',{
			url: '/inbuild',
			templateUrl : 'pages/inbuild.html',
			controller : 'signupController'
		})
		.state('homepath',{
			url: '/home',
			templateUrl : 'pages/home.html',
			controller : 'homeController'
		})
		.state('exam',{
			url: '/examset',
			templateUrl : 'pages/exam.html',
			controller : 'examController'
		})
});