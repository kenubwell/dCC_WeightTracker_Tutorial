const DisplayEntries = (props) => { //Good practice to name the Component the same as the File Name
    return (  
        <table>
        <thead>
            <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {props.parentEntries.map((entry, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
            return (
                <tr>
                <td>{index + 1}</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
                </tr>
            )
            })}
        </tbody>
        </table>    
    );
}
 
export default DisplayEntries;