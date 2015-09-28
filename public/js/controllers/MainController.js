app.controller('MainController', ['$scope', '$cookies', 'Blogit',  function($scope, $cookies, Blogit) { 


  $scope.blogit = new Blogit("");


   $scope.dataModal = function(badge) {
   	$('#editTitle').val(badge.id);
   	$('#originalTitle').text('Original title: ' + badge.id);
   	$('#editText').val(badge.post);

   	switch(badge.type){
   		case "other":
   		$("#editRadioOther").prop("checked", true)
   		break;

   		case "link":
		$("#editRadioLink").prop("checked", true)
   		break;

   		case "file":
   		$("#editRadioFile").prop("checked", true)
   		break;

   	}

   };

   $scope.hideEdit = function(){

      if($cookies.get('cookie') == "cookie_on"){
        return true;
      }
      else return false;

   };

   $scope.logOut = function(){

      $cookies.put('cookie', 'cookie_off');
      location.reload();

   };

}]);