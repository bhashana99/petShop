import { FaSearch } from 'react-icons/fa'
import "../index.css"
import  { useState } from 'react';


const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      <div className="search-icon" onClick={handleSearchIconClick}>
      <FaSearch id='search-icon2'/>
      </div>
      {isExpanded && (
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => console.log(e.target.value)} 
        />
      )}
    </div>
  );
};

export default SearchBar;
