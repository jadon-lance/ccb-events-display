//Angular var that Sets Namespace for the App
var confController = angular.module("confController", ['ngAnimate']);

/**
* Controller to handle the configuration form
* @param (String) Name of the controller
* @param (Array) List of name-protected fields to pass, including constructor
*/
confController.controller("ConfController", ['$scope','$http','feedConfigService', function ($scope, $http, feedConfigService){
  //Attempt to get the configuration
  feedConfigService.getConfig()
    .success(function(config_data) {
      console.log("Got config!");
      //Use the existing config values for the form
      $scope.confSettings = feedConfigService.parseConfig(config_data);
      console.log($scope.confSettings);
    })
    .error(function(response, status) {
      console.log("No config: " + response);
      //No config. Use the default values for the form
      $scope.confSettings = {
        days_ahead: 14,
        days_of_week: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
        item_limit: 6,
        swap_frequency: 4,
        slide_frequency: 3,
        page_refresh_frequency: 60,
        slide_head_img: "images/head.jpg",
        slide_img_path: "/full/path/to/slider/images/folder"
      };
      console.log($scope.confSettings);
    });



}]);
