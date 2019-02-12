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