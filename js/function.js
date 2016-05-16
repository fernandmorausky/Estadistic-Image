var ajidegallina=0;
var causarellena=0;
var estofadodepollo=0;
var rocotorelleno=0;
var lomosaltado=0;
var polloalabraza=0;
var jaleamixta=0;
var arrozconpollo=0;
var ceviche=0;




function	contar($li)
{
	switch($li){
		case 'ajidegallina' 	:ajidegallina++;	break;
		case 'causarellena' 	:causarellena++;	break;
		case 'estofadodepollo' 	:estofadodepollo++;	break;
		case 'rocotorelleno' 	:rocotorelleno++;	break;
		case 'lomosaltado' 		:lomosaltado++;		break;
		case 'polloalabraza' 	:polloalabraza++;	break;
		case 'jaleamixta' 		:jaleamixta++;break;
		case 'arrozconpollo' 	:arrozconpollo++;break;
		case 'ceviche' 			:ceviche++;break;
	}
	//alert('Hola');

	// if($('.chart__bar').attr('data-skill') == 95){
	// 	$(this).attr('data-skill',40);
	// }

	document.getElementById('ajidegallina').dataset.skill=ajidegallina*5;
	document.getElementById('causarellena').dataset.skill=causarellena*5;
	document.getElementById('estofadodepollo').dataset.skill=estofadodepollo*5;
	document.getElementById('rocotorelleno').dataset.skill=rocotorelleno*5;
	document.getElementById('lomosaltado').dataset.skill=lomosaltado*5;
	document.getElementById('polloalabraza').dataset.skill=polloalabraza*5;
	document.getElementById('jaleamixta').dataset.skill=jaleamixta*5;
	document.getElementById('arrozconpollo').dataset.skill=arrozconpollo*5;
	document.getElementById('ceviche').dataset.skill=ceviche*5;
	//ajidegallina.




	// var arr =  [];

	//     arr["ajidegallina"]=ajidegallina;
	//     arr["causarellena"] = causarellena;
	//     arr["estofadodepollo"] = estofadodepollo;
	//     arr["rocotorelleno"] = rocotorelleno;
	//     arr["lomosaltado"] = lomosaltado;
	//     arr["polloalabraza"] = polloalabraza;
	//     arr["jaleamixta"] = jaleamixta;
	//     arr["arrozconpollo"] = arrozconpollo;
	//     arr["ceviche"] = ceviche;
	//     arr.sort();//de menor a mayor
	var arr = [
    ajidegallina,
    causarellena,
    estofadodepollo,
    rocotorelleno, 
    lomosaltado,
    polloalabraza,
    jaleamixta,
    arrozconpollo,
    ceviche
    ];
    arr.sort();//de menor a mayor
    var sum = arr.reduce(function(a, b) { return a + b; }, 0);
    
	var media=(sum)/9
	media= media.toFixed(2);

	var moda=calculamoda(arr);



	var mediana=arr[4];

	document.getElementById('media').innerHTML=media;
	document.getElementById('moda').innerHTML=moda;
	document.getElementById('mediana').innerHTML=mediana;
}


// function 
//  		//Creamos la array donde metemos los numeros
//  		var alzada = new Array();
//  		alzada = [1.10, 1.67, 1.65, 1.68, 1.65];
 
//  		//Funcion que calcula la moda, si hi han 2 repetits retorna un -1
function calculamoda(array){
	//iniciamos las variables necesarias en todo el codigo
	var moda, moda2;
	var contador = 0, contador2 = 0;
	//Recorremos la array
	for (var x=0; x<array.length; x++){
		//Miramos que el numero cogido no sea el de la moda
		if(array[x] != moda){
			var contadorReinicia=0;
			//Recorremos la array para encontrar concordancias on el numero sacado de la array de X
			for(var i=0; i<array.length; i++){
				//cunado el numero sea igual al de la array de x le añadimos 1 al contador
				if (array[i] == array[x]) contadorReinicia++;
			}
			//si el contador que se reinicia nos da mas alto que el contador general añadimos el numero a la variable moda y cambiamos el contador general por el que reinicia
			if (contadorReinicia>contador){
				contador = contadorReinicia;
				moda = array[x];
			}
		}
	}
	//Miramos que no hayan 2 con la misma cantidad
	for ( var x=0; x<array.length; x++ ){
		//Miramos que el numero cogido no sea el de la moda
		if(array[x] != moda && array[x] != moda2){
			var contadorReinicia=0;
			//Recorremos la array para encontrar concordancias on el numero sacado de la array de X
		for(var i=0; i<array.length; i++){
				//cunado el numero sea igual al de la array de x le añadimos 1 al contador
				if (array[i] == array[x]) contadorReinicia++;
			}
			//si el contador que se reinicia nos da mas alto que el contador general añadimos el numero a la variable moda y cambiamos el contador general por el que reinicia
			if (contadorReinicia>contador2){
				contador2 = contadorReinicia;
				moda2 = array[x];
			}
			//Si tenemos 2 de la misma cantidad retornamos -1
			if (contador2 == contador) return -1;
		}
	}
	//Retornamos la moda!!!
	return moda;
}

 		// //Devolvemos la mediana de las alturas
 		// document.write("<br>La moda es: " + moda(alzada));
