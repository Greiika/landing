$(function(){
  $('.slider').slick({
    prevArrow: ' <img class="slider__arrow slider__arrow-left" src="img/double-arrow-left.svg" alt="arrow-left">',
    nextArrow: ' <img class="slider__arrow slider__arrow-right" src="img/double-arrow-right.svg" alt="arrow-right">',
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1000,
    dots: true,
    //centerMode: true,
    variableWidth: true,
    responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
  });

    $('.menu-burger').on('click', function(){
        $('.menu__list').toggleClass('active');
    }); 
    $('.menu-burger').on('click', function(){
      $('.menu__button').toggleClass('active');
  }); 
});