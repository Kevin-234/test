const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})