'use strict';

angular.module('app').filter('filterList', function () {
    return function (list, obj) {

        var result = [];

        angular.forEach(list, function (item) {
            var flag = true;
            for(var e in obj) {
                if(item[e] !== obj[e]) {
                    flag = false;
                }
            }
            if (flag) {
                result.push(item);
            }
        });
        return result;

        // 单项筛选
        // var result = [];
        // angular.forEach(list, function (item) {
        //     if (item.cityId === id) {
        //         result.push(item);
        //     }  else if (item.salaryId === id) {
        //         result.push(item);
        //     } else if (item.scaleId === id) {
        //         result.push(item);
        //     }
        // });
        // if (!id) {
        //     return list;
        // } else {
        //     return result;
        // }

    }
})