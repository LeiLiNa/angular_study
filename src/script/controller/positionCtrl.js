"use strict";
angular.module("app").controller("positionCtrl",["$scope","$http","$state","$q","cache",function($scope,$http,$state,$q,cache){
    cache.remove("to");
    $scope.isLogin = false;
    function getPositionInfo(){
        var def = $q.defer();
        //$http.[post,delete,put;](url,{请求体},{配置})
        $http.get("/data/position.json?id="+$state.params.id).then(function(res){
            $scope.position = res.data;
            def.resolve(res);
        }).catch(function(reason){
            def.reject(reason);
        });
        return def.promise;
    }
    getPositionInfo().then(function(res){
        getCompany(res.data.companyId)
    })
    function getCompany(id){
       $http.get("/data/company.json?id="+id).then(function(res){
           $scope.company = res.data;
       })
    }
}]);