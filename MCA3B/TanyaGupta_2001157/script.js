angular.module('app', []);
angular.module('app').controller('Sctrl', function($scope) {
    $scope.employees = [
        { id: 1, name: 'abc', dept: 'testing' },
        { id: 2, name: 'xyz', dept: 'development' },
    ];

    $scope.cloneItem = function(employee) {
        $scope.employees.push(angular.copy(employee));
    }

})