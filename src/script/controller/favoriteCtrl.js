"use strict";
angular.module("app").controller("favoriteCtrl",["$scope","$http",function($scope,$http){
    $http.get("/data/myFavorite.json").then(function (data) {
        console.log(data);
        $scope.list = data.data;
    })
}]);