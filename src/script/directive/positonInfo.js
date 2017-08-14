"use strict";
angular.module("app").directive("appPositionInfo",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/positionInfo.html",
        scope:{
            "isActive":"=",
            "isLogin":"=",
            "pos":"="  //向父作用域暴露一个变量，既不会影响本作用域，且可以继承父作用域变量，便于操作，方便管理代码
        },
        link:function($scope){
            $scope.imgPath = $scope.isActive?"image/star-active.png":"image/star.png";
        }

    }
}]);