'use strict';
angular.module('app').controller('myPost', function ($scope, $http) {
    $scope.tabList = [
        {
            id: 'all',
            name: '全部'
        },
        {
            id: 'invitation',
            name: '面试邀请'
        },
        {
            id: 'fail',
            name: '不合适'
        }
    ];
    var arr = [];
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/my-post').then(function (res) {
        $scope.myPostList = arr = res.data;
    });
    $scope.myPostList = arr;
    $scope.cClick = function (id, name, index) {
        $scope.myPostList = [];
        switch(id) {
            case 'invitation':
                angular.forEach(arr, function (item) {
                    if (item.state === '1') $scope.myPostList.push(item);
                });
                break;
            case 'fail':
                angular.forEach(arr, function (item) {
                    if (item.state === '-1') $scope.myPostList.push(item);
                });
                break;
            default:
                $scope.myPostList = arr;
                break;
        }
    };
});