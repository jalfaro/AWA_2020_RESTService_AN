const conn = require('../../libraries/sql');

module.exports = (app) => {
    app.get("/mascota", (req, res) => {
        let query = "SELECT id, nombre, raza FROM mascota";
        conn.query(query, (err, row, field) => {
            if (err) res.status(400).send("Error al conectarme al servidor");
            res.send(row);
        });
    });

    app.get("/mascota/:id", (req, res) => {
        let query = `SELECT id, nombre, raza FROM mascota WHERE id = ${req.params.id}`;
        conn.query(query, (err, filas, col) => {
            if (err) res.status(400).send("Error al conectarme al servidor");
            if (filas.length === 0) res.status(404).send("Mascota no encontrada");
            res.send(filas[0]);
        });
    });

    app.post("/mascota", (req, res) => {
        let query = `INSERT INTO mascota (nombre, raza) VALUES ('${req.body.nombre}','${req.body.raza}')`;
        conn.query(query, (err, filas, col) => {
            if (err) res.status(400).send("error al conectase");
            res.send("Mascota insertada");
        });
    });
};
