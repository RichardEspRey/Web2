Delimiter $$
Use web2; $$
Create procedure pCategorias(
op varchar(10),
pCategoria_id int,
pUserID int,
pNombre varchar(25)

)
Begin	
declare cat_exist INT;
declare resp INT; /*variable a devolver para manejo de respuestas */

	If op = 'I' then /* Opcion para insertar usuarios */
		Set cat_exist = (Select COUNT(*) FROM categorias where Nombre = pNombre); /* Opcion validacion para no colocar el mismo correo */
        if cat_exist = 0 then
			Insert into categorias(userID,Nombre) values(pUserID,pNombre);
			set resp = 1;
			select resp;
		Else
			set resp = 0;
			select resp;
        End If;
	End If;
    
	If op = 'All' then 	/* Opcion para seleccionar un usuario en especifico*/
		select categoria_id,Nombre from categorias;
    End If;
 

End; $$
Delimiter ;
call pCategorias('I',null,2,'Juguetes');
call pCategorias('All',null,null,null);

