//CONEXIÓN CON CONFIG DE CREDENCIALES Y POOL
const { Pool } = require("pg");

const config = {
  user: "user_practicadb",
  host: "localhost",
  database: "practica_db",
  password: "practicadb",
  port: 5432,
};

const pool = new Pool(config);

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});
