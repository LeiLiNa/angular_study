"use strict";
angular.module("app").controller("postCtrl",["$scope","$http",function($scope,$http){
    $scope.tabList = [
        {"id": "all", "name": "全部"},
        {"id": "Interview", "name": "面试邀请"},
        {"id": "Inappropriate", "name": "不合适"}
    ];

    $http.get("/data/myPost.json").then(function (data) {
        console.log(data);
        $scope.list = data.data;
    })
}]);