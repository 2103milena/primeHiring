import React from 'react';


const SelectFilter = ({ status, setStatus }) => {

    const statusChangeHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className="select">
            <select
                onChange={statusChangeHandler}
                value={status}
            >
                <option value="all">All</option>
                <option value="hired">Hired</option>
                <option value="notHired">Not Hired</option>
            </select>
        </div>
    )
}

export default SelectFilter;