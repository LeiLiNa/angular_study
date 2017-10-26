"use strict";
angular.module("app").config(["$provide",function($provide){
    $provide.decorator("$http",["$delegate","$q",function($delegate,$q){
        //修改$http的目的是将post请求转为get请求.同时将请求的结果传回
        var def = $q.defer();
        var get = $delegate.get;
        $delegate.post = function(url,data,config){
            get(url).then(function(reps){
                return def.resolve(reps);
            },function(msg){
                return def.reject(msg);
            });

            return {
                success:function(cb){
                    def.promise.then(cb);
                },
                error:function(cb){
                    def.promise.then(null,cb);
                }
            }
        };
        return $delegate;
    }])
}]);