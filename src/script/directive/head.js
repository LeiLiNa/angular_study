"use strict";
//指令的作用是把我们自定义的语义化标签替换成浏览器能够认识的HTML标签
angular.module("app").directive("appHead",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/head.html"
    }
}]);