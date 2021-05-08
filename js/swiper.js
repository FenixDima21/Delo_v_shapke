// !слайдер logotip
const logotipSlider = document.querySelector('.logotip__slider');

let logoSlider = new Swiper(logotipSlider, {
	//СТРЕЛКИ
	navigation: {
		nextEl: '.logotip__button-next',
		prevEl: '.logotip__button-prev'
	},

	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: true,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: true,

	//УПРАВЛЕНИЕ КОЛЕСОМ МЫШИ
	mousewheel: {
		//УВСТВИТЕЛЬНОСТЬ КОЛЕСА МЫШИ
		sensitivity: 1,
	},

	//АВТОВЫСОТА
	autoheight: false,

	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 1,

	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 1,

	//БЕСКОНЕЧНЫЙ СЛАЙДЕР
	loop: false,

	//СКОРОСТЬ
	speed: 700,

	effect: 'fade',
	//ДОПОЛНЕНИЕ К FADE
	fadeEffect: {
		//параллельная смена прозрачности
		crossFade: true,
	},

	breakpoints: {
		320: {
		},
	},
});

//
//!отдельные слайдеры products tab

const tabSlider1 = document.querySelector('.tab2__slider1-container');
const tabSlider2 = document.querySelector('.tab2__slider2-container');

let productTab1Slider = new Swiper(tabSlider1, {
	//СТРЕЛКИ
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: false,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: false,
	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 1,
	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 1,
	//БЕСКОНЕЧНЫЙ СЛАЙДЕР
	loop: false,
	//СКОРОСТЬ
	speed: 700,
	//ОТСТУП МЕЖДУ СЛАЙДАМИ
	spaceBetween: 0,
	//обновить свайпер при изменении элементов слайдера
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	// //АВТОПРОКРУТКА
	// autoplay: {
	// 	//пауза между прокруткой
	// 	delay: 1000,
	// 	//закончить на последнем слайде
	// 	stopOnLastSlide: false,
	// 	//отключить после ручного переключения
	// 	disableOnInteraction: false,
	// },
	breakpoints: {
		1301: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		751: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});

let productTab2Slider = new Swiper(tabSlider2, {
	//СТРЕЛКИ
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: false,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: false,
	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 1,
	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 1,
	//БЕСКОНЕЧНЫЙ СЛАЙДЕР
	loop: false,
	//СКОРОСТЬ
	speed: 700,
	//ОТСТУП МЕЖДУ СЛАЙДАМИ
	spaceBetween: 30,
	//обновить свайпер при изменении элементов слайдера
	observer: true,
	//обновить свайпер при изменении родительских элементов слайдера
	observerParents: true,
	//обновить свайпер при изменении дочерних элементов слайдера
	observerSlideChildren: true,

	// //АВТОПРОКРУТКА
	// autoplay: {
	// 	//пауза между прокруткой
	// 	delay: 1000,
	// 	//закончить на последнем слайде
	// 	stopOnLastSlide: false,
	// 	//отключить после ручного переключения
	// 	disableOnInteraction: false,
	// },
	breakpoints: {
		1301: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		751: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});

//задаем обновление слайдера tab2 на все кнопки 'tab' методом update
document.querySelectorAll('.tab').forEach(el => {
	el.addEventListener('click', () => {
		tabSlider1.style.display = 'block';
		tabSlider2.style.display = 'block';
		productTab1Slider.update();
		productTab2Slider.update();
	})
})

// !слайдер Steps

const stepsSlider = document.querySelector('.steps__slider');

let stepSlider = new Swiper(stepsSlider, {
	//СТРЕЛКИ
	navigation: {
		nextEl: '.steps__button-next',
		prevEl: '.steps__button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		//ФРАКЦИЯ
		type: 'fraction',
	},

	direction: 'vertical',

	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: false,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: false,

	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 2,

	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 2,

	//СКОРОСТЬ
	speed: 700,

	breakpoints: {
		431: {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
	},
});


// !слайдер Photos


const photosSlider = document.querySelector('.photos__slider');

let photoSlider = new Swiper(photosSlider, {
	//СТРЕЛКИ
	navigation: {
		nextEl: '.photo__button-next',
		prevEl: '.photo__button-prev'
	},
	pagination: {
		el: '.photos__slider-pagination',
		//ФРАКЦИЯ
		type: 'fraction',
	},

	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: true,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: false,

	effect: 'fade',
	//ДОПОЛНЕНИЕ К FADE
	fadeEffect: {
		//параллельная смена прозрачности
		crossFade: true,
	},

	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 1,

	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 1,

	//СКОРОСТЬ
	speed: 700,

	breakpoints: {
		320: {
		},
	},
});

// !слайдер Facts

const factsSlider = document.querySelector('.facts__slider');

let factSlider = new Swiper(factsSlider, {

	//СТРЕЛКИ
	navigation: {
		nextEl: '.facts__slider-button-next',
		prevEl: '.facts__slider-button-prev'
	},

	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: true,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: false,

	effect: 'fade',
	//ДОПОЛНЕНИЕ К FADE
	fadeEffect: {
		//параллельная смена прозрачности
		crossFade: true,
	},

	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 1,

	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 1,

	//СКОРОСТЬ
	speed: 700,

	breakpoints: {
		320: {
		},
	},
});

// !слайдер Services

const servicesSlider = document.querySelector('.services__slider');

let serviceSlider = new Swiper(servicesSlider, {
	//СТРЕЛКИ
	navigation: {
		nextEl: '.services__button-next',
		prevEl: '.services__button-prev'
	},

	pagination: {
		el: '.services__slider-pagination',
		//ФРАКЦИЯ
		type: 'fraction',
	},

	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: true,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: false,

	effect: 'fade',
	//ДОПОЛНЕНИЕ К FADE
	fadeEffect: {
		//параллельная смена прозрачности
		crossFade: true,
	},

	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 1,

	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 1,

	//СКОРОСТЬ
	speed: 700,

	breakpoints: {
		320: {
		},
	},
});

//! слайдер Benefits

const benefitsSlider = document.querySelector('.benefits__slider');

let benefitSlider = new Swiper(benefitsSlider, {
	//СТРЕЛКИ
	navigation: {
		nextEl: '.benefits__button-next',
		prevEl: '.benefits__button-prev'
	},

	pagination: {
		el: '.benefits__slider-pagination',
		//ФРАКЦИЯ
		type: 'fraction',
	},

	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: true,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: false,

	effect: 'fade',
	//ДОПОЛНЕНИЕ К FADE
	fadeEffect: {
		//параллельная смена прозрачности
		crossFade: true,
	},

	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 1,

	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 1,

	//СКОРОСТЬ
	speed: 700,

	breakpoints: {
		1200: {
		},
	},
});

// !слайдер REVIEWS

const reviewsSlider = document.querySelector('.reviews__slider-container');

let reviewSlider = new Swiper(reviewsSlider, {

	//СТРЕЛКИ
	navigation: {
		nextEl: '.reviews__slider-button-next',
		prevEl: '.reviews__slider-button-prev'
	},

	pagination: {
		el: '.reviews__slider-pagination',
		//ФРАКЦИЯ
		type: 'fraction',
	},

	//ВКЛЮЧЕНИЕ/ ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
	simulateTouch: false,
	//ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
	touchRatio: 1,
	//УГОЛ СРАБАТЫВАНИЯ СВАЙПА/ПЕРЕТАСКИВАНИЯ
	touchAngle: 45,
	//КУРСОР ПЕРЕТАСКИВАНИЯ
	grabCursor: true,
	//ПЕРКЛЮЧЕНИЕ ПРИ КЛИКЕ НА СЛАЙД
	slideToClickedSlide: false,

	//КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА /МОЖНО НЕ ЦЕЛЫЕ ЧИСЛА
	slidesPerView: 1,

	//КОЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
	slidesPerGroup: 1,

	//СКОРОСТЬ
	speed: 700,

	breakpoints: {
		320: {
		},
	},
});
