function pogadanje(){
  
  const randomBroj = Math.floor(Math.random()*10 + 1);
  
  let unesenaVrijednost;

  let brojac = 1;
  console.log(randomBroj);
  do{

    unesenaVrijednost = prompt("Pokušaj pogoditi broj između 1 i 10");

    if (unesenaVrijednost < randomBroj) {
      alert("Zamisljeni broj je veci!");
      brojac++;
    } else if (unesenaVrijednost > randomBroj) { 
      alert("Zamisljeni broj je manji!");
      brojac++;
    }

  }while(unesenaVrijednost != randomBroj);

  alert("Cestitam! Pogodio si iz "+brojac+". pokusaja!");


}