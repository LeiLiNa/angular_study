"use strict";
angular.module("app",["ui.router"]);//引入路由

"use strict";
angular.module("app").controller("companyCtrl",["$scope",function($scope){

}]);
"use strict";
angular.module("app").controller("mainCtrl",["$scope","$http",function($scope,$http){
    $http.get("/data/positionList.json").then(function(resp){
       // console.log(resp.data);
        $scope.list = resp.data;
    }).catch();
}]);
"use strict";
angular.module("app").controller("positionCtrl",["$scope","$http","$state",function($scope,$http,$state){
    $http.get("/data/position.json?id="+$state.params.id).then(function(res){
        $scope.isLogin = false;
        $scope.position = res.data;
        console.log(res);
    })

}]);
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
    }).state("company",{
        url:"/company/:id",
        templateUrl:"view/company.html",
        controller:"companyCtrl"
    });
    // 重定向url，如果访问的URL都不存在
    $urlRouterProvider.otherwise("main");
}]);




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
angular.module("app").directive("appPositionClass",[function(){
    return {
        restrict:"A",
        replce:true,
        templateUrl:"view/template/positionClass.html"
    }
}]);
"use strict";
angular.module("app").directive("appCompany",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/positionCompany.html"
    }
}]);
"use strict";
angular.module("app").directive("appHeadBar",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/positionHead.html",
        scope:{
            "text":"@"
        },
        link:function(scope){
            scope.back = function(){
                window.history.back();
            }
        }
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
"use strict";
angular.module("app").directive("appPositionInfo",[function(){
    return {
        restrict:"A",
        replace:true,
        templateUrl:"view/template/positionInfo.html",
        scope:{
            "isActive":"=",
            "isLogin":"="
        },
        link:function($scope){
            $scope.imgPath = $scope.isActive?"image/star-active.png":"image/star.png";
        }

    }
}]);