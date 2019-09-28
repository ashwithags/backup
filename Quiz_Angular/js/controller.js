angular.module('Quiz_angular.controllers', [])
.controller('loginController', function($scope,$state,userOperations){
	$scope.loginDisplay = true;
	$scope.loginOps = function(req){
		console.log(req);
		userOperations.register(req).success(function(wow){
			if(wow.success){
				sessionStorage.setItem('UserID',wow.Users.UID);
				sessionStorage.setItem('UserName',wow.Users.exam_register_uname);
				$state.go('homepath');
			}
			console.log(wow);
		},function(err){
			console.log(err);
		})
	};
	$scope.changeForm = function(a,b){
		$scope.loginDisplay = a;
		$scope.signUpDisplay = b;
	};

	$scope.signUpOps = function(reqe){
		console.log(reqe);
	};
})
.controller('signupController', function($scope){
		$scope.userName = 'Jimi Scotts';
		$scope.email = 'jimi.s@aol.com';
		$scope.password = '1234';

		
		$scope.students = [
		  {firstName:'Jimi', lastName:'Scotts', email:'jimi@xyz.com'},
		  {firstName:'Paul', lastName:'Adam', email:'paul.a@xyz.com'},
		  {firstName:'Peter', lastName:'England', email:'peter@xyz.com'},
		  {firstName:'Rechard', lastName:'Jeff', email:'reachardjeff@xyz.com'}
		];
})
.controller('homeController', function($scope,$state){
	$scope.courses = [{
		"courseImg": "http://rathankalluri.com/wp-content/uploads/2017/04/Angular-js-768x575.jpg",
		"courseDispName": "Angular JS Foundation",
		"courseSubHeading": "Basics and Advance Questions for AngularJS",
		"courseId": "TECHUV0007",
		"courseDBName": "angularquestionset",
		"courseDesc": "",
		"courseColor": "#C93756"
	},{
		"courseImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
		"courseDispName": "JavaScript Object Oriented",
		"courseSubHeading": "Chit chats of JavaScript",
		"courseId": "TECHUV0013",
		"courseDBName": "javascriptquestionset",
		"courseDesc": "",
		"courseColor": "#03C9A9"
	},{
		"courseImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/2000px-AJAX_logo_by_gengns.svg.png",
		"courseDispName": "Ajax Programming",
		"courseSubHeading": "Process to communicate",
		"courseId": "TECHUV0010",
		"courseDBName": "ajaxquestionset",
		"courseDesc": "",
		"courseColor": "#F89406"
	},{
		"courseImg": "https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social-logo.png",
		"courseDispName": "Bootstrap Exams",
		"courseSubHeading": "Process to communicate",
		"courseId": "TECHUV0016",
		"courseDBName": "bootstrapquestionset",
		"courseDesc": "",
		"courseColor": "#C79541"
	}];

	$scope.questions = function(exam){
		/*console.log('I am Here');
		alert(exam);*/
		sessionStorage.setItem('questionset',exam);
		$state.go('exam');
	};
})
.controller('examController', function($scope,$state,Questionset){
	$scope.id;
	$scope.quizOver;
	$scope.inProgress;

	var question = {};
	question.questionset = sessionStorage.getItem('questionset');
	//console.log(question);
	Questionset.getQuestions(question).success(function(wow){
		if(wow.success){
			console.log(wow.questions);
			$scope.totalCount = wow.questions.length;
			$scope.questionDatas = wow.questions;
		}
	},function(err){
		console.log(err);
	});

	$scope.descDisplay = true;
	$scope.startTest = function(a,b){
		$scope.descDisplay = a;
		$scope.questionDisplay = b;
		$scope.id=0;
		$scope.quizOver = false;
		$scope.inProgress = true;
		$scope.score=0;
		getQuestion();
	};
	

    function getQuestion(){
		//console.log($scope.questionDatas[$scope.id]);
		$scope.currentQuestion = $scope.questionDatas[$scope.id];
	}
	$scope.nextQuestion = function(){
		$scope.id++;
		//console.log($scope.totalCount+'  '+$scope.id);

		if($scope.totalCount==$scope.id){
			$scope.resultPercent = $scope.score/$scope.totalCount *100;
			$scope.quizOver = true;
			$scope.inProgress = false;
		} else {
			getQuestion();
		}
	};

	$scope.checkAnswer = function(){
		var userAns = $('input[name=answer]:checked').val();
		var actAns = $scope.currentQuestion.correct;
		console.log(userAns);
        if(actAns == userAns){
        	$scope.score++;
        	alert("Right");
        }
        else{
        	alert("wrong");
        }

	};
})