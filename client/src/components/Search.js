import React from 'react';
import Glyphs from 'glyphicons';

function Search() {
  return (
    <div className="input-group mb-3" style={{ width: '30%' }}>
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Search
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder={Glyphs.magnifyingGlass}
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>
  );
}

export default Search;
