var contactItem = document.getElementsByClassName('contact-list').textContent;

console.log(contactItem);

contactItem.addEventListener('click', openContact);

//modal ფანჯრის გახსნა
function openModalWindow() {
  document.getElementById('open-modal-window').style.display = 'flex';
}

//modal ფანჯრის დახურვა
function closeModalWindow() {
  document.getElementById('open-modal-window').style.display = 'none';
}

function openContact(e) {
  e.preventDefault();
  alert('yes!');
}
