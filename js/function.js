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
		case 'jaleamixta' 		:jaleamixta++;		break;
		case 'arrozconpollo' 	:arrozconpollo++;	break;
		case 'ceviche' 			:ceviche++;			break;
	}
	loadData();
} 

	


 
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

function loadData()
{
	var increment =20;
	 //document.getElementById('ajidegallina').dataset.skill=ajidegallina*5;
	document.getElementById('ajidegallina').style.width=increment+ajidegallina  + "%";
	document.getElementById('causarellena').style.width=increment+causarellena  + "%";
	document.getElementById('estofadodepollo').style.width=increment+estofadodepollo  + "%";
	document.getElementById('rocotorelleno').style.width=increment+rocotorelleno  + "%";
	document.getElementById('lomosaltado').style.width=increment+lomosaltado  + "%";
	document.getElementById('polloalabraza').style.width=increment+polloalabraza  + "%";
	document.getElementById('jaleamixta').style.width=increment+jaleamixta  + "%";
	document.getElementById('arrozconpollo').style.width=increment+arrozconpollo  + "%";
	document.getElementById('ceviche').style.width=increment+ceviche  + "%";
	 

	 document.getElementById('ajidegallina').innerHTML=ajidegallina;
	document.getElementById('causarellena').innerHTML=causarellena;
	document.getElementById('estofadodepollo').innerHTML=estofadodepollo;
	document.getElementById('rocotorelleno').innerHTML=rocotorelleno;
	document.getElementById('lomosaltado').innerHTML=lomosaltado;
	document.getElementById('polloalabraza').innerHTML=polloalabraza;
	document.getElementById('jaleamixta').innerHTML=jaleamixta;
	document.getElementById('arrozconpollo').innerHTML=arrozconpollo;
	document.getElementById('ceviche').innerHTML=ceviche;



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
function reset(){
	ajidegallina=0;
	causarellena=0;
	estofadodepollo=0;
	rocotorelleno=0;
	lomosaltado=0;
	polloalabraza=0;
	jaleamixta=0;
 	arrozconpollo=0;
	ceviche=0;
	loadData();
}

// 
!function() {
	  var h = document.querySelector('.rating-details-histogram');
	  
	  // setTimeout 0 is required to yeild so that the animation happens.  Maybe it's just better to use a CSS animation instead.
	  window.setTimeout(function() {
	    //h.classList.remove('collapsed');
	  }, 0);
	  
}();