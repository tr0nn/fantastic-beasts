let beasts = [];
let itemList = document.getElementById('items');
let cardsContainerList = document.getElementById('cards-container');

function addModalDate(e) {
  const beastName = document.getElementById('input-name').value;
  const beastPhone = document.getElementById('input-phone').value;

  beasts.forEach(bePhone => {
    if (beastPhone === bePhone.phone || beastName === bePhone.name) {
      alert('A contact with this name or phone already exists!');
      closeModal();
      e.stopImmediatePropagation();
    }
  });

  if (beastName === '' || beastPhone === '') {
    alert('enter text!');
  } else {
    beasts.push({
      name: beastName,
      phone: beastPhone
    });

    let contact = document.createElement('button');
    contact.id = 'contactId-' + beastName;
    contact.className = 'contact-list';
    contact.innerText = beastName;

    let x = 1;
    contact.onclick = () => {
      beasts.forEach(beast => {
        if (beast.name === beastName && x == 1) {
          x = 2;
          // creat h1
          let cardH1 = document.createElement('h1');
          cardH1.className = 'cardH1-className';
          cardH1.innerText = beast.name;

          // creat p
          let cardP = document.createElement('p');
          cardP.className = 'clardP-className';
          cardP.innerHTML = 'phone : ' + beastPhone;

          //create call button
          let callButton = document.createElement('button');
          callButton.className = 'call-button';
          callButton.innerHTML = 'Call';
          callButton.onclick = event => {
            alert('Calling To : ' + beastName);
          };
          //create delete button
          let deleteButton = document.createElement('button');
          deleteButton.className = 'delete-button';
          deleteButton.innerHTML = 'Delete';

          deleteButton.onclick = event => {
            document.getElementById('card-' + beast.name).remove();
            document.getElementById('contactId-' + beastName).remove();
          };

          //create Close button
          let closeButton = document.createElement('button');
          closeButton.className = 'close-button';
          closeButton.innerHTML = 'Close';

          closeButton.onclick = () => {
            document.getElementById('card-' + beast.name).remove();
            x = 1;
          };
          // creat new <li>
          const newNode = document.createElement('li');
          newNode.id = 'card-' + beast.name;
          newNode.className = 'li-node';
          cardsContainerList.insertBefore(
            newNode,
            cardsContainerList.children[0]
          );

          newNode.appendChild(cardH1);
          newNode.appendChild(cardP);
          newNode.appendChild(callButton);
          newNode.appendChild(deleteButton);
          newNode.appendChild(closeButton);
          cardsContainerList.appendChild(newNode);
        }
      });
      document.getElementById('select-contacts').style.display = 'none';
    };
    itemList.appendChild(contact);

    closeModal();
  }
}
