

# Resumen del proyecto Secret!!

Secret!!

Con esta aplicación, puedes mantener los secretos entre tus amigas a salvo  y compartir mensajes codificados sin el temor de que alguien más pueda verlos. 

Su funcionamiento es muy simple, solo tienes que introducir el mensaje que deseas codificar, luego seleccionar la cantidad de dezplazamientos con la que deseas transformar tus mensajes y  MAGIA! tienes tu mensaje secreto!! , por lo que solo la persona que conoce la  cantidad de desplazamientos y tiene esta aplicación puede descifrar tu mensaje original

En simples pasos, puedes cifrar o descifrar mensajes y compartirlos entre tus amigas!

##Principales usuari@s del producto

Secret!  fue pensado principalmente en adolescentes,  l@s cuales gracias a la tecnología y sus aplicaciones, han transformado su comunicación de manera efectiva , ya no usan las llamadas, todo es más fácil a través de texto, y pensando en aquellos mensajes más sensibles o dificiles de expresar , los pueden cifrar por medio de ésta aplicación, sin el miedo de que otros se enteren de sus más íntimos secretos.
Si volvemos el tiempo quién no tuvo secretos entre sus amig@s a esa edad? desde conversaciones triviales como fiestas sorpresas, bromas exclusivas de un grupo,  el chic@ que les gusta, hasta temas más importantes, como dudas existenciales, temas familiares que solo se sienten segur@s de compartir entre sus pares 

### Metodología - Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C


### Interfaz de usuario (UI)

La interfaz fue pensada en proporcionar un uso sencillo y amigable , con cajas de texto en una sola vista, en el que no sean necesarios usuarios ni contraseñas , manteniendo aún más el anonimato

La interfaz permite al usuario introducir un mensaje de texto , elegir la cantidad de posiciones que el cifrado desplace cada carácter,botones de selección para cifrar o descifrar, retornando el resultado en letras mayúsculas en una caja de texto, junto con el botón limpiar para volver a utilizar nuevamente la aplicación.


### Pasos generales en la creación del proyecto 

1.-En primera instancia se creó un flujo de pasos a seguir para tener un estructura básica:

![FlujoCipher](imagenes/FlujoCipher.jpg) 

2.-Complementando con un To-Do List para asimilar los conceptos necesarios al momento de dar estructura y funcionalidad a la página 

        Capturar texto

        Capturar número de desplazamiento

        Contabilizar largo de texto

        Generar el bucle hasta completar todas las letras del texto (lenght proporcional al número de ciclos)

            Cambiar letras a codigos ASCII/Unicode (charCodeAT)

            Aplicar Formula (video michelle)

            Cambiar codigo ASCII/Unicode a Letras (String.fromCharCode)

            Con estas letras concactenadas voy a tener el nuevo texto encriptado

        Imprimir en la pantalla el resultado

        Insertar botón Reset


3.-Luego vino la etapa del prototipado, el cuál cambió a medida que avanzó la creación del proyecto 

![Prototipo1](imagenes/Prototipo1.jpg)

![Prototipo2](imagenes/Prototipo2.jpg)

3.-Finalmente el diseño de la Interfaz quedó de la siguiente manera: 

![Interfaz](imagenes/interfaz.jpg)








