angular.module('LocatorApp.controllers', [])

.controller('loginController', function($scope, $state, loginOperation) {
	$scope.login = function(loginData) {
		console.log(loginData);
        showDiv=true;
		loginOperation.getUserDetail(loginData).success(function(wow) {
			if (wow.success) {
				console.log(wow.logins);
				console.log(loginData.username);
				var userexist = false;
				for (var i = 0; i < wow.logins.length; i++) {
					console.log(wow.logins[i].username);
					if (loginData.username === wow.logins[i].username) {
						//alert("match");
						if (loginData.mobile == wow.logins[i].mobile) {
							//alert("match");
							$state.go('homepage');
							userexist = true;
						} else {
							alert("mobile not match");
							userexist = true;
						}
					}
				}
				if (userexist == false) {
					alert("username does not exist");
				}
			}
		}, function(err) {
			console.log(err);
		});
	}
})


.controller('signUpController', function($scope, $state) {
	$state.go('enquiry');
	alert("signin");
	$scope.signUp = function(signUpData) {
		alert("signin");
		console.log(signUpData);
		localStorage.setItem('signupDetail', signUpData);
	}
})

.controller('enquiryController', function($scope, $state, enquiry){
	enquiry.getEnqList().success(function(now){
		if(now.success){
			$scope.enquries = now.enq_list;
		}
	});

	enquiry.getContactedList().success(function(wow){
		if(wow.success){
   			$scope.cont = wow.cnt_list;
		}
	});

	enquiry.getStudentsList().success(function(info){
		$scope.StudentsList = info;
		
	});
	enquiry.getPosition().success(function(positn){
		$scope.position = positn;
	})
})

