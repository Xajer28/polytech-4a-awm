var ListeaFaire = angular.module('ListeaFaire',[]);

function mainController($scope,$http){
    $scope.formData = {};
    $http.get('/api/laliste')
        .success(function(data){
            $scope.laliste = data;
            console.log(data);
        })
        .error(function(data){
            console.log('Error:' + 'data');
        });
    $scope.createTodo = function(){
        $http.post('api/laliste',$scope.formData)
            .success(function(data){
                $scope.formData = {};
                $scope.laliste = data;
                console.log(data);
            })
            .error(function(data){
                console.log('Error:'+data);
            });
    };
    $scope.deleteTodo = function(id){
        $http.deleteTodo('/api/laliste'+id)
        .success(function(data){
            $scope.laliste = data;
            console.log(data);
        })
        .error(function(data){
            console.log('Error : '+ data);
        });
    };
}