app.factory('fileFactory', ['$http', function($http) { 

  return $http.get('http://localhost:3000/blogPosts/file') 

            .success(function(data) { 

              return data; 

            }) 

            .error(function(err) { 

              return err; 

            }); 

}]);