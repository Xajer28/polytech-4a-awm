
//Voir dans /test2 l'index associé

document.addEventListener("DOMContentLoaded", function(event){
  console.log("Dom loaded");
});

function showHello(){
    alert("Hello World !");
}

function fctHello(){
    var name = document.getElementById("inName");
    var strToshow = 'Hello World';

    if(name.value){
        strToshow += " " + name.value + "!";
    }

    alert(strToshow);
}

function changeImage(element)
{
  var x = document.getElementById("img");
  
  var v = x.getAttribute("src");
  if(v == "img/lampon.png"){
    v = "img/lampoff.png";
    document.getElementById("btSwitch").innerHTML = "Eteindre";
  }
  else{
    v = "img/lampon.png";
    document.getElementById("btSwitch").innerHTML = "Eteindre";
    }
  x.setAttribute("src", v);	
}

//Mail : manoel.deligny@gmail.com
//---------------------------------------------------
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
  return false;
}


function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function veriftxt(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function submit(){

}