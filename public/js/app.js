var app = angular.module('Blogger', ['infinite-scroll','ngCookies', 'ngSanitize']);

app.config(function($provide){

    $provide.decorator("$sanitize", function($delegate, $log){

        return function(text, target){

 

            var result = $delegate(text, target);

            $log.info("$sanitize input: " + text);

            $log.info("$sanitize output: " + result);

 

            return result;

        };

    });

});