// Ce script traite les informations à envoyer vers le serveur

//Création d'un module
var Connexion = angular.module('Connexion',[]);

//Fonction de Controle pour effectuer les fonctions
//que le serveur traitera par la suite
function mainController($scope,$http){
    //Création d'un récupératuer de données
    $scope.formData = {};
    //Création d'une valeur contenant la réponse de la verif
    $scope.reponse = {};
    //Récupération des données du serveur
    $http.get('/api/lalistedeco')
        //En cas de réussite
        .success(function(data){
            //On affecte les éléments de la liste des utilisateurs à data
            $scope.lalistedeco = data;
        })
        .error(function(data){
            //Sinon on affiche une erreur
            console.log('Error:' + 'data');
        });

    //Fonction de connection
    $scope.Login = function(){
        $http.post('/login',$scope.formData)
            .success(function(data){
                console.log("Connection Réussie !");
                name = $scope.formData.user;
                console.log(name);
                $scope.reponse.text = 'Bonjour ' + name + ' ! Redirection sur votre espace en cours ...';
                setCookie('user', $scope.formData.user, 0.01);
                $scope.formData = {};
                setTimeout(function(){
                    window.location.replace('/user/'+name);
                }, 2000);
            })
            .error(function(data){
                console.log('Error : '+ data);
            });
    };
    //Fonction de suppression d'un élément de la liste
    // $scope.deleteTaskOne = function(id){
    //     //Pour cela on utilise la fonction delete de js
    //     // en précisant l'id de l'élément à supprimer
    //     console.log("Element à supprimer : "+ id);

    //     $http.delete('/DeleteTaskOne/'+id)
    //         .success(function(maj){
    //             console.log("Element Supprimé");
    //             $scope.laliste = maj;
    //             console.log(maj);
    //         })
    //         .error(function(data){
    //             console.log('Error : '+ data);
    //         });
    // };
}
function setCookie(cookienom, cookievaleur, expirationdays) {
    var date = new Date();
    date.setTime(date.getTime() + (expirationdays * 24 * 3600 * 1000));
    var expires = "expires="+date.toUTCString();
    document.cookie = cookienom + "=" + cookievaleur + ";" + expires + ";path=/";
    console.log('Un cookie pour toi !');
  }
