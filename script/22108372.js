
/*diapo page d'acceuil */

let diapo = 0;

function diapositive() {
    let cpt;
    let acceuil_diapo = document.getElementsByClassName("element");

    if (diapo >= acceuil_diapo.length) {
        diapo= 0;
    }

    if (diapo < 0) {
        diapo = acceuil_diapo.length - 1;
    }

    for (cpt = 0; cpt < acceuil_diapo.length; cpt++) {
        acceuil_diapo[cpt].style.display = "none";
    }
    
    acceuil_diapo[diapo].style.display = "block";
    diapo+=1;
    setTimeout(diapositive,2000);
}



function displaySlide() {
    let i;
    let slides = document.getElementsByClassName("element");

    if (sIndex >= slides.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sIndex].style.display = "block";
}
/*Zone code jeu conquerent de la galaxie */
let pos_y=0;
function moveup(){
    let vaiseau=document.getElementByIvd("fusee");
        pos_y++;
        vaiseau.style.top=pos_y+"px";
    }

/* Zone code jeu chasse piece*/


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let cpt=0;
let poisition_x=0;
function coins() {
        let start ;
        start=1;
        return start;
         
}
function deplacement(){
    
    if (coins()==1){
        let vitesse;
        vitesse=gestion_joueur();
setInterval(move,vitesse); 
} 
}
let score=0;
function gestion_joueur(){
    let euros = document.getElementById("img_piece");
    
let time;
    
    score++;

    if (score==1){
        alert("niveau 1");
        time=2000;

    }
    else if (score==6){
        alert("niveau 2");
        time=1500;
    }
    else if(score==9){
        alert("niveau 3");
        time=1000;
    }
    else if(score==12){
        alert("niveau impossible");
        time=500;
    }
    else if(sore>12 && score%3==0){
        alert("Niveau monstre");
    }
    
setInterval(move,time); 
}   
    
    

function move() {
    let elem = document.getElementById("piece");
    let aleatoire;
    poisition_x=getRandomInt(80)+"%";
    poisition_y=getRandomInt(400)+"px";
    aleatoire=getRandomInt(2);
    if (aleatoire==0){
        elem.style.left=poisition_x;
    }
    else{
        elem.style.top=poisition_y;
    }
   
}

/*Zone don*/
var resf;
function scorefinal(){
    var n1=getRandomInt(20);
    var n2=getRandomInt(20);
    var res = document.getElementById("total_score");
    resf=n1*n2;
    res.value=n1+"*"+n2;
    return resf;
    
}
let euros=0;
function valider(){
var deviner=document.getElementById("deviner")

if (parseInt(deviner.value)==resf){
    euros++;
    alert("bravo, vous gagnez :"+euros+"euros");
}
else{
    alert("Vous avez perdu");
}

}
/* Zone code jeu flappy ansoumane*/

/*zone script page souvenir*/
let sIndex = 0;


function showImage(n) {
    sIndex = n;
    displaySlide();
}

function displaySlide() {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (sIndex >= slides.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sIndex].style.display = "block";
}
/*Zone formulaire  */
let validation;
function formulaire(){
    validation=0;
    let identifiant=document.getElementById("txt_Identifiant");
    let expression_identifiant=/^([0-9a-zA-Z_]){6,20}$/;
    let valeur_Identifian=identifiant.value;
    if (expression_identifiant.test(valeur_Identifian)){
        validation++;
        }
    let prenom=document.getElementById("txt_Prenom");
    if(prenom.value!=""){
        validation++;
    }
    let nom=document.getElementById("txt_Nom");
    if(nom.value!=""){
        validation++;
        
    }
    let tel=document.getElementById("txt_Numero");
    if(tel.value!=""){
        validation++;
        
    }
    let Email=document.getElementById("txt_Email");
    let expression_mail=/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if (expression_mail.test(Email.value)){
        validation++;
    }
    let poste=document.getElementById("txt_Poste");
    let expression_poste=/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/
    if (expression_poste.test(poste.value)){
        validation++;
    }
    if (validation==6){
        alert("IDENTIFIANT : "+identifiant.value+" PRENOM: "+prenom.value+" NOM: "+nom.value+" telephone: "+tel.value+" Email: "+Email.value+" CP: "+poste.value);
    }

}