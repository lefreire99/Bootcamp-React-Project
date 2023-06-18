# Descripción
El proyecto escogido para el módulo de React del bootcamp fue la segunda propuesta de proyecto que se basa en realizar lo siguiente:
Aplicación para recepción de autos en un taller automotriz. Luego de tomar todos los datos necesarios la aplicación generará una orden de trabajo. Se constará de 4 secciones, datos del cliente, datos del vehículo, selección de servicios , y finalmente, la orden de trabajo.
Para el desarrollo de la aplicación se usó la libreira react-hook-forms para el manejo de formularios, además, la implementación de redux y context para la consistencia y manejo de estados entre cada uno de los componentes.

# Desarrollo
1.- Clonar el repositorio.\n
2.- Ubicar la carpeta en donde clono el repositorio y correr el comando npm install para instalar las dependencias.
3.- Correr el comando npm start para iniciar la aplicación localmente.
4. Realizar los cambios deseados.

En caso de terminar la ejecución de la aplicación pulsar las teclas ctrl + c .
# Despliegue
La aplicación se desplegó usando un bucket de s3 en aws. En caso de realizar un despliegue en un nuevo bucket se deben seguir los siguientes pasos:
1.- Ubicar la carpeta del proyecto y ejecutar el comando npm run build para crear archivos estáticos y listos para producción.
2.- Crear un bucket en s3 con sus debidos permisos.
3.- En la sección de propiedades del bucket habilitar alojamiento de sitios estáticos.
4.- Modificar los permisos y las póliticas de seguridad del bucket en caso de ser necesario.
5.- Cargar los archivos y carpetas que se encunetra dentro de la carpeta build que se generó luego de ejecutar el comando del paso 1.
6.- La url se encuentra en la misma sección en donde se habilitó el alojamiento (Parte final de la sección de propiedades del bucket).
