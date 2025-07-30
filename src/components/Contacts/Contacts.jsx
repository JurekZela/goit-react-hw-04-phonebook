import { ListContact, RemoveButton } from './Contacts-styled';

export default function ContactList ({ list, removeContact }) {
  return (
    <ul>
      {list.map(({ id, name, number }) => {
        return (
          <div key={id}>
            <ListContact>
              {name}: {number}
            </ListContact>
            <RemoveButton onClick={() => removeContact(id)}>
              Delete
            </RemoveButton>
          </div>
        );
      })}
    </ul>
  );
};
