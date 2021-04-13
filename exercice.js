
/* il faut resoudre se probleme :
Jean va à la boulangerie de son quartier. Il achète 3 baguettes à 4 € l’une et un gâteau à 2,64 €. Il paie avec un billet de 20 €.

combien d'argent reste a jean ? 
(oui j'ai pris un probleme de math que j'ai trouvé parce que j'ai pas d'inspit lol 😅 */



//Exercice 1 :

/*var baguette = 4;
var gateau = 2.64;
var billet = 20;
var reste = billet - (baguette*3 + gateau);

console.log("le reste est de : " , reste.toFixed(2));*/
// toFixed permet d'ajouter le nombre de chiffres après la virgule



// Exercire 2 : 

/*jean (encore lui) est le gerant d'une boite de nuit ,

seul les moin de 18 ans peuvent entrer (oui c bisarre) si quelqun qui a plus de 18 ans essai de rentrer afficher lui "vous etes trop vieux" 
sinon un message affiche un message de "bienvenu",

parcontre 2 adulte ont le droit d'entrer dans cette boite , c'est jean et son amis pierrot,
quand il rentreront alor il faudra marquer "bienvenue patron"

parcontre elisa et julie n'ont pas le droit d'entrer peux importe leur ages 
si elle essai d'entrer afficher leur "interdit pour vous "


var age = 19;
var prenom = "pierrot";

if (Number.isInteger(age) === true){

    if (prenom === "jean" || prenom === "pierrot"){
        console.log("bienvenu patron");
    }else if ( prenom === "julie" || prenom === "elisa"){
        console.log("degage");
    }

    if (age >= 0 && age <= 18){
        console.log("la fleur de l'age, bienvenu");
    }else if(age<0){
        console.log("ballec");    
    }else{
        console.log("t'es trop vieux mon coco");
    }
    
}else{
    console.log("tu me prends pour qui? oh!");
}*/




/*Déclarer une variable budget qui contient la somme de 1 553,89 €. Déclarer une variable achats qui contient la somme de 1 554,76 €. Afficher si le budget permet de payer les achats. 

Déclarer une variable age qui contient la valeur de type integer de votre choix. Réaliser une condition pour afficher si la personne est mineure ou majeure. 


var budget = 1553.89;
var achat = 1554.76;

    if (budget>achat){
        console.log("vous avez assez");
    }else{
        console.log("vous n'avez pas assez");
    }*/



// _______________________________________________________________

// les boucles avec "while"

/*var punition = "je ne ferai plus de betise";

var i = 0;

while( i<100 ){

    console.log("bonjour");
    console.log(i);
    i++;

}*/




/*En utilisant la boucle while, afficher tous les codes postaux possibles pour le département 13.

genre de 13000 à 13999*/

/*var codePostaux = "depatement 13"

var i = 13000;

while ( i <= 13999 ){

    console.log("les departements");
    console.log(i);
    i++;
}


_________________________________________________________________________

En utilisant la boucle for, afficher la table de multiplication du chiffre 5.
exemple affiche moi : "5x1 = 5", dans la console jusqu'a 10;

//var nombre = 10;

for (var i = 1; i < 10; i++){

    console.log(" 5 x " + i + " = " + 5*i);
}*/

//_________________________________________________________________________

/*
faite moi une function qui va additionner 2 chiffre qu'ont passera en paramettre quand ont l'appel
exemple 
addition(5,6);
il doit alor m'afficher le résultat
*/

function monAddition(alors,pourquoi){
    
    console.log( pourquoi * alors );

}

monAddition(6,8);