//Tengo un emprendimiento de venta de cervezas artesanales. 
//Precios: Golden = 120 / IPA = 115 / Block = 160



	var cantidad,precio,desc,compra,pagar;

	precio = parseFloat(prompt("Que cerveza queres ? Ingresa el precio para conocer el descuento por cantidad"));
    cantidad = parseFloat(prompt("Ingresar cantidad"));



	compra = precio*cantidad;
	desc = compra*0.15;
	pagar = compra-desc;

	document.write("El descuento es: "+desc);
	document.write(" El importe total a abonar es: "+pagar);




