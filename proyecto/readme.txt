proyecto 2 - sistema de gestion de invernadero
entrega 1: servidor e interfaz web estatica

integrantes:
- Yan kai Ye Yin
- Alexander Negron


supuestos y justificaciones

el login no valida usuario ni contraseña contra un backend solo se validan campos
vacios

se agregaron enlaces de acceso directo como usuario y como administrador
bajo el formulario para poder navegar todas las vistas sin depender de
un login funcional

toda la informacion mostrada, cultivos, sensores, usuarios y datos de
sensores, son datos de prueba escritos directamente en el html. no se
consulta ningun backend ni base de datos

el filtro por usuario y el filtro por tipo de cultivo se muestran de
forma visual pero no filtran datos reales

la vista de datos muestra los valores en una tabla en vez de un grafico,
una implementacion simple para esta entrega

el boton eliminar en gestion de usuarios no borra nada real, pero
muestra una confirmacion con javascript

las vistas de usuario no reciben ningun parametro de sesion, se asume
que siempre representan al mismo usuario de ejemplo

se aplico una hoja de estilos comun a todas las vistas, con adaptacion
para pantallas pequeñas

*pequeños comentarios
para las carpetas no supe como ponerles mensajes de commit asi que quedaron con el mensaje del archivo
que se subio al github (Yan)

si hay algun espacio que sobra sobre las lineas de texto, eso es porque se me olvido ponerles comentarios 
en el commit y tuve que comentarlos uno por uno (Yan)


Entrega 2:

se creo otro repositorio porque en el anterior estaba la clave privada

se resolvio el comentario de la entrega 1 y se agrego el formulario para que
un usuario cree su cuenta y el administrador tambien puede crear usuarios

las cuentas nuevas se crean desde el formulario de registro o desde la vista
de usuarios del administrador y siempre tienen rol usuario, no se puede crear
un administrador desde el registro

el administrador ahora puede crear usuarios nuevos, cada uno con su invernadero vacio

el login ahora valida contra los datos de prueba y lleva al panel segun el
rol. se quitaron los enlaces de acceso directo
las vistas de usuario y de administrador se generan con alpine.js desde los datos
la vista de datos ahora muestra un grafico de linea por sensor, ademas de la tabla
se agrego la pwa con manifest y service worker

usuarios de prueba:
- admin / admin123
- juan / juan123
- maria / maria123
- pedro / pedro123, con el invernadero vacio

la sesion se guarda en el navegador y se pierde al cerrar la pestaña, 
si no hay sesion vuelve al login y si el rol no
corresponde lleva al panel del usuario

los datos de prueba estan en js/datos.js. las creaciones, ediciones y
eliminaciones se guardan en el localstorage del navegador para
volver a los datos iniciales se puede ejecutar reiniciarDatos() en la consola

cada usuario tiene un solo invernadero que se crea vacio junto con la cuenta

el nombre de usuario es unico, sin espacios y de minimo 3 caracteres y la
contraseña tiene minimo 6 caracteres

el tipo de cultivo es una lista fija, alimentario, flor, hierba, frutal u
otro para que el filtro por tipo no tenga duplicados

el nombre de un sensor es unico entre todos los usuarios porque los datos
se asocian a ese nombre. si se edita el nombre, sus datos pasan al nombre nuevo

los datos de los sensores son de prueba

al eliminar un sensor se eliminan sus datos y al eliminar un usuario se
eliminan sus cultivos sensores y datos en ambos casos se pide confirmacion

los cultivos se filtran por tipo y se ordenan por columna, el listado de
usuarios se busca por nombre o usuario y se ordena por columna, y los
invernaderos globales se filtran por usuario. todo se hace en el frontend
sobre los datos de prueba

alpine.js y chart.js estan como archivos locales en js/vendor para que el
sitio funcione con la pwa sin conexion

el service worker solo se registra en localhost o con https si el sitio se
abre por http con una ip funciona normal pero no se puede instalar ni usar
sin conexion