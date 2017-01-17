(function(){
  "use strict";

  angular.module("angularApp").controller("chartCtrl", ['$scope', '$http', function ($scope, $http){

    $http.get("/visits.json").then(function(response){
      $scope.data = [response.data["numbers"]];
      $scope.labels = [response.data["dates"]];
      $scope.series = [response.data["dates"]];
    });

  }]);

}());