angular.module('app').directive('appHeaderBar', function () {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'view/template/header-bar.html',
        scope: {
            title: '@'
        },
        link: function (scope) {
            scope.back = function () {
                window.history.back();
            }
        }
    }
});