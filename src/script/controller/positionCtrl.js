"use strict";
angular.module("app").controller("positionCtrl",["$scope","$http","$state",function($scope,$http,$state){
    $http.get("/data/position.json?id="+$state.params.id).then(function(res){
        $scope.isLogin = false;
        $scope.position = res.data;
        console.log(res);
    })

}]);