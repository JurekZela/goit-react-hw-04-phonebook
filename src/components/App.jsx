import { useState, useEffect, useMemo } from 'react'
import { ContactForm } from './Phonebook/Phonebook';
import { Title, Card } from './Contacts/Contacts-styled';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const localStorageKey = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() =>
    [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  );
  const [filter, setFilter] = useState('');
  const [isLoading, setLoading] = useState(false);

  const visibleContacts = useMemo(
    () => contacts.filter(
    ({ name }) => name.toLowerCase().includes(filter.toLocaleLowerCase())
  ),
   [contacts, filter]
   );

   useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));

    const savedContacts = localStorage.getItem(localStorageKey);

    if (savedContacts) { 
      setContacts(() => JSON.parse(savedContacts))
    }
   }, []);

   useEffect(prevContacts => {
       if (prevContacts !== contacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    }
   }, [contacts]);
   

 const onAdd = newContact => {
  const filteredAlreadyContact = contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());

    if (filteredAlreadyContact) {
      return alert(`${newContact.name} is already in contacts.`);
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

const searchContact = contact => setFilter(contact);

 const removeContact = contactId => setContacts(prevContacts => prevContacts.filter(({ id }) => id !== contactId));

      return (
      <Card>
        <ContactForm onAdd={onAdd} />
        <Title>Contacts</Title>
        <Filter filter={filter} onSearchContact={searchContact} />
        <ContactList list={visibleContacts}  removeContact={removeContact} />
        </Card>
      )
    };