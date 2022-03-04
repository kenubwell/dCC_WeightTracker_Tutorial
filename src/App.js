import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTrackerprops from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '03-04-2022'}, {weight: 176, date: '03-05-2022'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]; //...is a spread operator to include the objects.  If not spread it would include the nested array
    setEntries(tempEntries);
  }

  return (
    <div className ='container-fluid'> 
      <div className = 'row'>
        <h3 style ={{'margin' : '1em'}}>Weight 
        <small className = "text-muted">Tracker</small></h3> 
        <div className ='col-md-6'>
          <div className = 'border-box'>
            <DisplayEntries displayEntries={entries}/>
          </div>
          <div className = 'border-box'>
            <AddEntryForm addNewEntry={addNewEntry}/>
          </div>
        </div>
        <div className ='col-md-6'>
          <div className = 'border-box'>
            <EntriesChartTrackerprops parentEntries={entries}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
