var chiffre= document.getElementsByClassName("chiffre");
var calcul=document.getElementById("resultat");
var total="";
var temp=[];
var reset;


function reset() {
window.location.reload();
}

function retour() {
    chiffre = chiffre.substring(1);
}

  for (var i = 0; i < chiffre.length; i++) {
    chiffre[i].onclick = function () {

      if (this.value == "=") {
        temp.push(eval(total));
        console.log(temp);
        calcul.innerHTML= temp[temp.length -1];


      }
      else{
      total += this.value;
      calcul.innerHTML = total;
    }
  }
}
