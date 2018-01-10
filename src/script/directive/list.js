'use strict';

angular.module('app').directive('appList', function () {
    return {
        restrict: 'EA',
        replace: 'true',
        templateUrl: 'view/template/list.html',
        scope: {
            data: '=',
            filterData: '='
        }
    }
});