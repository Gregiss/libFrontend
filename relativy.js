function isClickable(event){
	return event == 'click' ? true: false
}

function Relativo(object)
{
  var state = object
  this.setState = setState;
  this.show = show;

  function show(state) {
    return state[state]
  }

  function setState(state, value) {
    state[state] = value;
  }
}

var variablesAntigas = []

function lib(selector){
	const self = {
		element: document.querySelector(selector) ? document.querySelector(selector) : null,
		variablesAntigas: [],
		bodyAntigo: null,
		innerHtml: (value) => {
			if(value != null){
				self.element.innerText = value
			}
		},
		html: () => {
			return self.element.innerText
		},
		on: (event, callback) => {
			self.element.addEventListener(event, callback)
			isClickable(event) ? self.element.style.cursor = "pointer" : self.element.style.cursor = "default"
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
				self.element.setAttribute('class', value)
			}
		},
		removeClass: (value) => {
			if(value == null){
				self.element.getAttribute('class')
			} else{
				document.querySelector("h3").classList.remove("red")
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
		setState: (state, value) => {
			state[state] = value
			self.stateChange()
			return
		}
	}
	return self
}

lib().render()