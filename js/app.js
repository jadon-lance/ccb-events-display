var myApp = angular.module('myApp',[
  'ngRoute',
  'eventControllers'
])

//Calls routeProvider service
myApp.config(['$routeProvider', function($routeProvider){
  //When the /list route is called, include the list.html partial
  $routeProvider
  .when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  })
  .otherwise({
    redirectTo: '/list' //Go to list route by default
  });

}]);

//Config settings for the app
myApp.constant('FEED_CONFIG', {
  itemLimit: 5, //5 items are shown at a time
  swapFrequency: 5000 //every 5 seconds
});
