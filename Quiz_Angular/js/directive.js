angular.module('Quiz_angular.directive', [])
.directive('ash', function() {
  return{
  	templateUrl : "pages/header.html"
  };
})
/*.directive('footer', function() {
  return{
  	templateUrl : "pages/footer.html"
  };
}*/

.directive('footer', function() {
  return{
    restrict : "C",
    replace : true,
    templateUrl : "pages/footer.html"
  };
})
.directive('footer', function() {
  return{
  	restrict : "M",
  	replace : true,
  	templateUrl : "pages/footer.html"
  };
});


