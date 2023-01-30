import React from 'react'
const SearchBar = ({ keyword, onChange }) => {
    const BarStyle = {
        width: "20rem", background: "#FFFFFF", border: "2px solid #939597", padding: "0.5rem", borderRadius: "6px"
    };
    return (
        <input
            style={BarStyle}
            key="search-bar"
            value={keyword}
            placeholder={"Search courses..."}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
export default SearchBar;