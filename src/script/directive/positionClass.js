"use strict";
angular.module("app").directive("appPositionClass",[function(){
    return {
        restrict:"A",
        replce:true,
        templateUrl:"view/template/positionClass.html",
        scope:{
            "comp":"=",
        },
        link:function($scope){
            $scope.isActive = 0;
            console.log($scope.comp);
            // $scope.positionLists = $scope.company.positionClass[0].positionList;
            $scope.positionClassCurrent = function(index){
                console.log( $scope.comp.positionClass[index]);
                $scope.positionLists = $scope.comp.positionClass[index].positionList;
                $scope.isActive = index;
            }
        }
    }
}]);