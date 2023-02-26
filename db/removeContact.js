// const fs = require("fs/promises");
// const path = require("path");

// const filePath = path.join(__dirname, "contacts.json");



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

// module.exports = {
//   removeContact
// }
