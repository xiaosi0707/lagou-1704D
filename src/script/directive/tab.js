angular.module('app').directive('appTab', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl: 'view/template/tab.html',
       scope: {
           data: '='
       },
       link: function () {

       }
       // link: function (scope) {
       //     scope.isActive = 0;
       //     scope.tabActive = function (index, item) {
       //         scope.isActive = index;
       //         console.log(item);
       //     }
       // }
   }
});