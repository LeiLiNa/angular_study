"use strict";
angular.module("app",["ui.router"]);//引入路由

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
"use strict";
angular.module("app").controller("mainCtrl",["$scope",function($scope){
    $scope.list=[{
        id:1,
        name:"销售",
        imageSrc:"image/1.jpg",
        city:"上海",
        industry:"互联网",
        time:"2016-6-01 11:05"
    },{
        id:2,
        name:"工程师",
        imageSrc:"image/2.jpg",
        city:"上海",
        industry:"互联网",
        time:"2016-6-01 11:05"
    },{
        id:3,
        name:"销售",
        imageSrc:"image/1.jpg",
        city:"上海",
        industry:"互联网",
        time:"2016-6-01 11:05"
    }]
}])
//详情页底部
angular.module("app").directive("appFoot",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/foot.html"
    }
}])
"use strict";
//指令的作用是把我们自定义的语义化标签替换成浏览器能够认识的HTML标签
angular.module("app").directive("appHead",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/head.html"
    }
}]);
"use strict";
    angular.module("app").directive("appPositionList",[function(){
        return {
            restrict:"A",
            replace:true,
            templateUrl:"view/template/positionlist.html",
            scope:{
                data:"="
            }
        }
    }]);