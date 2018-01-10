'use strict';
angular.module('app').controller('Favorite', function ($scope, $http) {
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/favorite').then(function (res) {
        $scope.favoriteList = res.data;
    })
});