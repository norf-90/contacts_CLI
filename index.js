const { program } = require('commander');

const contactsService = require('./contacts.js');

const ivokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await contactsService.listContacts();
      console.log(contacts);
      break;

    case 'getById':
      const contact = await contactsService.getContactById(id);
      console.log(contact);
      break;

    case 'remove':
      const deletedContact = await contactsService.removeContact(id);
      console.log(deletedContact);
      break;

    case 'add':
      const newContact = await contactsService.addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'updateById':
      const updatedContact = await contactsService.updateContactById(id, name, email, phone);
      console.log(updatedContact);
      break;

    default:
      console.log('Unknown operation');
  }
};

program
  .option('-a, --action <type>')
  .option('-i, --id <type>')
  .option('-n, --name <type>')
  .option('-e, --email <type>')
  .option('-p, --phone <type>');

program.parse();
const options = program.opts();
ivokeAction(options);
