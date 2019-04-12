window.cipher = {
  encode: (textoIngresado,numero) => {

    let textoCifradoFinal = "";

    for (let i = 0; i <= textoIngresado.length; i ++) {

            /*let texto = textoIngresado[i]; // almacenamos el indice obtenido en nuestro ciclo for

            /*expresión regular va a buscar dentro de una cadena las coincidencias , 
            permite el rango especificado , en este caso las ñ
            if (texto.match(/[a-z]/i)) {*/

                let valorUnicode = textoIngresado.charCodeAt(i);

                if ((valorUnicode >= 32) && (valorUnicode <= 125)){

                    textoCifradoFinal += String.fromCharCode(((valorUnicode - 32 + numero) % 94) + 32);

             
               

            /*}
            //+ suma tu resultado a la variable , como un tipo de concatenación 
            textoCifradoFinal += texto;*/

        }
        
    }
    return textoCifradoFinal;
    }, 





    decode: (textoIngresado,numero) => {

        let textoDescifradoFinal = "";

        for (let i = 0; i <= textoIngresado.length; i ++) {

            
                let valorUnicode = textoIngresado.charCodeAt(i);

                if ((valorUnicode >= 32) && (valorUnicode <= 125)){

                    textoDescifradoFinal += String.fromCharCode(((valorUnicode -125 - numero) % 94) + 125);

                } 

        }
        return textoDescifradoFinal 
       } 

};
    


//solo borrA UNA MAS