$(function(){

	$('button').bind('click', function(){

		var altura = $('#altura').val();
		var peso = $('#peso').val();

		//Recoloca '.'(ponto) quando for digitado ','()vírgula
		altura = altura.replace(',','.');
		peso = peso.replace(',','.');

		//IMC = peso / altura²
		var imc = peso / (altura*altura);

		
		if(imc < 16){
			var traducao = 'Baixo peso, muito grave';
		} else if(imc >= 16 && imc < 17){
			var traducao = 'Baixo peso, grave';
		} else if(imc >= 17 && imc < 18.50){
			var traducao = 'Baixo peso';
		} else if(imc >= 18.50 && imc < 25){
			var traducao = 'Peso normal';
		} else if(imc >= 25 && imc < 30){
			var traducao = 'Sobrepeso';
		} else if(imc >= 30 && imc < 35){
			var traducao = 'Obesidade grau I';
		} else if(imc >= 35 && imc < 40){
			var traducao = 'Obesidade grau II';
		} else if(imc >= 40){
			var traducao = 'Obesidade grau III';
		}
		

		$('#resultado').html("Seu IMC é: "+imc+" kg/m² e seu status é: "+traducao);


	});

});