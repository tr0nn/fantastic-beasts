//open modal window
function openModalWindow() {
  document.getElementById('open-modal-window').style.display = 'flex';
}

//close modal window
function closeModalWindow() {
  document.getElementById('open-modal-window').style.display = 'none';
}
function closeModal() {
  document.getElementById('open-modal-window').style.display = 'none';
  document.getElementById('input-name').value = '';
  document.getElementById('input-phone').value = '';
}
