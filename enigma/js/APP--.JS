//SECTION Alfabeto

let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";


//SECTION obtener mensaje escrito



var getDesencryptedMessage = () => document.getElementById("mensaje").value;

var getEncryptedMessage=()=> document.getElementById("mensaje-encriptado").value;





//SECTION buscar letra en mensajes

var searchLetterDesencryptedMessage = (getDesencryptedMessage , letter)=>{
    for (var i = 0; i < getDesencryptedMessage.length; i++) {
        if (getDesencryptedMessage[i] === letter) return i;
        
    }
    return -1;
}
var searchLetterEncryptedMessage = (getEncryptedMessage , letter)=>{
    for (var i = 0; i < getEncryptedMessage.length; i++) {
        if (getEncryptedMessage[i] === letter) return i;
        
    }
    return -1;
}




//SECTION intercambiar letra de texto por letra de texto encriptado




var encryptLetter = letter =>{
    var index = plainAlphabet.indexOf(letter)
    return encryptedAlphabet[index];
}

var desencryptLetter = letter =>{
    var index = encryptedAlphabet.indexOf(letter)
    return plainAlphabet[index];
}


//SECTION encriptar mensaje y desencriptar mensaje

 var encryptMessage = message =>{
     var result = ""
    for (var letter of message) {
         result = result + encryptLetter(letter);
        
     }
     return result;
 }


 var desencryptMessage = message =>{
     var result = ""
     for (var letter of message) {
         result = result + desencryptLetter(letter)
         
     }
     return result;
 }




// SECTION botones

document.getElementById("encriptar").addEventListener("click", ()=> showEncryptedMessage())
document.getElementById("desencriptar").addEventListener("click",()=> showDesencryptedMessage())


//SECTION funcion para ejecuar programa y mostrar




function showEncryptedMessage() {
    let text = getDesencryptedMessage();
    return document.getElementById("mensaje-encriptado").innerText = encryptMessage (text); 
}



function showDesencryptedMessage() {
    let text = getEncryptedMessage();
    return document.getElementById("mensaje").innerText = desencryptMessage (text); 
}
