
const papel1 = document.querySelector(".btn-primary"); 
const piedra1 = document.querySelector(".btn-secondary"); 
const tijeras1 = document.querySelector(".btn-third"); 


const resultado1 = document.querySelector("#resultado1")
const maquina1 = document.querySelector("#maquina1")
const maquina2 = document.querySelector("#maquina2")



papel1.addEventListener("click", eligePapel );
piedra1.addEventListener("click", eligePiedra );
tijeras1.addEventListener("click", eligeTijeras );
 

const papel = "papel";
const piedra = "piedra";
const tijeras = "tijeras";
var aleatorio;

function eligePapel() {


    const aleatorioMaquina = ["papel", "piedra", "tijeras"];
    const aleatorio = aleatorioMaquina[Math.floor(Math.random() * aleatorioMaquina.length)];

    
    console.log(aleatorio) 
    const papel1 = "papel"

     if (papel1 == papel  && aleatorio == piedra){
        maquina1.innerText = "TU ELEGISTE : " + papel1 ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + aleatorio ;
        
        resultado1.innerText = "SCORE : GANASTE"
        console.log("GANASTE")
    }else if (papel1 == papel && aleatorio == tijeras) {
        maquina1.innerText = "TU ELEGISTE : " + papel1 ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + aleatorio ;

        resultado1.innerText = "SCORE : PERDISTE"
        console.log("PERDISTE")
    
    }else {
        maquina1.innerText = "TU ELEGISTE : " + papel1 ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + aleatorio ;

        resultado1.innerText = "SCORE : EMPATASTE"
        console.log("EMPATASTE")
    
    }
    
}
    

eligePapel()

function eligePiedra() { 

    const aleatorioMaquina = ["papel", "piedra", "tijeras"];
    const aleatorio = aleatorioMaquina[Math.floor(Math.random() * aleatorioMaquina.length)];

    
    console.log(aleatorio) 

    const piedra1 = piedra;

     if (piedra1 == piedra  && aleatorio == tijeras){
        maquina1.innerText = "TU ELEGISTE : "  + piedra1 ; 
        maquina2.innerText = "COMPUTADOR ELIGIO : " + aleatorio ;

        resultado1.innerText = "SCORE : WINNER"
        console.log("GANASTE")
    }else if (piedra1 == piedra && aleatorio == papel) {
        maquina1.innerText = "TU ELEGISTE : " + piedra1 ; 
        maquina2.innerText = "COMPUTADOR ELIGIO : " + aleatorio ;
        console.log("PERDISTE")
        resultado1.innerText = "SCORE : PERDISTE"   

    }else {
        console.log("EMPATASTE")
        resultado1.innerText = "SCORE : EMPATASTE"
        maquina1.innerText = "TU ELEGISTE : " + piedra1 ; 
        maquina2.innerText = "COMPUTADOR ELIGIO : " + aleatorio ;
    }

}
eligePiedra()

function eligeTijeras() { 

    const aleatorioMaquina = ["papel", "piedra", "tijeras"];
    const aleatorio = aleatorioMaquina[Math.floor(Math.random() * aleatorioMaquina.length)];

    const tijeras1 = "tijeras";

    if (tijeras1 == tijeras && aleatorio == papel) {
        maquina1.innerText = "TU ELEGISTE : " + tijeras1 ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + aleatorio ;
        console.log("GANASTE")
        resultado1.innerText = "SCORE : GANASTE"
    }else if(tijeras1 == tijeras && aleatorio == piedra) {
        maquina1.innerText = "TU ELEGISTE : " + tijeras1 ; 
        maquina2.innerText = "COMPUTADOR ELIGIO : " + aleatorio ;
        console.log("PERDISTE")
        resultado1.innerText = "SCORE : PERDISTE"   
    }else {
        console.log("EMPATASTE")
        resultado1.innerText = "SCORE : EMPATASTE"
        maquina1.innerText = "TU ELEGISTE :  "  + tijeras1 ;
        maquina2.innerText = "COMPUTADOR ELIGIO :  " +  aleatorio ;
    }
}

eligeTijeras()






