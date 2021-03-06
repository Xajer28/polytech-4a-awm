// Ce script traite les informations à envoyer vers le serveur

//Création d'un module
var ListeaFaire = angular.module('ListeaFaire',[]);

//Fonction de Controle pour effectuer les fonctions
//que le serveur traitera par la suite
function mainController($scope,$http){
    //Création d'un récupératuer de données
    $scope.formData = {};
    //Récupération des données du serveur
    $http.get('/api/laliste')
        //En cas de réussite
        .success(function(data){
            //On affecte les éléments de la liste à data
            $scope.laliste = data;
        })
        .error(function(data){
            //Sinon on affiche une erreur
            console.log('Error:' + 'data');
        });

    //Fonction d'ajout d'un élément dans une liste
    $scope.createTodo = function(){
        //Envoi de l'élément dans le tableau de données
        console.log("Nom de la tache : "+$scope.formData.text);
        $http.post('/createTask',$scope.formData)
            .success(function(data){
                $scope.formData = {};
                $scope.laliste = data;
                console.log(data);
            })
            .error(function(data){
                console.log('Error:'+data);
            })
    };

    //Fonction de suppression d'un élément de la liste
    $scope.deleteTaskOne = function(id){
        //Pour cela on utilise la fonction delete de js
        // en précisant l'id de l'élément à supprimer
        console.log("Element à supprimer : "+ id);

        $http.delete('/DeleteTaskOne/'+id)
            .success(function(maj){
                console.log("Element Supprimé");
                $scope.laliste = maj;
                console.log(maj);
            })
            .error(function(data){
                console.log('Error : '+ data);
            });
    };

    //Fonction de mise à jour d'un élément de la liste
    $scope.Task_Done = function(id){
        //Pour cela on utilise la fonction delete de js
        // en précisant l'id de l'élément à supprimer
        console.log("Element à mettre à jour : "+ id);

        $http.post('/Task_Done/'+id)
            .success(function(maj){
                console.log("Element Mis à jour");
                $scope.laliste = maj;
                console.log(maj);
            })
            .error(function(data){
                console.log('Error : '+ data);
            });
    };







}
