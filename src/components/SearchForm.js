import React from "react";

function SearchForm(props) {
    return (
      <form>
        <div className="form-group">
          {/*<label style={{display: "inline-block"}} htmlFor="search">Search:</label>*/}
          <input
            
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Employees by Last Name"
            id="search"
          />
          <br />
          {/*<button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
    </button>*/}
        </div>
      </form>
    );
  }
  
  export default SearchForm;