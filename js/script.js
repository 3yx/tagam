$(document).ready(function(){

	// кнопка доп загрузки рабочих проектов
	$('.showMore').click(function(){
		$(this).fadeOut();
		$('#loadMore').fadeIn(500);
	});

	// синхро 2х каруселей
	var $sync1 = $("#sync1"),
	$sync2 = $("#sync2"),
	flag = false,
	duration = 300;

	$sync1.owlCarousel({
		items: 1,
		loop:false,
		margin: 10,
		nav: true,
		navText: ["<img src='img/content/testimonials/back.png'>","<img src='img/content/testimonials/forward.png'>"],
		dots: false,
	}).on('changed.owl.carousel', function (e) {
		if (!flag) {
			flag = true;
			$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
			flag = false;
		}
	});

	$sync2.owlCarousel({
		loop:false,
		margin: 20,
		items: 5,
		center: true,
		dots: false,
		autoWidth: false,
	}).on('click', '.owl-item', function () {
		$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
	}).on('changed.owl.carousel', function (e) {
		if (!flag) {
			flag = true;
			$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
			flag = false;
		}
	});

	// плавная прокрутка по якорям
	$(function(){
		$('a[href^="#"]').click(function(){
			var target = $(this).attr('href');
			$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
			return false; 
		}); 
	});

});