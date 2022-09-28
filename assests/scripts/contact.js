let beasts = [];
let itemList = document.getElementById('items');
let cardsContainerList = document.getElementById('cards-container');

function addModalDate(e) {
  const beastName = document.getElementById('input-name').value;
  const beastPhone = document.getElementById('input-phone').value;

  //----------- Add button ის დროს უნიკალურია name და დუბლირება რომ არ მოხდეს.
  beasts.forEach(bePhone => {
    if (beastPhone === bePhone.phone) {
      alert('A contact with this name already exists!');
      closeModal();
      e.stopImmediatePropagation();
    }
  });
  //-------------------------------------------------------------------------------
  if (beastName === '' || beastPhone === '') {
    alert('შეიყვანეთ ტექსტი');
  } else {
    beasts.push({
      name: beastName,
      phone: beastPhone
    });

    let contact = document.createElement('button');
    contact.className = 'contact-list';
    contact.innerText = beastName;

    contact.onclick = () => {
      beasts.forEach(beast => {
        if (beast.name === beastName) {
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
            // event.target - button
            // event.target.parentNode - li
            // event.target.parentNode.getElementsByTagName('p')[0]; - paragraph
            // use innerText and parse the string to get phone number
            //console.log(event.target.parentNode.getElementsByTagName('p')[0]);
            alert('Calling To : ' + beastName);
          };
          //delete button create
          let deleteButton = document.createElement('button');
          deleteButton.className = 'delete-button';
          deleteButton.innerHTML = 'Delete';

          deleteButton.onclick = event => {
            alert(event);
            document.getElementById('items').firstElementChild.remove();
          };

          //Close button create
          let closeButton = document.createElement('button');
          closeButton.className = 'close-button';
          closeButton.innerHTML = 'Close';

          closeButton.onclick = event => {
            for (var i = 0; i < beasts.length; i++) {
              let paragraphs =
                document.body.getElementsByClassName('cardH1-className');
              Array.from(paragraphs).map(el => {
                if (el.textContent == beasts[i].name) {
                  console.log(el);
                  el.parentElement.remove();
                }
              });

              //if (cardH1.textContent == beasts[i].name) {
              //const list = document.getElementById('cards-container');
              //list.removeChild(list.children[0]);
              //}
            }
          };
          // creat new <li>
          const newNode = document.createElement('li');
          newNode.className = 'li-node';
          cardsContainerList.insertBefore(
            newNode,
            cardsContainerList.children[0]
          );

          // //DOM ში ჩაგდება
          // if (contact.textContent === cardH1.textContent) {
          //   alert('same');
          // } else {
          newNode.appendChild(cardH1);
          newNode.appendChild(cardP);
          newNode.appendChild(callButton);
          newNode.appendChild(deleteButton);
          newNode.appendChild(closeButton);
          cardsContainerList.appendChild(newNode);
          //}
        }
      });
      document.getElementById('select-contacts').style.display = 'none';
    };
    itemList.appendChild(contact);

    closeModal();
  }
}
