"use strict";
angular.module("app").controller("companyCtrl",["$state","$http","$scope",function($state,$http,$scope){//依赖注入后，对应的变量位置不能改变
    $http.get("/data/company.json?id="+$state.params.id).then(function(res){
        $scope.company = res.data;
        $scope.isActive = true;
    })

}]);