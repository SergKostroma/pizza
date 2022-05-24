// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	

})

const swiper = new Swiper('.swiper', {

	slidesPerView:auto,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable:true,
	  },
	  spaceBetween:10,
	loop: true,
	autoplay:{
		delay:3000,
	}
});
