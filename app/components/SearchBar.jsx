import React from 'react';

const SearchBar = (props) => (
  <div className='small-centered'>
    <input onChange={(e) => props.onUpdateText(e.target.value)} />
    <button className='button' onClick={props.fetchSongs}>Search</button>
  </div>
);

SearchBar.propTypes = {
  onUpdateText: React.PropTypes.func,
  fetchSongs: React.PropTypes.func
}

export default SearchBar;
