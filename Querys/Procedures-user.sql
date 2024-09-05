Delimiter $$
Use web2; $$
Create procedure pUser(
op varchar(10),
pID_User int,
pNombre varchar(25),
pEmail varchar(20),
pPassword varchar(20),
pTipo varchar(10)


)
Begin	
declare user_exist INT;
declare resp INT; /*variable a devolver para manejo de respuestas */

	If op = 'I' then /* Opcion para insertar usuarios */
		Set user_exist = (Select COUNT(*) FROM users where email = pEmail); /* Opcion validacion para no colocar el mismo correo */
        if user_exist = 0 then
			Insert into users(nombre,email,password,tipo) values(pNombre,pEmail,pPassword,pTipo);
			set resp = 1;
			select resp;
		Else
			set resp = 0;
			select resp;
        End If;
	End If;
    
	If op = 'S' then 	/* Opcion para seleccionar un usuario en especifico*/
		Set user_exist = (Select COUNT(*) FROM users where email = pEmail and password = pPassword); /* Opcion validacion para no colocar el mismo correo */
		if user_exist = 1 then
			select user_exist;
			Select userID,nombre,email,password,tipo FROM users where email = pEmail ;
		Else 
			set user_exist = 0;
            select user_exist;
		End If;
    End If;
 

End; $$
Delimiter ;

Drop procedure pUser;
Call pUser('I',1,'Ricardo','1','1','Comprador');
Call pUser('S',null,null,'2','2',null);
truncate Users;
Select * FROM Users ;

use web2;


