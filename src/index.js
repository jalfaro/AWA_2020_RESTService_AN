const app = require('./libraries/server');
require('./app/rutas/mascotas')(app)


app.listen(app.get("port"), () => console.log(`El servidor esta corriendo en el puerto ${app.get("port")}`));