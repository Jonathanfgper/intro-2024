-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS ventas_db;
USE ventas_db;

-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio int(10)
);

-- Insertar datos de productos
INSERT INTO producto (nombre, precio) VALUES
('computadora A', 10),
('tablet B', 15),
('telefono C', 20);

-- Crear tabla de clientes
CREATE TABLE IF NOT EXISTS cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(100),
    email VARCHAR(100)
);

-- Insertar datos de clientes
INSERT INTO cliente (nombre_cliente, email) VALUES
('maria 1', 'mariate_x@gmail.com'),
('jonathan 2','jonathan@gmail.com'),
('javier 3', 'javiere_@gmailcom');

-- Crear tabla de cabecera de factura
CREATE TABLE IF NOT EXISTS factura_cabecera (
    id_factura INT AUTO_INCREMENT PRIMARY KEY,
    numero_factura VARCHAR(255),
    fecha DATE,
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

-- Insertar datos de cabecera de factura
INSERT INTO factura_cabecera (numero_factura, fecha, id_cliente) VALUES
('FAC01', '2024-01-01', 1),
('FAC02', '2024-05-02', 2),
('FAC03', '2024-08-03', 3);

-- Crear tabla de detalle de factura
CREATE TABLE IF NOT EXISTS detalle_factura (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_factura INT,
    id_producto INT,
    cantidad INT,
    precio_unitario INT,
    FOREIGN KEY (id_factura) REFERENCES factura_cabecera(id_factura),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

-- Insertar datos de detalle de factura
INSERT INTO detalle_factura (id_factura, id_producto, cantidad, precio_unitario) VALUES
(1, 4, 2, 10),
(8, 2, 1, 10),
(2, 1, 3, 10),
(3, 5, 2, 20);

-- Consulta para recuperar una factura y todos los productos que posee
SELECT fc.numero_factura, p.nombre AS nombre_producto, df.cantidad, df.precio_unitario
FROM factura_cabecera fc
INNER JOIN detalle_factura df ON fc.id_factura = df.id_factura
INNER JOIN producto p ON df.id_producto = p.id_producto
WHERE fc.numero_factura = 'FAC001';

-- Consulta para recuperar todas las facturas y el nombre del cliente
SELECT fc.numero_factura, c.nombre_cliente
FROM factura_cabecera fc
INNER JOIN cliente c ON fc.id_cliente = c.id_cliente;
