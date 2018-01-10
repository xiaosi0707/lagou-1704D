angular.module('app').directive('appTab', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl: 'view/template/tab.html',
       scope: {
           data: '=',
           cFn: '&'
       },
       link: function (scope) {
           scope.isActive = null;
            scope.dClick = function (item, index) {
                item.index = index;
                scope.cFn(item);
                scope.isActive = index;
            };

       }
   }
});