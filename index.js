var swiper = new Swiper(".mySwiper", {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints:{
				980: {
					slidesPerGroup: 3,
				    slidesPerView: 3,
				    spaceBetween: 30,
				},
				620: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 20,
				}
			}
		});