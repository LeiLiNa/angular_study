"use strict";
//.value 创建全局变量,且对其进行初始化,需要将该变量作为依赖传入;需要将数据缓存
angular.module("app").value("dict",{}).run(["$http","dict",function($http,dict){
    $http.get("/data/city.json").then(function(res){
        dict.city = res.data;
    });
    $http.get("/data/salary.json").then(function(res){
        dict.salary = res.data;
    });
    $http.get("/data/scale.json").then(function(res){
        dict.scale = res.data;
    });
}]);