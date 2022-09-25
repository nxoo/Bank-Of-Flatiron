/*
import {useEffect, useState} from "react";

function Search() {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <div className="ui large fluid icon input">
            <input
                type="text"
                placeholder="Search your Recent Transactions"
                onChange={() => console.log("Searching...")}
            />
            <i className="circular search link icon"></i>
        </div>
    );
}

export default Search;
*/
import React from "react";

function Search({ handleSearch }) {
    return (
        <div className="ui large fluid icon input">
            <input
                type="text"
                placeholder="Search your Recent Transactions"
                onChange={handleSearch}
            />
            <i className="circular search link icon"></i>
        </div>
    );
}

export default Search;