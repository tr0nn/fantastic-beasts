let beasts = [];
let itemList = document.getElementById('items');
let cardsContainerList = document.getElementById('cards-container');

function addModalDate(e) {
  const beastName = document.getElementById('input-name').value;
  const beastPhone = document.getElementById('input-phone').value;

  //----------- Add button ის დროს უნიკალურია name და დუბლირება რომ არ მოხდეს.
  beasts.forEach(bePhone => {
    if (beastPhone === bePhone.phone || beastName === bePhone.name) {
      alert('A contact with this name or phone already exists!');
      closeModal();
      e.stopImmediatePropagation();
    }
  });

  //-------------------------------------------------------------------------------
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
          // h1 ის შექმნა
          let cardH1 = document.createElement('h1');
          cardH1.className = 'cardH1-className';
          cardH1.innerText = beast.name;

          //p ელემენტის შექმნა
          let cardP = document.createElement('p');
          cardP.className = 'clardP-className';
          cardP.innerHTML = 'phone : ' + beastPhone;

          //call button create
          let callButton = document.createElement('button');
          callButton.className = 'call-button';
          callButton.innerHTML = 'Call';
          callButton.onclick = event => {
            alert('Calling To : ' + beastName);
          };
          //delete button create
          let deleteButton = document.createElement('button');
          deleteButton.className = 'delete-button';
          deleteButton.innerHTML = 'Delete';

          deleteButton.onclick = event => {
            document.getElementById('card-' + beast.name).remove();
            document.getElementById('contactId-' + beastName).remove();
          };

          //Close button create
          let closeButton = document.createElement('button');
          closeButton.className = 'close-button';
          closeButton.innerHTML = 'Close';

          closeButton.onclick = () => {
            document.getElementById('card-' + beast.name).remove();
          };
          // creat new <li>
          const newNode = document.createElement('li');
          //უნიკალური რომ იყოს.
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
