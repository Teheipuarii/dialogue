// int (integer) = entier de 0 à l'infini
// string = une chaîne de caractères (toutjours entouré de guillemets)
// bool = booléans true / false

// "if else" ou "else if"
// dans une fonction // signifie "ou" et && signifie "et"




/*var heure = 0<=24;
var heure = prompt("tappez une heure")

if (heure <= 12){
    console.log( "il est " + heure + " " + "heures" + " " + "du matin");
}else if( heure >= 12){
    console.log( "il est " + heure + " " + "heures" + " "+ "de l'après-midi");
}else if(heure > 24){
    console.log("t'es un bouffon");
}*/

var heure = 13;

// verifier si la variablr est un int ou pas
if(Number.isInteger(heure) === true ){

        if(heure >= 0 && heure < 24){

            if(heure >= 6 && heure <= 12){
                console.log("c'est l'heure de se reveiller");
            }else if(heure > 12 && heure <= 18){
                console.log("c'est l'aprem");
            }else{
                console.log("c'est la nuit");
            }

        }else{
            console.log("l'heure n'existe pas");
        }

}else{
    console.log("oh rentre une date tu feinte !");
}
