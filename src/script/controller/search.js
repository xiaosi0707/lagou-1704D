'use strict';
angular.module('app').controller('Search', function ($scope, $http, $cookies, $state) {
    $scope.arrTab = ['城市', '薪资', '公司规模'];
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list').then(function (res) {
        $scope.positionList = res.data;
    });
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/city').then(function (res) {
       $scope.city = res.data;
    });
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/salary').then(function (res) {
        $scope.salary = res.data;
    });
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/scale').then(function (res) {
        $scope.scale = res.data;
    });

});