"use strict";
angular.module("app").config(["$validationProvider",function($validationProvider){
    //校验哪些表单，以及校验规则
    var expression = {
         "phone":/^1[\d]{10}$/,
        "password":function(value){
            var str = value + "";
             return str.length > 5;
        },
        "code":function(value){
            return value!=="";
        },
        "tradePassword":function(value){
            var str = value + "";
            return str.length > 5;
        }

    },
     defaultMsg = {
        "phone":{
            success:"",
            error:"必须输入是11位手机号"
        },
        "password":{
            success:"",
            error:"请设置六位以上的密码"
        },
         "code":{
            success:"",
             error:"短信验证码不为空"
         },
         "tradePassword":{
             success:"",
             error:"请设置六位以上的密码"
         },
    };

    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);


}]);