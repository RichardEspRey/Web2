Delimiter $$
Use web2; $$
Create procedure pProductos(
op varchar(10),
pProductos_ID int,
pCategoria_id int,
pUserID int,
pImg MEDIUMBLOB,
pNombre varchar(50),
pPrecio DECIMAL(10, 2),
pCantidad DECIMAL(3,2),
pDescrip varchar(100),
pInventario int

)
Begin	
declare user_exist INT;
declare resp INT; /*variable a devolver para manejo de respuestas */

	If op = 'I' then /* Opcion para insertar productos*/
		Insert into productos(categoria_id,userID,img,nombre,precio,cantidad,descrip,inventario) values(pCategoria_id,pUserID,pImg,pNombre,pPrecio,pCantidad,pDescrip,pInventario);
		set resp = 1;
		select resp;
	End If;
    
    If op = 'all' then /* INVENTARIO PROPIO */
		Select  p.productos_ID,p.img,p.nombre,p.precio,p.cantidad,p.descrip,p.inventario, c.Nombre as Categoria
        from productos p
        LEFT JOIN categorias c
		on p.categoria_id = c.categoria_id
        where p.userID = pUserID ;
	End If;
    
    If op = 'allP' then /* primeros 10 productos */
		SELECT 
			p.productos_ID,
			p.img,
			p.nombre,
			p.precio,
			p.cantidad,
			p.descrip,
			p.inventario,
			c.Nombre AS Categoria
		FROM 
			productos p
		INNER JOIN 
			categorias c
		ON 
			p.categoria_id = c.categoria_id
		LIMIT 10;
	End If;
    
	 If op = 'S' then /* SELECT ESPECIFICO  ID*/
			Select p.img,p.nombre,p.precio,p.cantidad,p.descrip,p.inventario, c.Nombre
			from productos p
			LEFT JOIN categorias c
			on p.categoria_id = c.categoria_id
			where p.productos_ID = pProductos_ID ;
		End If;
		
        
        If op = 'N' then /*SELECT POR NOMBRE*/
			Select p.img,p.nombre,p.precio,p.cantidad,p.descrip,p.inventario, c.Nombre
			from productos p
			LEFT JOIN categorias c
			on p.categoria_id = c.categoria_id
			where p.nombre LIKE concat('%', pNombre, '%') ;
		End If;
        /*SELECT */
        
         If op = 'U' then /* UPDATE DE PRODUCTO*/
			UPDATE productos set categoria_id = pCategoria_id, userID = pUserID, img = pImg,nombre = pNombre, precio = pPrecio, cantidad = pCantidad, descrip = pDescrip, inventario = pInventario where productos_ID = pProductos_ID;
			set resp = 1;
			select resp;
		End If;
        
        
End; $$
Delimiter ;
/*ME FALTAN OPCIONES DE UPDATE PARA LA EDICION DE CADA PRODUCTO  Y SELECT POR CATEGORIA Y ELIMINACION DE PRODUCTO*/
drop procedure pProductos;

select * from users;
select * from Productos;
CALL pProductos("S", null, null, 2, null, null, null, null, null, null);