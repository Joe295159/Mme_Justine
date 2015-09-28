app.controller('PrivateController', ['$scope', '$http', function($scope, $http) { 

$scope.authenticate = function() {

	var password = { 'input': $('#password').val() };



		$http.post('http://localhost:3000/admin', password).then(function(response) {
			     //this callback will be called asynchronously
			     //when the response is available
			     if(response.data.admin !== 'off'){
			     	alert("Password correct");
			     	window.location='http://localhost:3000/'
			     }
			     else{
			     	alert("Wrong password, please try again...");
			     }

			     

			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.

			    alert("Error authenticating to server. Please try again.");
			  });



	


};

}]);