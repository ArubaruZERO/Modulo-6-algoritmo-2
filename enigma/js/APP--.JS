//SECTION Alfabeto

let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";


//SECTION obtener mensaje escrito



var getDesencryptedMessage = () => document.getElementById("mensaje").value;

var getEncryptedMessage=()=> document.getElementById("mensaje-encriptado").value;



//SECTION intercambiar letra de texto por letra de texto encriptado

var translateLetter = (letter,plainAlph,encryptAlph) => {
    var index = plainAlph.indexOf(letter)
    return encryptAlph[index];

}


//SECTION encriptar mensaje y desencriptar mensaje


var translateMessage = (message, plainAlph, encryptAlph) => {
    var result = ""
    for (var letter of message) {
         result = result + translateLetter(letter , plainAlph , encryptAlph);
        
     }
     return result;
}




// SECTION botones

document.getElementById("encriptar").addEventListener("click", ()=> showEncryptedMessage())
document.getElementById("desencriptar").addEventListener("click",()=> showDesencryptedMessage())


//SECTION funcion para ejecuar programa y mostrar




function showEncryptedMessage() {
    let text = getDesencryptedMessage();
    document.getElementById("mensaje-encriptado").innerText=""
    return document.getElementById("mensaje-encriptado").innerText = translateMessage (text, plainAlphabet, encryptedAlphabet); 
}



function showDesencryptedMessage() {
    let text = getEncryptedMessage();
    return document.getElementById("mensaje").innerText =  translateMessage (text, encryptedAlphabet, plainAlphabet); 
}
