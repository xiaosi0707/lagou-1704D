'use strict';
angular.module('app').controller('positionInfo', function ($scope, $http, $state, $cookies) {
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-detail').then(function (res) {
        var id = $state.params.id;
        $scope.positionInfo = res.data[id];
        console.log($cookies.get('id'));
        if ($cookies.get('id')) $scope.isLogin = true;
    });
    $scope.isSend = false;
    $scope.send = function () {
        alert('投递成功');
        $scope.isSend = true;
    }
});