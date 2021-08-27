import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Get every check button that exists
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //add listener
  button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = check
    ? 'Marcar como lida esta pergunta'
    : 'Excluir essa pergunta'
  modalDescription.innerHTML = check
    ? 'Tem certeza que deseja marcar como lida esta pergunta?'
    : 'Tem certeza que desjesa excluir essa pergunta? '
  modalButton.innerHTML = check ? 'Sim, marcar com lida' : 'Sim, excluir'
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  //Open modal
  modal.open()
}
