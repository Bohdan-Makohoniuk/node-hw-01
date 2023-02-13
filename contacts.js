// const listContacts = require("./listContacts");
// const getContactById = require("./getContactById");
// const removeContact = require("./removeContact");
// const addContact = require("./addContact");




const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}

// async function listContacts() {
//   const data = await fs.readFile(contactsPath);
//   const contacts = JSON.parse(data);
//   return contacts;
// }

// async function getContactById(contactId) {
//   const contacts = await listContacts();
//   const contactIdToString = String(contactId);
//   const contactByID = contacts.find((contact) => contact.id === contactIdToString);
//   if (!contactByID) {
//     return null;
//   }
//   return contactByID;
// }

// async function removeContact(contactId) {
//   const contacts = await listContacts();
//   const contactIdToString = String(contactId);
//   const index = contacts.findIndex((item) => item.id === contactIdToString);
//   if (index === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return result;
// }

// async function addContact(name, email, phone) {
//   const contacts = await listContacts();
//   const newContact = { id: v4(), name, email, phone };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContact;
// }

// module.exports = { listContacts, getContactById, removeContact, addContact };

