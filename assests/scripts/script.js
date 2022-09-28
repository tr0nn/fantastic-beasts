//modal ფანჯრის გახსნა
function openModalWindow() {
  document.getElementById('open-modal-window').style.display = 'flex';
}

//modal ფანჯრის დახურვა
function closeModalWindow() {
  document.getElementById('open-modal-window').style.display = 'none';
}
function closeModal() {
  document.getElementById('open-modal-window').style.display = 'none';
  document.getElementById('input-name').value = '';
  document.getElementById('input-phone').value = '';
}
