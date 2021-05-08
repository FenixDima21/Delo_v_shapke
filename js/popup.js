const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll(".lock-padding");
const body = document.querySelector('body');

let unlock = true;

const timeout = 600;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			// если ссылка имеет класс thanks то открываем попап thanks
			if (popupLink.classList.contains('thanks-link')) {

				const popupForm = document.getElementById('popup__form');
				const inputName = document.querySelector('.popup__input-name');
				const inputTel = document.querySelector('.popup__input-tel');

				// проверяем на валидность инпуты
				popupForm.addEventListener("submit", function (e) {
					if (inputName.validity.valid, inputTel.validity.valid) {
						const thanksPopup = document.getElementById('popupthanks');
						popupOpen(thanksPopup);
						e.preventDefault();
					}
				});
			}
			else {
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				popupOpen(curentPopup);
				e.preventDefault();
			};
		});
	}
}


//Поиск элемента 'header__wrapper' с классом "active", если такой имеется при закрытие попапа,
// то body не разблакируется
const headerActive = document.querySelector('.header__wrapper');

//Разблокируем body 

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		// если бургер активен, то body оставляем заблокированым
		if (headerActive.classList.contains('active')) { }
		else {
			body.classList.remove('lock');
		}
		body.style.paddingRight = '0px';
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');

		if (doUnlock) {
			bodyUnLock();
		}
	}
}

//Блокируем body 

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.header').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

/*закрытие попапа по кнопке крестик*/

const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener("click", function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}


/*закрытие попапа по кнопке esc*/

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});