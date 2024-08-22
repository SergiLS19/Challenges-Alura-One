let btnEncript = document.querySelector(".btn_encriptar");
let btnDesencript = document.querySelector(".btn_desencriptar");
let btnCopiar = document.querySelector(".btn_copiar");
let txtEncript = document.querySelector(".texto");
let warning = document.querySelector(".aviso");
let result = document.querySelector(".resultado");
let muñeco = document.querySelector(".img-muñeco");
let mensajeUno = document.querySelector(".mensaje_uno");
let mensajeDos = document.querySelector(".mensaje_dos");

function encriptar(){
  let texto=txtEncript.value.trim();
  let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto==""){
    swal("¡Hey!","Necesito un texto para poder alterar", "warning");
  }
  else if (/\d/.test(texto)) {
    swal("¡Hey!", "No se puede encriptar un número", "warning");
  }
  else if(texto !== txt){
    swal("¡Hey!","No deben haber acentos ni caracteres distintos", "warning");
  }
  else if(texto!==texto.toLowerCase()){
    swal("¡Hey!","Solo se permiten letras minúsculas", "warning");   
  }

  else{
    let textoEncriptado =texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai") 
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    result.innerHTML= textoEncriptado
    btnCopiar.style.visibility="inherit";
    result.style.visibility="inherit";
    muñeco.src="./assets/CANDADO_CERRADO_FONDO.png"
    mensajeUno.textContent="¡Tu mensaje ha sido encriptado!"
    mensajeDos.textContent="";
  }

}

function desencriptar(){
  let texto=txtEncript.value;
  let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
  if (texto==""){
    swal("¡Hey!","Necesito un texto para poder alterar", "info");

  }
  else if(texto !== txt){
    swal("¡Hey!","No deben haber acentos ni caracteres distintos", "info");
  }
  else if(texto!==texto.toLowerCase()){
    swal("¡Hey!","Solo se permiten letras minúsculas", "info");   
  }

  else{
    let textoEncriptado =texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi,   "a") 
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    result.innerHTML= textoEncriptado
    btnCopiar.style.visibility="inherit";
    result.style.visibility="inherit";
    muñeco.src="./assets/CANDADO_ABIERTO_FONDO.png"
    mensajeUno.textContent="¡Tu mensaje ha sido desencriptado!"
    mensajeDos.textContent="";
  }

}
function copiar(){

  let copiar = result.textContent;
  navigator.clipboard.writeText(copiar)
        .then(() => {
        swal("Copiado", "El texto fue copiado a su portapapeles", "success");
        })
        .catch(err => {
        swal("Oh...","Hubo un error al copiar el texto", "error");
        });
}