"use strict";angular.module("app",["ui.router"]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("main",{url:"/main",templateUrl:"view/main.html",controller:"mainCtrl"}).state("position",{url:"/position/:id",templateUrl:"view/position.html",controller:"positionCtrl"}).state("company",{url:"/company/:id",templateUrl:"view/company.html",controller:"companyCtrl"}),e.otherwise("main")}]),angular.module("app").controller("companyCtrl",["$scope",function(t){}]),angular.module("app").controller("mainCtrl",["$scope","$http",function(t,e){e.get("/data/positionList.json").then(function(e){t.list=e.data}).catch()}]),angular.module("app").controller("positionCtrl",["$scope",function(t){}]),angular.module("app").directive("appFoot",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/foot.html"}}]),angular.module("app").directive("appHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/head.html"}}]),angular.module("app").directive("appPositionClass",[function(){return{restrict:"A",replce:!0,templateUrl:"view/template/positionClass.html"}}]),angular.module("app").directive("appCompany",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionCompany.html"}}]),angular.module("app").directive("appHeadBar",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionHead.html",scope:{text:"@"},link:function(t){t.back=function(){window.history.back()}}}}]),angular.module("app").directive("appPositionList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionlist.html",scope:{data:"="}}}]),angular.module("app").directive("appPositionInfo",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionInfo.html",scope:{isActive:"="},link:function(t){t.imgPath=t.isActive?"image/star-active.png":"image/star.png"}}}]);