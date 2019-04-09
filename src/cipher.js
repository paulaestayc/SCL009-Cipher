window.cipher = {
  encode: (textoIngresado,numero) => {

    let textoCifradoFinal = "";

    for (let i = 0; i < textoIngresado.length; i ++) {

            let texto = textoIngresado[i]; // almacenamos el indice obtenido en nuestro ciclo for

            /*expresión regular va a buscar dentro de una cadena las coincidencias , 
            permite el rango especificado , en este caso las ñ*/
            if (texto.match(/[a-z]/i)) {

                let valorUnicode = textoIngresado.charCodeAt(i);

                if ((valorUnicode >= 65) && (valorUnicode <= 90)){

                    texto = String.fromCharCode(((valorUnicode - 65 + numero) % 26) + 65);

                }

            }
            //+ suma tu resultado a la variable , como un tipo de concatenación 
            textoCifradoFinal += texto;

        }
            return textoCifradoFinal;
        }, 





    decode: (textoIngresado,numero) => {

        let textoDescifradoFinal = "";

        for (let i = 0; i < textoIngresado.length; i ++) {

            let texto = textoIngresado[i];

            if (texto.match(/[a-z]/i)) {

                let valorUnicode = textoIngresado.charCodeAt(i);

                if ((valorUnicode >= 65) && (valorUnicode <= 90)){

                    texto = String.fromCharCode(((valorUnicode + 65 - numero) % 26) + 65);

                }

            }

            textoDescifradoFinal += texto;

        }
        return textoDescifradoFinal ; 

    } 


}