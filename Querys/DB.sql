create database web2;
use web2;

create table users(
userID int auto_increment KEY,
nombre varchar(50),
email varchar(50),
password varchar(50),
tipo varchar(50)
);

create table categorias(
categoria_id int auto_increment,
userID int,
Nombre varchar(20),
PRIMARY KEY (categoria_id),
FOREIGN KEY (userID) REFERENCES users(userID)
);

select * from categorias;
insert into categorias(userID,Nombre)values(2,"Electronica");

create table productos(
productos_ID int auto_increment,
categoria_id int,
userID int,
img MEDIUMBLOB,
nombre varchar(50),
precio DECIMAL(10, 2),
cantidad DECIMAL(3,2),
descrip varchar(100),
inventario int,
PRIMARY KEY (productos_ID),
FOREIGN KEY (userID) REFERENCES users(userID),
FOREIGN KEY (categoria_id) REFERENCES categorias(categoria_id)
);

create table ventas(
id_venta int auto_increment,
productos_ID int,
userID int,
Total DECIMAL(10, 2),
fecha datetime,
PRIMARY KEY (id_venta),
FOREIGN KEY (productos_ID) REFERENCES productos(productos_ID),
FOREIGN KEY (userID) REFERENCES users(userID)
);


insert into ventas (productos_ID,userID,Total,fecha)values(4,2,10,now());
truncate users;
select * from users;
select * from categorias;
select * from ventas;

select * from productos;

truncate table productos;
