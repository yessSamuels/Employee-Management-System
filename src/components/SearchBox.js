import React from "react";

const styles = {
    searchBox: {
        margin: "2rem auto",
        display: "block",
        height: "2rem"
    }
}

export default function SearchBox(props) {
  return (
    <div  className="mb-5">
        <form  className="form-inline my-2 my-lg-0">
           <input style = {styles.searchBox} className="form-control mr-sm-2" 
           type="search" placeholder="Search" aria-label="Search"  
           onChange={props.handleInputChange} 
            name="search" value={props.search}
          />
        </form>
    </div>
  );
}