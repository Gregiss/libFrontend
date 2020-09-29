//If is Clickable element
function isClickable(event){
	return event == 'click' ? true: false
}

var variablesAntigas = []

//Lib
function lib(selector){
	const self = {
		element: document.querySelector(selector) ? document.querySelector(selector) : null,
		variablesAntigas: [],
		bodyAntigo: null,
		innerHtml: (value) => {
			if(value != null){
				self.element.innerHTML = value
			}
		},
		value : () => {
			return self.element.value
		},
		html: () => {
			return self.element.innerText
		},
		on: (event, callback) => {
			const documentQuery = document.querySelectorAll(selector)
			for(let i = 0; i < documentQuery.length; i++){
				documentQuery[i].addEventListener(event, callback)
				isClickable(event) ? documentQuery[i].style.cursor = "pointer" : documentQuery[i].style.cursor = "default"
			}
		},
		hide: () => {
			self.element.style.display = "none"
		},
		show: () => {
			self.element.style.display = "block"
		},
		ready: (callback) => {
			window.onload = function() {
				callback()
			}
		},
		addClass: (value) => {
			if(value == null){
				self.element.getAttribute('class')
			} else{
				const documentQuery = document.querySelectorAll(selector)
				for(let i = 0; i < documentQuery.length; i++){	
					documentQuery[i].setAttribute('class', value)
				}
			}
		},
		removeClass: (value) => {
			if(value == null){
				self.element.getAttribute('class')
			} else{
				const documentQuery = document.querySelectorAll(selector)
				for(let i = 0; i < documentQuery.length; i++){	
					documentQuery[i].classList.remove(value)
				}
			}
		},
		hasClass: (value) => {
			if(value == null){
				return false
			} else{
				return document.querySelector("h3").getAttribute('class') == value ? true : false
			}
		},
		count: (array) => {
			return array.length
		},
		push: (array, push) => {
			array.push(push)
			return array
		},
		render: () => {
			var elements = document.querySelectorAll("variable");
			var array = []
			for (let i = 0; i < elements.length; i++) {
				array.push(elements[i].innerText)
			}
			variablesAntigas = array
			self.stateChange()
		},
		stateChange: () => {
			const documentQuery = document.querySelectorAll("variable");
			const array = variablesAntigas
			for (let i = 0; i < documentQuery.length; i++) {
				if(documentQuery[i].innerText != state[array[i]]){
					documentQuery[i].innerText = state[array[i]]
				}
			}
		},
		setState: (stateReceive, value) => {
			console.clear(value())
			state[stateReceive] = value()
			// if(typeof state[stateReceive] == 'object'){
			// 	console.clear(value())
			// 	state[stateReceive].push(value)
			// 	return
			// }
			// console.clear(value())
			// state[stateReceive] = value()
			self.stateChange()
		},
		component: (functionRender) => {
			const components = document.querySelectorAll(functionRender().nameComponent)
			for(let i = 0; i < components.length; i++){
				if(components[i] == null){
					return
				}
				components[i].innerHTML = functionRender().render
				components[i].addEventListener(functionRender().methods.mouse, functionRender().methods.function)
			}
			self.stateChange()
		},
		forceUpdate: () => {
			self.stateChange()
		},
		changeTitle: (title) => {
			document.title = title
		}
	}
	return self
}

lib().render()