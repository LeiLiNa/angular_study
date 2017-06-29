//详情页底部
angular.module("app").directive("appFoot",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/foot.html"
    }
}])