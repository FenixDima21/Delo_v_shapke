+ function () {

	document.querySelector('.tab').classList.add('active')
	document.querySelector('.tab2').classList.add('active')

	function selectPanel(e) {
		var target = e.target.dataset.target

		document.querySelectorAll('.tab, .tab2').forEach(el => el.classList.remove('active'))
		e.target.classList.add('active')
		// console.log(document.querySelector('.' + target))
		document.querySelector('.' + target).classList.add('active')

	}

	document.querySelectorAll('.tab').forEach(el => {
		el.addEventListener('click', selectPanel)
	})

}()