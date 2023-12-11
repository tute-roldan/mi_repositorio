let saludo = prompt("¡Hola! Bienvenido a PERAS Indumentaria Creativa ¿Cómo es tu nombre?");
alert("¡Hola" + " " + saludo + "!" + " " + "Sabías que todos los meses hay promociones según los signos zodiacales del año");

let signo = prompt("¿Cual es tu signo zodiacal?");
while(signo!= true ){
    if(signo === "aries"){
        alert( "Eres signo de fuego, eres entusiasta y pasional");
        break;}
    if(signo === "tauro"){
        alert( "Eres signo de tierra, eres eres practico y abundante");
        break;
    }
    if(signo === "geminis"){
        alert( "Eres signo de aire , eres inteligente y amas la curiosidad");
        break;
    }
    if(signo === "cancer"){
        alert( "Eres signo de agua, eres fuerte y de pura emoción");
        break;
    }
    if(signo === "leo"){
        alert( "Eres signo de fuego, eres entusiasta y pasional");
        break;
    }
    if(signo === "virgo"){
        alert( "Eres signo de tierra , eres practico y abundante");
        break;
    }
    if(signo === "libra"){
        alert( "Eres signo de aire, eres inteligente y amas la curiosidad");
        break;
    }
    if(signo === "escorpio"){
        alert( "Eres signo de agua, eres fuerte y de pura emoción");
        break;
    }
    if(signo === "sagitario"){
        alert( "Eres signo de fuego, eres entusiasta y pasional");
        break;
    }
    if(signo === "capricornio"){
        alert( "Eres signo de tierra , eres practico y abundante");
        break;
    }
    if(signo === "acuario"){
        alert( "Eres signo de aire, eres inteligente y amas la curiosidad");
        break;
    }
    if(signo === "piscis"){
        alert( "Eres signo de agua, eres fuerte y de pura emoción");
        break;
    }
    else{
        alert("volve a ingresar tu signo zodiacal")   
        signo = prompt("¿Cual es tu signo zodiacal?");   

    }
    
   }


    


let edad = Number(prompt("¿Cuantos años tenes?"));
if (edad <= "17"){
 }
else{
    let email = prompt("Dejanos tu e-mail y te enviamos las promociones segun los signos zodiacales")
    
    }

    alert("Bienvenidos a PERAS INUDMENTARIA CREATIVA")    