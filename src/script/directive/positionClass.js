"use strict";
angular.module("app").directive("appPositionClass",[function(){
    return {
        restrict:"A",
        replce:true,
        templateUrl:"view/template/positionClass.html"
    }
}]);