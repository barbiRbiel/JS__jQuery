// FRASES ALEATORIAS AL INICIO DE LA PAGINA:

    //Declaro la variable con array
    const frasesAleatorias=new Array()

    //1° frase
    frasesAleatorias[0] = "¡ Hola astronauta, bienvenid@ !";
    //2° frase
    frasesAleatorias[1] = "TIP: Haz tu propia estrategia ;)";
    //3° frase
    frasesAleatorias[2] = "¿ Listo para la proxima aventura ?";
    //4° frase
    frasesAleatorias[3] = "¡ Suerte ! La vas a necesitar!";
    //5° frase
    frasesAleatorias[4] = "¡ Demuestra tu destreza en la galaxia !";

    //longitud de las frases aleatorias
    var frasesLongitud = frasesAleatorias.length;

    function mostrarFrases() {
    const numAleatorio=Math.round(Math.random()*(frasesLongitud-1));

    //aparezcan las frases aleatorias de bienvenida en:
    document.getElementById("home__frases").innerHTML=frasesAleatorias[numAleatorio];
    }

//--------------------------------------------------------------------------------------------------------------------------------------------------------

// INPUT DONDE EL USUARIO INGRESA EL NOMBRE POR EL CUAL QUIERE QUE LO LLAMEMOS:

    let ingresaNombre = document.getElementById("home__form"); //seccion del form
    ingresaNombre.addEventListener("submit", nombreIngresado); //input donde el usuario ingresa el nombre

    function nombreIngresado(e){ 
        e.preventDefault();

        

        let nombreUsuario = document.getElementById("usuarioInput").value;

        document.getElementById("inputIngresado").innerHTML = nombreUsuario;

        localStorage.setItem("nombreUsuario", nombreUsuario); //local storage set item

        localStorage.getItem("nombreUsuario"); //local storage get item
    }



//--------------------------------------------------------------------------------------------------------------------------------------------------------

// JUEGO: PIEDRA, PAPEL O TIJERA:

    // Botones:
        const PIEDRA = 0; 
        const PAPEL = 1;
        const TIJERA = 2;

    // Resultado:
        const EMPATE = 0;
        const VICTORIA = 1;
        const PERDISTE =2;

    // Botones interactivos:
        const btnPiedra = document.getElementById("piedra");
        const btnPapel = document.getElementById("papel");
        const btnTijera = document.getElementById("tijera");
        const resultadoTexto = document.getElementById("veredicto");
        const userImg = document.getElementById("user__img");
        const pcImg = document.getElementById("pc__img");

        btnPiedra.addEventListener("click", ()=>{
            juego(PIEDRA);
        });

        btnPapel.addEventListener("click", ()=>{
            juego(PAPEL);
        });

        btnTijera.addEventListener("click", ()=>{
            juego(TIJERA);
        });


    // Para que aparzca el resultado (si es que salio...empate, perdedor, ganador) en la página:
        function juego(userOption){
            const pcOption = Math.floor(Math.random()* 3 );
            const resultado = calcularResultado(userOption, pcOption);

            switch(resultado){
                case EMPATE:
                        resultadoTexto.innerHTML = "EMPATE. No te des por vencido!";
                        break;
                case VICTORIA:
                        resultadoTexto.innerHTML = "¡ VICTORIA ! Sigue así!";
                        break;
                case PERDISTE:
                        resultadoTexto.innerHTML = "Perdiste. No te des por vencido!";
                        break;
            }
        }

    // Funcionar calcular el resultado: Empate, Perdiste, Ganaste:
        function calcularResultado(userOption, pcOption){
            if(userOption === pcOption){
                return EMPATE;
            
            } else if(pcOption === PIEDRA){

                    if(pcOption === PAPEL) return PERDISTE;
                    if(pcOption === TIJERA) return VICTORIA;
            
            } else if(userOption === PAPEL){
                if(pcOption === TIJERA) return PERDISTE;
                if(pcOption === PIEDRA) return VICTORIA;
            
            }else if(userOption === TIJERA){
                if(pcOption === PIEDRA) return PERDISTE;
                if(pcOption === PAPEL) return VICTORIA;
            }
        }

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------CONTACTO FORM:------------------------------------------------------------

const contactForm = document.forms["contact__form"];

contactForm.onsubmit = (event) => {
    event.preventDefault();
    console.log(contactFormData());
};

function contactFormData(){
    const contactUser = {};
    Array.from(contactForm.elements).forEach(element => {
        if(element.name) contactUser[element.name] = element.value 
        })
        return contactUser;
}

console.log(contactFormData());

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------SHARE, Invita a un amigo:------------------------------------------------------------
$(document).ready(function () {
function mostrar() {
        console.log($("#emailInput").val());
    }
    
    $(document).ready(() => {
        $("#submit-btn").on("click", mostrar);
    });
});