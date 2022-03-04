import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = (props) => {

    const [chartData, setChartDate] = useState([]);

    useEffect(() =>{
        let tempChartData = props.parentEntries.map(entry =>{ //utilizing this useEffect to pull and reformat data being provided from the Parent
            return [entry.date, entry.weight];
        })
        
        setChartDate(tempChartData);
    }, [props.parentEntries]) //this prevents the useEffect run endless as a infinite loop

    return (  
        <Chart
        chartType="LineChart"
        data={[["Date", "Weight"], ...chartData]} //spread apart to prevent nested arrays
        width="100%"
        height="400px"
        legendToggle
        />
    );
}
 
export default EntriesChartTracker;