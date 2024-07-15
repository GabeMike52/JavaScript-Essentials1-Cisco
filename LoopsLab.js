let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
let i;
let lastIndex = contacts.length - 1;
do {
    i = prompt('Choose an option: 1 - Show first contact, 2 - Show last contact, 3 - Show all contacts, 4 - Add a new contact. Click OK with no value inserted to exit the program.');
    if (i === '1') {
        console.log(`${contacts[0].name} ${contacts[0].phone} ${contacts[0].email}`);
    } else if (i === '2') {
        console.log(`${contacts[lastIndex].name} ${contacts[lastIndex].phone} ${contacts[lastIndex].email}`);
    } else if (i === '3') {
        for (const contact of contacts) {
            console.log(`${contact.name} ${contact.phone} ${contact.email}`);
        }
    } else if (i === '4') {
        const newContactName = prompt('Insert the contact name');
        const newContactPhone = prompt('Insert the phone number');
        const newContactEmail = prompt('Insert the email');
        if (newContactName === '' || newContactPhone === '' || newContactEmail === '') {
        alert('Error! Run again')
        } else {
            contacts.push({name: newContactName, phone: newContactPhone, email: newContactEmail});
            lastIndex = contacts.length - 1;
            console.log(contacts[lastIndex].name);
            console.log(contacts[lastIndex].phone);
            console.log(contacts[lastIndex].email);
        }
    }
} while (i);