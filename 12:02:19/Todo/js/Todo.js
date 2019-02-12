var todoApp = angular.module("todoApp",[]);

todoApp.controller("TestCtrl",["$scope",function($scope){
    $scope.firstName = "test";

}]);


todoApp.controller("Test2Ctrl",["$scope",function($scope){
    $scope.firstName = "A weapon to surpass Metal Gear"
}])