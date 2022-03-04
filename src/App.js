import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '03-04-2022'}, {weight: 176, date: '03-05-2022'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
    </div>
  );
}

export default App;
