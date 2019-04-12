// document.getElementById("myBtn").addEventListener("click", displayDate);

 document.getElementById("btncifrar").addEventListener("click", () => {
     let textoIngresado = document.getElementById('textcifrar').value;

    let numero = parseInt(document.getElementById('textnumero').value);

    document.getElementById('textresultado').innerHTML = window.cipher.encode(textoIngresado, numero);

     });


   

 document.getElementById("btndescifrar").addEventListener("click", () => {

    let textoIngresado = document.getElementById('textcifrar').value;

    let numero = parseInt(document.getElementById('textnumero').value);

    document.getElementById('textresultado').innerHTML = window.cipher.decode(textoIngresado, numero);
 });
    
document.getElementById("btnLimpiar").addEventListener("click", () => {
function limpiar(){
    document.getElementById("textcifrar").value="";
    document.getElementById("textnumero").value="";
    document.getElementById("textresultado").value="";
    }
});    