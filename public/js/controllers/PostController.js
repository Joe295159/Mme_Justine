app.controller('PostController', ['$scope', '$http', function($scope,$http ) { 

   $scope.sendPost = function() {
   		$('#postButton').button('loading');

   		var id = document.getElementById("postTitle").value;
   		var type = document.querySelector('input[name="postType"]:checked').value;
   		var text = document.getElementById("postText").value;

   		var currentDate = new Date();
    	var day = currentDate.getDate();
    	var month = currentDate.getMonth() + 1;
    	var year = currentDate.getFullYear();
    	var date = (day + "/" + month + "/" + year);

    	var sendObject = {'id':id , 'date': date, 'type':type, 'post':
    						text };

    	$http.post('http://localhost:3000/blogPosts', sendObject).then(function(response) {
			     //this callback will be called asynchronously
			     //when the response is available
			     alert("Saved to database.");
			     $('#postButton').button('reset');
			     $('#postTitle').val("");
			     $('#postText').val("");
			     $('#writepost').modal('hide');
			     location.reload();

			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.

			    alert("Error with database. Please try again.");
			    $('#postButton').button('reset');
			  });
    		

   };

}]);