
import AddSection from './Components/AddSection/AddSection/AddSection';
import ContactSection from './Components/AddSection/ContactSection/ContactSection';
import Filter from './Components/Filter/Filter';

export default function App() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddSection/>
        <Filter/>
         <ContactSection/>
      </div>
    )
  }

