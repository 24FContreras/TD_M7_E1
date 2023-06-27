--CREATE USER user_practicadb WITH PASSWORD 'practicadb';
--CREATE DATABASE practica_db OWNER user_practicadb;

CREATE TABLE estudiantes(
	id SERIAL PRIMARY KEY,
	nombres VARCHAR(100),
	apellidos VARCHAR(100),
	edad INT,
	nro_identificacion INT
);
	
CREATE TABLE cursos(
	id SERIAL PRIMARY KEY,
	titulo VARCHAR(100),
	descripcion VARCHAR(200)
);