import React from "react";

const SearchButton = props => {
  return (
    <React.Fragment>
      <input
            type={props.type}
            className={props.class}
            value={props.value}
            onClick={e => props.args ? props.clickHandler(...props.args, e) : props.clickHandler(e)}
          />
    </React.Fragment>
  );
}

export default SearchButton;