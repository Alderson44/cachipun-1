const papel1 = document.querySelector(".btn-primary"); 
const piedra1 = document.querySelector(".btn-secondary"); 
const tijeras1 = document.querySelector(".btn-third"); 


const maquina1 = document.querySelector("#maquina1")
const maquina2 = document.querySelector("#maquina2")
const resultado1 = document.querySelector("#resultado1")



papel1.addEventListener("click", elegirPapel );
piedra1.addEventListener("click", elegirPiedra );
tijeras1.addEventListener("click", elegirTijeras );


const papel = "papel";
const piedra = "piedra";
const tijeras = "tijeras";


function elegirPapel()  {
    var jugador = papel;
    console.log(jugador)

    const aleatorioMaquina = ["papel", "piedra", "tijeras"];
    const maquina = aleatorioMaquina[Math.floor(Math.random() * aleatorioMaquina.length)];
    console.log(maquina)
    

    switch (true) {
  
        case jugador === maquina:
        
        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : EMPATASTE"

        console.log("empate")
        break; 
        
        case ( jugador === "papel" && maquina === "tijeras" ):
        
        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : PERDISTE"

        console.log("perdiste")
        break;
        
        case (jugador === "papel" && maquina === "piedra" ):
        
        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : GANASTE"

        console.log("ganaste")
        break;

        default: 
            console.log("elige una opcion correcta !!!" )

    }

}
elegirPapel()

function elegirPiedra()  {
    var jugador = piedra;
    console.log(jugador)

    const aleatorioMaquina = ["papel", "piedra", "tijeras"];
    const maquina = aleatorioMaquina[Math.floor(Math.random() * aleatorioMaquina.length)];
    console.log(maquina)
    

    switch (true) {
  
        case jugador === maquina:
        
        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : EMPATASTE"

        console.log("empate")
        break; 
        
        case ( jugador === "piedra" && maquina === "papel" ):

        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : PERDISTE"

        console.log("perdiste")
        break;
        
        case (jugador === "piedra" && maquina === "tijeras" ):

        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : GANASTE"

        console.log("ganaste")
        break;

        default: 
            console.log("elige una opcion correcta !!!" )

    }

}
elegirPiedra()

function elegirTijeras()  {
    var jugador = tijeras;
    console.log(jugador)

    const aleatorioMaquina = ["papel", "piedra", "tijeras"];
    const maquina = aleatorioMaquina[Math.floor(Math.random() * aleatorioMaquina.length)];
    console.log(maquina)
    

    switch (true) {
  
        case jugador === maquina:

        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : EMPATASTE"

        console.log("empate")
        break; 
        
        case ( jugador === "tijeras" && maquina === "piedra" ):

        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : PERDISTE"

        console.log("perdiste")
        break;
        
        case (jugador === "tijeras" && maquina === "papel" ):

        maquina1.innerText = "TU ELEGISTE : " + jugador ;
        maquina2.innerText = "COMPUTADOR ELIGIO : " + maquina ;
        resultado1.innerText = "SCORE : GANASTE"

        console.log("ganaste")
        break;

        default: 
            console.log("elige una opcion correcta !!!" )

    }

}
elegirPiedra()















