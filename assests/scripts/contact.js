let beasts = [];
let itemList = document.getElementById('items');

function addModalDate() {
  const beastName = document.getElementById('input-name').value;
  const beastPhone = document.getElementById('input-phone').value;

  if (beastName === '' || beastPhone === '') {
    alert('შეიყვანეთ ტექსტი');
  } else {
    beasts.push({
      name: beastName,
      phone: beastPhone
    });

    //აქ უნდა შევცვალო li ები button ებად
    let contact = document.createElement('li');
    contact.className = 'contact-list';
    contact.innerText = `${beastName}  ${beastPhone}`;

    contact.onclick = () => {
      console.log('hello world!');
    };

    itemList.appendChild(contact);

    closeModal();
  }
}

function closeModal() {
  document.getElementById('open-modal-window').style.display = 'none';
  document.getElementById('input-name').value = '';
  document.getElementById('input-phone').value = '';
}
