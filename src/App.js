import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '03-04-2022'}, {weight: 176, date: '03-05-2022'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]; //...is a spread operator to include the objects.  If not spread it would include the nested array
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries displayEntries={entries}/>
      <AddEntryForm addNewEntry={addNewEntry}/>
    </div>
  );
}

export default App;
