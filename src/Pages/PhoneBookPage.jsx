import { useState, useEffect } from 'react';
import { ContactForm } from 'components/PhoneBook/PhoneBook';
import { Title, Card } from '../components/Contacts/Contacts-styled';
import { ContactList } from '../components/Contacts/Contacts';
import { Filter } from '../components/Filter/Filter';

const localStorageKey = 'contacts';

export default function PhoneBookPage () {

      const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem(localStorageKey)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filter, setFilter] = useState('');

  const addInLocalStorageContacts = () =>
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));

  useEffect(addInLocalStorageContacts, [contacts]);

  const onAdd = newContact =>
    contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : setContacts(prevContacts => [...prevContacts, newContact]);

  const searchContact = contact => setFilter(contact);

  const removeContact = contactId =>
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

    return (
            <Card>
      <ContactForm onAdd={onAdd} />
      <Title>Contacts</Title>
      <Filter filter={filter} onSearchContact={searchContact} />
      <ContactList list={visibleContacts} removeContact={removeContact} />
    </Card>
    );
};