app.factory('Blogit', ['$http', function($http) { 



var Blogit = function(atype) {

    this.items = [];

    this.busy = false;

    this.after = '0';

    this.type = atype;

  };


  Blogit.prototype.nextPage = function() {

    if (this.busy) return;

    this.busy = true;



    var url = 'http://localhost:3000/blogPosts' + this.type + '?first=' + this.after ;

    $http.get(url).success(function(data) {

      var items = data.badge;

      if(items != undefined){
      for (var i = 0; i < items.length; i++) {

        this.items.push(items[i]);

      }

      this.after = this.items[this.items.length - 1]._id;
    }

      this.busy = false;

    }.bind(this));

  };

  return Blogit;

}]);