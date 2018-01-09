
'use strict';

angular.module('app').config(['$validationProvider', function ($validationProvider) {
    var expression = {
        required: function (val) {
            return !!val;
        },
        phone:  /^1(3|4|5|7|8)\d{9}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/,
        code: /^\d{6}$/
    };
    var defaultMsg = {
        required: {
            success: '',
            error: '不能为空'
        },
        phone: {
            success: '',
            error: '请输入正确的手机号码'
        },
        password: {
            success: '',
            error: '6-18位字母数字组合'
        },
        code: {
            success: '',
            error: '6位数字'
        }
    }
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);