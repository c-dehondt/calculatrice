var chiffre= document.getElementsByClassName("chiffre");
var calcul=document.getElementById("resultat");
var total="";
var temp=[];
var reset;

function reset() {
window.location.reload();
}

function retour() {
    total= total.substring(0, total.length -1);
    calcul.innerHTML=total ;
}

  for (let i = 0; i < chiffre.length; i++) {
    chiffre[i].onclick = function () {

      if (this.textContent == "=") {
        temp.push(eval(total));
        calcul.innerHTML= temp[temp.length -1];
        total = temp[temp.length -1];
      }
      else{
        total += this.textContent;
        calcul.innerHTML = total;
    }
  }
}
