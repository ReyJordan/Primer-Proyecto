$(document).ready(function(){

	var banner = {
		padre: $('#banner'),
		numeroSlider: $('#banner').children('.slider').length,
		posicion: 1
	}

	var info = {
		padre: $('#info'),
		numeroSlider: $('#info').children('.slider').length,
		posicion: 1
	}

	banner.padre.children('.slider').first().css({
		'left': 0
	});
	info.padre.children('.slider').first().css({
		'left': 0
	});

	var altoBanner = function(){
		var alto = banner.padre.children('.slider').outerHeight();

		banner.padre.css({
			'height': alto + 'px'
		});

		console.log(alto);

	}

	var altoInfo = function(){
		var alto = info.padre.children('.active').outerHeight();

		info.padre.animate({
			'height': alto + 'px'
		});

		console.log(alto);

	}

	var altoContenedor = function(){

		var altoVentana = $(window).height();

		if (altoVentana <= $('#contenedor').outerHeight() + 200) {

			$('#contenedor').css({
				'height': ''
			});

		} else{

			$('#contenedor').css({
				'height': altoVentana + 'px'
			});

		}
	}

	altoBanner();
	altoInfo();
	altoContenedor();

	$(window).resize(function(){
		altoBanner();
		altoInfo();
		altoContenedor();
	});

	$('#info').children('.slider').each(function(){
		$('#botones').append('<span>');
	});

	$('#botones').children('span').first().addClass('active');

	 //console.log(banner.numeroSlider);

//-------------------------
//--------Banner-----------
//-------------------------

	//boton siguente
	$('#banner-next').on('click', function(e){
		e.preventDefault();

		if(banner.posicion < banner.numeroSlider){

			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left': '0'
			});

			$('#banner .active').prev().animate({
				'left': '-100%'
			});

			banner.posicion = banner.posicion + 1;
		} else {

			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner .active').animate({
				'left': '-100%'
			});

			$('#banner .active').removeClass('active');
			banner.padre.children('.slider').first().addClass('active').animate({
				'left': 0
			});

			banner.posicion = 1;

		}

	});

	//boton anterior
	$('#banner-prev').on('click',function(e){
		e.preventDefault();

		if (banner.posicion > 1) {

			banner.padre.children().not('.active').css({
				'left': '-100%'
			});

			$('#banner .active').animate({
				'left': '100%'
			});

			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left': 0
			});

			banner.posicion = banner.posicion - 1

		}else{

			banner.padre.children().not('.active').css({
				'left': '-100%'
			})

			$('#banner .active').animate({
				'left': '100%'
			});

			$('#banner .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				'left': 0
			});

			banner.posicion = banner.numeroSlider;

		}

	});

//-------------------------
//--------Info-----------
//-------------------------

	//boton siguente
	$('#info-next').on('click', function(e){
		e.preventDefault();

		if(info.posicion < info.numeroSlider){

			info.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#info .active').removeClass('active').next().addClass('active').animate({
				'left': '0'
			});

			$('#info .active').prev().animate({
				'left': '-100%'
			});

			$('#botones').children('.active').removeClass('active').next().addClass('active');

			info.posicion = info.posicion + 1;

		} else {

			info.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#info .active').animate({
				'left': '-100%'
			});

			$('#info .active').removeClass('active');
			info.padre.children('.slider').first().addClass('active').animate({
				'left': 0
			});

			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').first().addClass('active');

			info.posicion = 1;

		}

		altoInfo();

	});

	//boton anterior
	$('#info-prev').on('click',function(e){
		e.preventDefault();

		if (info.posicion > 1) {

			info.padre.children().not('.active').css({
				'left': '-100%'
			});

			$('#info .active').animate({
				'left': '100%'
			});

			$('#info .active').removeClass('active').prev().addClass('active').animate({
				'left': 0
			});

			$('#botones').children('.active').removeClass('active').prev().addClass('active');

			info.posicion = info.posicion - 1

		}else{

			info.padre.children().not('.active').css({
				'left': '-100%'
			})

			$('#info .active').animate({
				'left': '100%'
			});

			$('#info .active').removeClass('active');
			info.padre.children().last().addClass('active').animate({
				'left': 0
			});

			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').last().addClass('active');

			info.posicion = info.numeroSlider;

		}

		altoInfo();

	});

});

