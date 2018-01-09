'use strict';
angular.module('app').controller('positionInfo', function ($scope, $http, $state) {
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-detail').then(function (res) {
        var id = $state.params.id;
        $scope.positionInfo = res.data[id];
        console.log($scope.positionInfo);
    });
});