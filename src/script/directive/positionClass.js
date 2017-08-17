"use strict";
angular.module("app").directive("appPositionClass", [function () {
    return {
        restrict: "A",
        replace: true,
        templateUrl: "view/template/positionClass.html",
        scope: {
            "comp":"="
        },
        link: function ($scope) {
            $scope.isActive = 0;
            $scope.positionClassCurrent = function(index){
                $scope.positionLists = $scope.comp.positionClass[index].positionList;
                $scope.isActive = index;
            };
            //解决异步加载问题,尽量少用watch，会影响性能
            $scope.$watch("comp",function(newValue){
                if(newValue){
                    $scope.positionClassCurrent(0);
                }
            })
        }
    }
}]);