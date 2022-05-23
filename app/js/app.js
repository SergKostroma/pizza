// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

})

const swiper = new Swiper('.swiper', {

	slidesPerView:1.1,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable:true,
	  },
	  spaceBetween:10,
	loop: true,
});
