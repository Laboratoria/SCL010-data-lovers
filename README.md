![enter image description here](https://lh3.googleusercontent.com/BQMWJSYGKifw70A3wnKbuxsrFWAC_GMoIvDooLsGyuJzTEd5DxDJWtO2EICxxTv6i5qfbnoMHsnLUg=s1340)
## “El MUNDO DE RICK AND MORTY”. ![enter image description here](https://lh3.googleusercontent.com/g3m0h-dWcSqnKM0ajYbXtClBtSTFVHPh7D6z9sJBD263DThbRWswE6USAPM4LbClLEixRaX7TSUjHg=s150)

## Resumen del proyecto            

El aplicación web "El Mundo de Rick And Morty" nace para dar respuesta a las necesidades de los fans de la serie, entregandoles un lugar donde obtener información sobre su serie favorita y además les entrega herramientas para poder buscar, filtrar y ordenar fichas de personajes, que incluyen información relevante sobre ellos. Pueden acceder al nombre del personaje, a su estado actual (vivo/muerto), a su raza, planeta de procedencia o genero, entre otros datos interesantes. "El Mundo de Rick and Morty", por ahora es un proyecto piloto, si bien ahora la funcionalidad descrita actua con normalidad, se pretende agregar más interacciones  a futuro para sus fans, como información tecnica de la serie, enlaces para ver la serie online e información sobre las desarrolladoras de la página y contenidos adicionales.

## Definición del Producto y  perfil del Usuario.

El proyecto de cifrado "La Llave" esta creado para facilitar la realización de eventos privados dirigidos a un público especifico, respondiendo a la necesidad de organizarse y comunicarse entre las partes sin involucrarse de manera pública. Esta primera versión fue pensada para las Microcervecerías y Growler's naciones que necesitan publicitar sus productos pero no cuentan con la patente legal para ello, lo que los deja en la ilegalidad, arriesgándose a multas millonarias o clausuras de sus locales. La Llave, les da una plataforma segura para poder organizar eventos e invitar a un público especifico.

## Proceso de diseño y prototipado.
![enter image description here](https://lh3.googleusercontent.com/0L6ZL6ae0201V-Z6W9L8yjrANJs1s5aRgaFrOvxOxgWD34l609Z0F5O65Iifr5Q4vXSwGi7x1Hg5eQ=s1340)

#### Quiénes son los principales usuarios de producto.
Consumidores frecuentes de las Microcerverías y Growler's nacionales, que son invitados personalmente por miembros de esta comunidad. Estos usuarios conocen el rubro y son clientes habituales, por lo cual se genera una red basada en el respeto y la confianza por el rubro.

#### Cuáles son los objetivos del producto hacia los usuarios.
- Los usuarios pueden acceder a una comunidad de eventos, catas y redes culinarias en base a la cerveza artesanal. La Llave no solo te abre la puerta de entrada, sino también te hace parte de algo: es comunidad y compañerismo.

#### Cómo el producto resuelve el problema.
- Fomentando la realización de eventos a nivel secreto, con un público acotado, informado y responsable. Da las herramientas para operar desde la tranquilidad tanto a los anfitriones como a los invitados.


## Instalación y Ejecución. ![enter image description here](https://lh3.googleusercontent.com/oYxytvqaF8Fnlt6T2CrytDprI3NUBZa8GAfxDLYQjNC6GxIC0oxGU60N_piUeVg3YtzZU3tzr3ulwQ=s100)

"La Llave" puede ser ejecutada desde cualquier navegador web o smartphones, no necesitas mayores requerimientos para su funcionamiento.

 1. Dirígete a la dirección web de la aplicación, puedes ingresar mediante este link ["La Llave".](https://ayma27.github.io/SCL010-Cipher/src/index.html)
 2. Ingresa, si ya tienes un mensaje cifrado por la opción "Ingresa", si por el contrario quieres cifrar (eres anfitrión) debes ingresar por la parte inferior "click".
 3. Codifica o Decodifica tu mensaje, luego confirma si puedes asistir o no al evento. En caso de no poder asistir, serás redirigido a la pantalla de despedida.
 4. Acepta las normas e indicaciones de la pagina. Si no aceptas serás redirigido a la pantalla de despedida.
 5. Ingresa tu email de contacto para que podamos contactarte con las indicaciones finales.
 6. Listo, serás enviado a la pantalla de despedida.


## Herramientas técnicas para su creación.

 - [x] La lógica del proyecto esta desarrollado completamente en JavaScript (ES6). [Vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
 - [x]  En este proyecto NO usa librerías o frameworks.
 - [x] Sus tests unitarios cubren un 100% de _statements_, _functions_
y _lines_, y un 100% de _branches_. Estos estan incluidos en el boilerplate.


## Prototipado del proyecto
Para comenzar a crear el proyecto, previamente se realizaron prototipados de baja calidad. En primer lugar se dibujo el control de flujo que tendría el programa y un primer scketch en papel de como se verían sus pantallas. Luego de presentar esta idea a posibles usuarios y recibir feedback se realizó un segundo scketch solucionando los problemas de flujo encontrados en el prototipado inicial. Para terminar finalmente con un wireframe de como se vería el producto final realizado en Figma.

### Control de flujo y Scketch (1)
![enter image description here](https://i.ibb.co/Q8XqpCg/IMG-20190623-130405-1.jpg)

### Scketch(2)
![enter image description here](https://i.ibb.co/86TVr70/IMG-20190623-130458.jpg)
### Wireframe en Figma
![Figma](https://i.ibb.co/9cXXfrv/mockup-Inicio.png)


## Test con usuarios
Luego de contar con el Wireframe con el modelo final, se le agregó funcionalidad al programa mediante ES6, Con el programa ya funcionando se realizaron test con posibles usuario para obtener feedback del diseño y funcionamiento.

### Testing

Al aplicar el testing a usuarios, nos encontramos con problemas con la recepción de los códigos de invitación, ya que al ingresarlo en la appweb se volvía complicado, esto en el caso de los usuarios-invitados. (NO aplica lo mismo para los anfitriones).
En primera instancia se pensaba entregar la invitación con el código a descrifrar en formato físico-papel, pero se detectó que no era práctico para el usuario, además de la posibles de perderlo o que se volviera ilegible. Por ello, se reformulo el concepto de entrega y se optó por entregarlo vía digital; para poder ser enviado vía whatsapp o email.

En la primera imagen observamos el testing con usuarios.

En la segunda imagen se muestra el primer prototipado de invitación en fomrato fisico y el final en formato digital.

Imagen 1.
![Probando con usuarios](https://i.ibb.co/b2zWzT0/In-Shot-20190623-131837648.jpg)
Imagen 2.
![invitación](https://i.ibb.co/hMxqM1j/In-Shot-20190623-132132568.jpg)

## Recursos de organización  ![enter image description here](https://lh3.googleusercontent.com/lIxDaevl93kpTbZ_VlKpt3nxb3uD4GC9mSZ50xvZvolHYW8P9q8MRSyjOzFP992a7tG_rIZ-NKOonQ=s180)

Para la realización del proyecto se usaron diferentes herramientas para su organización y creación. A continuación te mencionamos las más utilizadas:
#### Trello fue la herramienta principal de organización, para llevar un control con orientación a la metodología Scrum.
#### Para el proceso de codificación, se utilizó [Atom](https://atom.io/).
#### Para el prototipado (sketching) se usó [Figma](https://www.figma.com/).
#### Para compartir el prototipo de alta fidelidad se uso Zeplin.
#### Para la realización del README.md se usó [Stackedit.io](http://stackedit.io/).
#### Finalmente todo el proyecto esta trabajado y contenido desde GitHub [GitHub y GitHub Pages](https://guides.github.com/).
