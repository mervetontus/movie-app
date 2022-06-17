import React from "react";

const SearchBox=(props)=>{
return(
    <div className="col col-4-sm">
        <input className="form-control" 
        type="text"
        placeholder="Type to search..."
        value={props.value}
        onChange={(e)=> props.setSearchValue(e.target.value)}
        >
        </input>

    </div>
);
}

export default SearchBox;