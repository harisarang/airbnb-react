import React, { useState } from 'react'
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleTcon from '@material-ui/icons/People';

// Date Picker 
function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]}
                    onChange={handleSelect} />
            <h2>
                Number of Guests
                <PeopleTcon />   
            </h2>
            <input min={0} defaultValue={2} type='number' />
            <Button>Search Airnb</Button>
        </div>
    )
}

export default Search
