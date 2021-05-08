const revKey1 = document.querySelector(".reviews__key1");
const revOpen1 = document.querySelector(".reviews__img-back1");

const revKey2 = document.querySelector(".reviews__key2");
const revOpen2 = document.querySelector(".reviews__img-back2");

const revKey3 = document.querySelector(".reviews__key3");
const revOpen3 = document.querySelector(".reviews__img-back3");

const revKey4 = document.querySelector(".reviews__key4");
const revOpen4 = document.querySelector(".reviews__img-back4");

revKey1.addEventListener('click', function () {
	this.classList.toggle('active');
	revOpen1.classList.toggle('active');
	if (this.classList.contains('active')) {
		this.innerHTML = "-4";
	}
	else {
		this.innerHTML = "+4"
	}
})

revKey2.addEventListener('click', function () {
	this.classList.toggle('active');
	revOpen2.classList.toggle('active');
	if (this.classList.contains('active')) {
		this.innerHTML = "-4";
	}
	else {
		this.innerHTML = "+4"
	}
})

revKey3.addEventListener('click', function () {
	this.classList.toggle('active');
	revOpen3.classList.toggle('active');
	if (this.classList.contains('active')) {
		this.innerHTML = "-4";
	}
	else {
		this.innerHTML = "+4"
	}
})

revKey4.addEventListener('click', function () {
	this.classList.toggle('active');
	revOpen4.classList.toggle('active');
	if (this.classList.contains('active')) {
		this.innerHTML = "-4";
	}
	else {
		this.innerHTML = "+4"
	}
})