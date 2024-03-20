import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/selector";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

// const filter = useSelector(selectNameFilter);

// const filteredContacts = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
