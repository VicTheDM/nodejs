const express = require('express');
const cors = require('cors');
const { PORT } = require('./src/config/properties');
const connectLocalDB = require('./src/config/mongoDBAtlas');
const app = express();
connectLocalDB(); // Conexion con la base de datos


app.use(cors());

app.use(express.json()); // parse application/json

app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// Rutas
app.use('/api', require('./src/routes/login.routes'));
app.use('/clientes', require('./src/controllers/clientes'));
app.use('/inventario', require('./src/controllers/inventario'));
app.use('/recetas', require('./src/controllers/recetas'));
app.use('/bebidas', require('./src/controllers/bebidas'));

// Servidor
app.listen(PORT, () => console.log(`Escuchando por el puerto ${PORT}`) );

