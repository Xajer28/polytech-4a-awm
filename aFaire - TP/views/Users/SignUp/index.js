var signup = angular.module('Inscription',[]);

document.addEventListener("DOMContentLoaded", function(){
  console.log("Dom loaded");
});


function mainController($scope,$http){
  $scope.formData = {};

  //Fonction d'ajout d'un nouveau Compte dans une liste
  $scope.createAccount = function(){
    console.log("hello :)");
    if (verif()){
      //Envoi de l'élément dans le tableau de données
      console.log($scope.formData);
      $http.post('/createAccount',$scope.formData)
          .success(function(data){
              $scope.formData = {};
              console.log(data);
          })
          .error(function(data){
              console.log('Error:'+data);
          })
      };
    }

}




//Fonctions pour Formulaire
function raz(form) {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i<inputs.length; i++) {
    switch (inputs[i].type) {
      case 'text':
      case 'password':
          inputs[i].value = '';
          break;
      case 'radio':
      case 'checkbox':
          inputs[i].checked = false;
      }
  }
  var sel = document.getElementById('lang');
  var opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            opt.selected =false;
            opt.checked = "default";
        }
    }
  return false;
}

function surligne(champ, erreur) {
  if (erreur){
    champ.classList.add("ErrorTextBox");
  }else{
    champ.classList.remove("ErrorTextBox");
  }
}

function veriftxtnom(){
  var ok;
  var champ = document.getElementById("txtNom");
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      ok=false;
   }
   else
   {
      surligne(champ, false);
      ok= true;
   }
   return ok;
}

function veriftxtpseudo(){
  var ok;
  var champ = document.getElementById("txtPseudo");
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      ok=false;
   }
   else
   {
      surligne(champ, false);
      ok= true;
   }
   return ok;
}

function veriftxtprenom(){
  var ok;
  var champ = document.getElementById("txtPrenom");
  if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      ok=false;
   }
  else
   {
      surligne(champ, false);
      ok= true;
   }
  return ok;
}

function veriftxtpwd(){
  var ok;
  var champ1 = document.getElementById("password1");
  var champ2 = document.getElementById("password2");

  if(!(champ1.value===champ2.value)){
          surligne(champ1, true);
          surligne(champ2, true);
          ok=false;
    }
  else{
          surligne(champ1, false);
          surligne(champ2, false);
          ok= true;
  }

  if ((champ1.value.length<=1)||(champ2.value.length<=1)) {
    surligne(champ1, true);
    surligne(champ2, true);
    ok=false;
  }
  else {
          surligne(champ1, false);
          surligne(champ2, false);
          ok= true;
  }
  return ok;
}

function verif(){

  var ok=true;

  //Boutons Radios
  if(!(document.getElementById("radHom").checked || document.getElementById("radFem").checked)){
    ok=false;
    alert("Le choix du sexe n'a pas été sélectionné");
  }

  //Vérification des champs
  if(!(veriftxtnom())){
    ok = false;
    alert("Veuillez resaisir le nom");
  }

  if (!(veriftxtprenom())){
    ok=false;
    alert("Veuillez resaisir le prenom");
  }

  if (!(veriftxtpseudo())){
    ok=false;
    alert("Veuillez resaisir votre pseudo");
  }

  if (!(veriftxtpwd())){
    ok=false;
    alert("Veuillez resaisir votre mot de passe");
  }

  //Langue
  if(document.getElementById("lang").value=="default"){
    ok =false;
    alert("Veuillez choisir une langue");
  }

  //RGPD
  if(!(document.getElementById("AcceptRGPD").checked)){
    ok =false;
    alert("Veuillez accepter les règles de la RGPD");
  }

  //Vérification Générale
  if(ok){
    var sel = document.getElementById('lang');
    var opt = sel.options[sel.selectedIndex];

    switch(opt.value){
      case 'fr' : alert("Félicitations ! Vous venez de créer votre compte !"); break;
      case 'en' : alert("Congratulations ! You made your account !");break;
      case 'es' : alert("Felicitaciones! Acaba de crear su cuenta!"); break;
      case 'ja' : alert("おめでとうございます！ アカウントを作成しました。"); break;
    }
  }
  return ok
}
