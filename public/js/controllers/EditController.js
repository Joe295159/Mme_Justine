app.controller('EditController', ['$scope', '$http', function($scope,$http ) { 

   $scope.editPost = function() {
   		$('#editButton').button('loading');

      var id2 = document.getElementById("editTitle").value;
   		var id = $('#originalTitle').text().replace('Original title: ', '');
   		var type = document.querySelector('input[name="postType"]:checked').value;
   		var text = document.getElementById("editText").value;

   		var currentDate = new Date();
    	var day = currentDate.getDate();
    	var month = currentDate.getMonth() + 1;
    	var year = currentDate.getFullYear();
    	var date = (day + "/" + month + "/" + year);

    	var sendObject = {'oTitle': id,
      'newValue': [{'id':id2 , 'date': date, 'type':type, 'post':
                text }]};

    	$http.post('http://localhost:3000/blogPosts/edit', sendObject).then(function(response) {
			     //this callback will be called asynchronously
			     //when the response is available
			     alert("Saved to database.");
			     $('#postButton').button('reset');
			     $('#postTitle').val("");
			     $('#postText').val("");
			     $('#editpost').modal('hide');
           location.reload();

			  }, function(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.

			    alert("Error with database. Please try again.");
			    $('#postButton').button('reset');
			  });
    		

   };

   $scope.deletePost = function() {

    $('#deleteButton').button('loading');

      var id2 = document.getElementById("editTitle").value;
      var id = $('#originalTitle').text().replace('Original title: ', '');
      var type = document.querySelector('input[name="postType"]:checked').value;
      var text = document.getElementById("editText").value;

      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var date = (day + "/" + month + "/" + year);

      var sendObject = {'oTitle': id,
      'newValue': [{'id':id2 , 'date': date, 'type':type, 'post':
                text }]};

      $http.post('http://localhost:3000/blogPosts/delete', sendObject).then(function(response) {
           //this callback will be called asynchronously
           //when the response is available
           alert("Deleted from database.");
           $('#postButton').button('reset');
           $('#postTitle').val("");
           $('#postText').val("");
           $('#editpost').modal('hide');
           location.reload();

        }, function(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.

          alert("Error with database. Please try again.");
          $('#postButton').button('reset');
        });

   };

}]);