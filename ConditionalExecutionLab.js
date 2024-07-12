
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
const choice = prompt('Choose an option: 1 - Show first contact, 2 - Show last contact, 3 - Add a new contact');
let lastIndex = contacts.length - 1;
if (choice === '1') {
    console.log(contacts[0].name);
    console.log(contacts[0].phone);
    console.log(contacts[0].email);
} else if (choice === '2') {
    console.log(contacts[lastIndex].name);
    console.log(contacts[lastIndex].phone);
    console.log(contacts[lastIndex].email);
} else if (choice === '3') {
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
} else {
    alert('You fool, choose between the three options');
}
