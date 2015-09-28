app.factory('linkFactory', ['$http', function($http) { 

  return $http.get('http://localhost:3000/blogPosts/link') 

            .success(function(data) { 

              return data; 

            }) 

            .error(function(err) { 

              return err; 

            }); 

}]);