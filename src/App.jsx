import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import MailboxList from "./components/MailboxList";
import MailboxDetail from "./components/MaiboxDetails";
import MailboxForm from "./components/MailboxForm";



const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBoxData) => {
    const newBox = {
      _id: mailboxes.length + 1, 
      ...newBoxData,
    };
    setMailboxes([...mailboxes, newBox]);
  };




  return ( 
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
      <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
      <Route path='mailboxes/:mailboxId' element={<MailboxDetail mailboxes={mailboxes}/>}/>
    </Routes>
    </>
  );
}

export default App;