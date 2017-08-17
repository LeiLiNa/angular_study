"use strict";
angular.module("app").directive("searchBar",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/searchBar.html"
    }
}]);