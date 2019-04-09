 // document.getElementById("myBtn").addEventListener("click", displayDate);

 document.getElementById("btnCifrar").addEventListener("click", () => {
     let textoIngresado = document.getElementById('TextCifrar').value.toUpperCase();

    let numero = parseInt(document.getElementById('TextNumero').value);

    document.getElementById('TextResultado').innerHTML = window.cipher.encode(textoIngresado, numero);

     });


   

 document.getElementById("btnDescifrar").addEventListener("click", () => {

    let textoIngresado = document.getElementById('TextCifrar').value.toUpperCase();

    let numero = parseInt(document.getElementById('TextNumero').value);

    document.getElementById('TextResultado').innerHTML = window.cipher.decode(textoIngresado, numero);
 });
    

/*document.getElementById("btnLimpiar").addEventListener("click", encode());
function limpiar(){

    document.getElementById("TextCifrar").value="";

    document.getElementById("TextNumero").value="";

    document.getElementById("TextResultado").value="";
    }*/