"use strict";
angular.module("app").controller("searchCtrl",["$scope","$http","dict","filterByObj",function($scope,$http,dict,filterByObj){
    $scope.sheet = {};
    $scope.search = function(){
        $http.get("/data/positionList.json").then(function(res){
            $scope.positionList = res.data;
        });
    }
    $scope.search();
    $scope.tabList = [{
        "id": "city",
        "name": "城市"
    }, {
        "id": "salary",
        "name": "薪酬"
    }, {
        "id": "scale",
        "name": "公司规模"
    }];
    var tab = '';  //目的是为了将当前点击tab id保存，然后在循环tablist的时候与元素的id进行比较，最终达到要替换tab中的那么值，使得
    //sheet列表选中的内容在tab上显示
    $scope.tClick = function(id,name){
        tab = id;
        $scope.sheet.list = dict[id];
        $scope.sheet.visible = true;
    };
    $scope.sheetSelect = function(id,name){
        //如果id存在，将此时的name值赋值给tabname，如果不存在则还是显示原来的那么值
        if(id){
            angular.forEach($scope.tabList,function(item){
                if(item.id === tab ){
                    item.name = name;
                }
            })
        }else{
            angular.forEach($scope.tabList,function(item){
                if(item.id === tab){
                    switch(item.id){
                        case "city":
                            item.name = "城市";
                            break;
                        case "salary":
                            item.name = "薪酬";
                            break;
                        case "scale":
                            item.name = "公司规模";
                            break;
                    }
                }
            })
        }
    };

}]);