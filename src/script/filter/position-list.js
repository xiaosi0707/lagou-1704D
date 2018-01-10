'use strict';

angular.module('app').filter('filterList', function () {
    return function (obj, id) {
        var result = [];
        angular.forEach(obj, function (item) {
            if (item.cityId === id) {
                result.push(item);
            }  else if (item.salaryId === id) {
                result.push(item);
            } else if (item.scaleId === id) {
                result.push(item);
            }
        });
        if (!id) {
            return obj;
        } else {
            return result;
        }

    }
})