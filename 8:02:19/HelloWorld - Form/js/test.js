
document.addEventListener("DOMContentLoaded", function(event){
  console.log("Dom loaded");
});

function fctHello(){
    var name = document.getElementById("inName");
    var strToshow = 'Hello World';

    if(name.value){
        strToshow += " " + name.value + "!";
    }

    alert(strToshow);
}

//Fonction pour Formulaire
function raz(form) {
  // clearing inputs
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i<inputs.length; i++) {
    switch (inputs[i].type) {
      // case 'hidden':
      case 'text':
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


function surligne(champ, erreur){
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
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


function verif(){

  var ok=true;

  //Boutons Radios
  if(!(document.getElementsByName("sexe").selected)){
    ok=false;
    alert("Le choix du sexe n'a pas été sélectionné");
  }

  //Vérification des champs
  if(!(veriftxtnom()))
  {
    ok = false;
    alert("Veuillez resaisir le nom");
  }
  if (!(veriftxtprenom())){
    ok=false;
    alert("Veuillez resaisir le prenom");
  }

  //Langue
  if(document.getElementById("lang").value=="default"){
    ok =false;
    alert("Veuillez choisir une langue");
  } 

  //RGPD
  if(!(document.getElementById("AcceptRGPD").checked)){
    ok =false;
    alert("Veuillez cocher la case RGPD");
  }

  //Vérification Générale
  if(ok){
    alert("Félicitations");
  }


}