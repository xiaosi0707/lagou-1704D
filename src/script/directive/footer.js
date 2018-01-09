angular.module('app').directive('appFooter', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl: 'view/template/footer.html'
   }
});