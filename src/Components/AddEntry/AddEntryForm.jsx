import React, { useState } from 'react';

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
        <form onSubmit = {handleSubmit}>
            <label>Weight</label>
            <input type = 'number' value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/> 
            <label>Date</label>
            <input type = 'date' value = {date} onChange={(event) => setDate(event.target.value)}/>
            <button type = 'submit'>Add</button>
        </form>
    );
}
 
export default AddEntryForm;