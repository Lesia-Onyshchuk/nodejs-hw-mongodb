import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload) => {
  const contact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
  );
  if (!contact || !contact.value) {
    return null;
  }
  return { contact: contact.value, isNew: Boolean(contact ? 201 : 200) };
};
