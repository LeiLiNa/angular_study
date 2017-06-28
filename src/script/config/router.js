"use strict";
//路由配置
angular.module("app").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider.state("main",{
        url:"/main",
        templateUrl:"view/main.html",
        controller:"mainCtrl"
    });
    // 重定向url，如果访问的URL都不存在
    $urlRouterProvider.otherwise("main");
}]);