"use strict";
angular.module("app").controller("registerCtrl",["$scope","$http","$interval","$state",function($scope,$http,$interval,$state){
    var count = 60;
    $scope.time = 0;
    $scope.submit = function(){
        $http.post("data/regist.json",$scope.user).success(function(resp){
            if(200 === resp.status){
                $state.go("login")  //$state 跳转的是url
            }
        })
    };

    $scope.send = function(){
        $http.get("/data/code.json") .then(function(data){
            console.log(data);
            if (1 === data.data.state) {

                $scope.time = 60 +"s";
                var interval = $interval(function(){
                    if(count<=0){
                        $interval.cancel(interval);
                        $scope.time = 0;
                        return
                    }
                    count--;
                    $scope.time = count +"s";
                },1000)
            }
        })
    }
}]);