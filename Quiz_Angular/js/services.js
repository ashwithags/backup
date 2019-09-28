angular.module('Quiz_angular.services', [])

.factory('userOperations', function($http,$q){
    var services ={};
	services.register=function(data){
		console.log(data);
		return $http({
			method: 'POST',
			url: 'http://192.168.1.3:7000/ideology/register',
			data: data
		})
	},
	services.getUserDetails=function(a){
		console.log(a);
		return $http({
			method: 'POST',
			url: 'http://192.168.1.3:7000/ideology/getRegisteredUserDetails',
			data: a
		})
	}
	return services;         
})
.factory('Questionset', function($http,$q){
	var services ={};
   /* services.getQuestions=function(ques){
		console.log(ques);
		return $http({
			method: 'POST',
			url: 'http://192.168.1.3:7000/ideology/examsets',
			data: ques
		})
	}*/
	 services.getQuestions=function(ques){
	 	console.log(ques);
		var url = 'json/'+ques.questionset+'.json'
		console.log(url);
		return $http({
			method: 'GET',
			url: url,
            dataType: 'json',
		}) 
	}
	return services;
});
