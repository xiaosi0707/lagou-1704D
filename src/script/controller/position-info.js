'use strict';
angular.module('app').controller('positionInfo', function ($scope, $http, $state, $cookies) {
    var id = $state.params.id;
    var arrSend = [];
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-detail').then(function (res) {

        $scope.positionInfo = res.data[id];
        if ($cookies.get('id')) $scope.isLogin = true;
    });
    $scope.isSend = false;

    // 容错处理
    if ($cookies.get('isSend')) arrSend = $cookies.get('isSend').split(',');

    //判断当前职位是否已经投递过
    angular.forEach(arrSend, function (positionId) {
        if (positionId === id) { $scope.isSend = true; }
    });

    // 简历投递
    $scope.send = function () {
        arrSend.push(id);
        $cookies.put("isSend",arrSend);
        $scope.isSend = true;
        alert('投递成功');
    }
});