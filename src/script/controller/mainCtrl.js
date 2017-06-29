"use strict";
angular.module("app").controller("mainCtrl",["$scope",function($scope){
    $scope.list=[{
        id:1,
        name:"销售",
        imageSrc:"image/1.jpg",
        city:"上海",
        industry:"互联网",
        time:"2016-6-01 11:05"
    },{
        id:2,
        name:"工程师",
        imageSrc:"image/2.jpg",
        city:"上海",
        industry:"互联网",
        time:"2016-6-01 11:05"
    },{
        id:3,
        name:"销售",
        imageSrc:"image/1.jpg",
        city:"上海",
        industry:"互联网",
        time:"2016-6-01 11:05"
    }]
}])