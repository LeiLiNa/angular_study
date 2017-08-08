"use strict";
//路由配置
angular.module("app").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider.state("main",{
        url:"/main",
        templateUrl:"view/main.html",
        controller:"mainCtrl"
    }).state("position",{
        url:"/position/:id",            //根据不同的职位进行展示，所以通过id展示不同的页面
        templateUrl:"view/position.html",
        controller:"positionCtrl"
    });
    // 重定向url，如果访问的URL都不存在
    $urlRouterProvider.otherwise("main");
}]);



