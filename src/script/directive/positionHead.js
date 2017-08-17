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
            };
            //$on 有两个参数，第一个参数是事件名称，第二个参数是处理函数
            //处理函数的参数也是有两个，一个是事件驱动，第二个是事件传递过来的数据，可以没有
            //可能广播的时候该事件还没有加载出来，以至于已经广播结束没有接受到，所以需要给父级的广播一个延迟
            // scope.$on("abc",function(event,data){
            //     console.log(event);
            //     console.log(data);
            // })
        }
    }
}]);