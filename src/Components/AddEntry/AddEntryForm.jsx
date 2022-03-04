import React, { useState } from 'react';
import './AddEntryForm.css';

const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0); //state variables for the form
    const [date, setDate] = useState(''); //state variables for the form

    function handleSubmit(event){
        event.preventDefault(); //this prevents the page from refreshing when the submit button is pressed
        let newEntry = {
            weight: weight,
            date: date
        }
        console.log(newEntry);
        props.addNewEntry(newEntry);
    }

    // the event.target.value allows for the user's values to be intaked into the state Functions
    // the parseFloat converts the value from a string to an integer
    return (  
        <form onSubmit = {handleSubmit} className ='form-grid'>
            <div className = "form-group">
                <label>Weight</label>
                <input type = 'number' className = "form-control" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/> 
            </div>
            <div className = "form-group">
                <label>Date</label>
                <input type = 'date' className = "form-control" value = {date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <button type = 'submit' className = "btn btn-primary" style={{'margin-top':'1em'}}>Add</button>
        </form>
    );
}
 
export default AddEntryForm;