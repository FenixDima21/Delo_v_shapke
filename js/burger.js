/*    кнопка бургер    */

const burgerButton = document.querySelector('.header__burger');
const headerBox = document.querySelector('.header__wrapper');
const bodyBurger = document.querySelector('body');
const headerLinks = document.querySelectorAll('.header__link');
const popupLink = document.querySelector('.popup-link');
const headerLink = document.querySelector('.header__phone-link');

burgerButton.addEventListener('click', function (event) {
	burgerButton.classList.toggle('active');
	headerBox.classList.toggle('active');
	bodyBurger.classList.toggle('lock');
	// if (bodyBurger.classList.contains('lock')) {}
	//  else {
	// 	bodyBurger.classList.add('lock');
	// };

}
);

for (item of headerLinks) {
	item.addEventListener('click', function () {
		if (burgerButton.classList.contains('active')) {
			burgerButton.classList.remove('active');
		};
		if (headerBox.classList.contains('active')) {
			headerBox.classList.remove('active');
		};
		if (bodyBurger.classList.contains('lock')) {
			bodyBurger.classList.remove('lock');
		};
	}
	)
}

popupLink.addEventListener('click', function () {
	if (burgerButton.classList.contains('active')) {
		burgerButton.classList.remove('active');
	};
	if (headerBox.classList.contains('active')) {
		headerBox.classList.remove('active');
	};
	if (bodyBurger.classList.contains('lock')) {
		if (pupLink.classList.contains('active')) {}
		else { 
			bodyBurger.classList.remove('lock');
		}
	};
})

headerLink.addEventListener('click', function () {
	if (burgerButton.classList.contains('active')) {
		burgerButton.classList.remove('active');
	};
	if (headerBox.classList.contains('active')) {
		headerBox.classList.remove('active');
	};
	if (bodyBurger.classList.contains('lock')) {
		bodyBurger.classList.remove('lock');
	};
})