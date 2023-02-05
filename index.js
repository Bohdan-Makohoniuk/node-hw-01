const fs = require("fs/promises");
const contacts = require("./contacts");



async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);


// Отримати всі дані - contactsPath.getAll;
// Отримати один контакт по id - contactsPath.getById;
// Отримати додати контакт - contactsPath.add;
// Оновити контакт по id - contactsPath.updateById;
// Видалити контакт по id - contactsPath.removeById; 