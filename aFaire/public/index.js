// Ce script traite les informations à envoyer vers le serveur

//Création d'un module
var ListeaFaire = angular.module('ListeaFaire',[]);

//Fonction de Controle pour effectuer les fonctions
//que le serveur traitera par la suite
function mainController($scope,$http){

    //Création de-'un récupératuer de données
    $scope.formData = {};
    //Récupération des données du serveur
    $http.get('/api/laliste')
        //En cas de réussite
        .success(function(data){
            //On affecte les éléments de la liste à data
            $scope.laliste = data;
            console.log(data);
        })
        .error(function(data){
            //Sinon on affiche une erreur
            console.log('Error:' + 'data');
        });

    //Fonction d'ajout d'un élément dans une liste
    $scope.createTodo = function(){
        //Envoi de l'élément dans le tableau de données
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

    //Fonction de suppression d'un élément de la liste
    $scope.deleteTodo = function(id){
        //Pour cela on utilise la fonction delete de js 
        // en précisant l'id de l'élément à supprimer
        $http.delete('/api/laliste/'+id)
        .success(function(data){
            $scope.laliste = data;
            console.log(data);
        })
        .error(function(data){
            console.log('Error : '+ data);
        });
    };
}