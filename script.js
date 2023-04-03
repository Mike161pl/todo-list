const todoInput = document.querySelector('.header__input')
const alertInfo = document.querySelector('.header__alert--info')
const addBtn = document.querySelector('.header__add--btn')
const ulList = document.querySelector('.header__todo--list ul')
const allTasks = document.getElementsByTagName('li')
const popup = document.querySelector('.popup')
const popupInfo = document.querySelector('.popup__body--info')
const popupInput = document.querySelector('.popup__body--input')
const addPopupBtn = document.querySelector('.accept')
const closeTodoBtn = document.querySelector('.cancel')

const addNewTask = () => {
	if (todoInput.value !== '') {
		newTask = document.createElement('li')
		newTask.innerText = todoInput.value
		ulList.append(newTask)
		createToolsArea()
		todoInput.value = ''
		alertInfo.innerText = ''
	} else {
		alertInfo.innerText = 'Wpisz treść zadania!'
	}
}

const enterCheck = event => {
	if (event.keyCode === 13) {
		addNewTask()
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTask.appendChild(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.innerHTML = 'Edytuj'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.appendChild(completeBtn)
	toolsPanel.appendChild(editBtn)
	toolsPanel.appendChild(deleteBtn)
}

const checkClick = e => {
	if (e.target.classList.value !== '') {
		if (e.target.closest('button').classList.contains('complete')) {
			e.target.closest('li').classList.toggle('completed')
			e.target.closest('button').classList.toggle('completed')
		} else if (e.target.closest('button').classList.contains('edit')) {
			editTask(e)
		} else if (e.target.closest('button').classList.contains('delete')) {
			deleteTask(e)
		}
	}
}

const editTask = e => {
	oldTodo = e.target.closest('li')
	popupInput.value = oldTodo.firstChild.textContent

	popup.style.display = 'flex'
}

const changeTodo = () => {
	if (popupInput.value !== '') {
		oldTodo.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.innerText = ''
	} else {
		popupInfo.innerText = 'Musisz podać jakąś treść!'
	}
}

const deleteTask = e => {
	const deleteTodo = e.target.closest('li')
	deleteTodo.remove()

	if (allTasks.length === 0) {
		alertInfo.innerText = 'Brak zadań na liście.'
	}
}

const closePopup = () => {
	popup.style.display = 'none'
	popupInfo.innerText = ''
}

addBtn.addEventListener('click', addNewTask)
todoInput.addEventListener('keyup', enterCheck)
ulList.addEventListener('click', checkClick)
addPopupBtn.addEventListener('click', changeTodo)
closeTodoBtn.addEventListener('click', closePopup)
