"use strict";
angular.module("app").directive("searchTab",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/searchTab.html",
        scope:{
            "list":"=",
            "tabClick":"&"
        },
        link:function(scope){
            scope.selectId = "city";
            scope.Click = function(item){
                scope.selectId = item.id;
                scope.tabClick(item);
            }
        }
    }
}]);