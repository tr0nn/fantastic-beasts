let beasts = [];
let itemList = document.getElementById('items');

function addModalDate(){
    
    const beastName = document.getElementById('input-name').value;
    const beastPhone = document.getElementById('input-phone').value;

    if(beastName == "" || beastPhone == ""){
        alert("შეიყვანეთ ტექსტი");
    }else{

        const newBeast = {
            name: beastName,
            phone: beastPhone
        };
        beasts.push(newBeast);

        //აქ უნდა შევცვალო li ები button ებად
        let bttn = document.createElement('button');
        bttn.className = 'contact-list';
        bttn.appendChild(document.createTextNode(beastName + " " + beastPhone));
        itemList.appendChild(bttn);


        //alert(beasts[0].name + beasts.length);

        // close ღილაკზე დაჭერისას რომ დაიხუროს modal ფანჯარა
        document.getElementById("open-modal-window").style.display ="none";
        //modal ფანჯრის დახურვის მერე გასუფთავდეს input 
        document.getElementById('input-name').value = '';
        document.getElementById('input-phone').value = '';
    };
};


