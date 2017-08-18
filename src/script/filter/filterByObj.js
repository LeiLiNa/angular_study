"use strict";
angular.module("app").filter("filterByObj",[function(){
    //返回值为一个函数
    return function(list,obj){
        var result = [];
        angular.forEach(list,function(item){
            var isEqual = true;
            for(var e in obj){
                if(item[e]!==obj[e]){
                    isEqual = false;
                }
            }
            if(isEqual){
                result.push(item);
            }
        })
        return result;

    }
}]);
