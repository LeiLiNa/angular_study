"use strict";
angular.module("app").controller("mainCtrl",["$scope","$http",function($scope,$http){
    $http.get("/data/positionList.json").then(function(resp){
       // console.log(resp.data);
        $scope.list = resp.data;
    }).catch();
}]);