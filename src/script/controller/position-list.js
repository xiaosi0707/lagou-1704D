'use strict';
angular.module('app').controller('positionList', function ($scope, $http) {
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list').then(function (res) {
        $scope.positionList = res.data;
    });
});