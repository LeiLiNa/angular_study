"use strict";
angular.module("app").controller("meCtrl",["$scope","cache","$state",function($scope,cache,$state){
    if(cache.get("name")){
        $scope.name = cache.get("name");
        $scope.image = cache.get("image");
    }
    $scope.loginOut  = function(){
        cache.remove("id");
        cache.remove("name");
        cache.remove("image");
        $state.go("login");
    }
}]);