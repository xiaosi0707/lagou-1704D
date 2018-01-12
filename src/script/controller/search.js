'use strict';
angular.module('app').controller('Search', function ($scope, $http, $cookies, $state) {

    var sheetData = {};
    $scope.tabList = [
        {
            id: 'city',
            name: '城市'
        },
        {
            id: 'salary',
            name: '薪资'
        },
        {
            id: 'scale',
            name: '公司规模'
        }
    ];
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list').then(function (res) {
        $scope.positionList = res.data;

    });
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/city').then(function (res) {
        sheetData.city = res.data;
    });
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/salary').then(function (res) {
        sheetData.salary = res.data;
    });
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/scale').then(function (res) {
        sheetData.scale = res.data;
    });
    $scope.isShow = false;
    var tabIndex = 0;   // 选中状态
    $scope.cClick = function (id, name, index) {
        $scope.sheetData = sheetData[id];
        $scope.isShow = true;
        tabIndex = index;
    };

    $scope.filterArgs = {};
    $scope.sClick = function (obj) {
        // filter参数收集
        if (obj.id){
            $scope.filterArgs[obj.idName] = obj.id;
        }else {

            delete $scope.filterArgs[obj.idName];
            console.log($scope.filterArgs[obj.idName]);
        }

        $scope.tabList[tabIndex].name = obj.name;   // 修改当前选中的值内容
    }
});