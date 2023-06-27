//CONEXIÓN CON URI Y CLIENT
const { Client } = require("pg");

const connectionString =
  "postgresql://user_practicadb:practicadb@localhost:5432/practica_db";

const cliente = new Client({ connectionString });

cliente.connect();

cliente.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  cliente.end();
});
