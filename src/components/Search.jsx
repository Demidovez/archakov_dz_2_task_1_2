import React from "react";

function Search(props) {
  const [searchValue, setSearchValue] = React.useState();

  // eslint-disable-next-line
  React.useEffect(() => props.onSearch(searchValue), [searchValue]);

  const onChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const resetValue = () => {
    setSearchValue("");
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={onChange}
        className="form-control"
        placeholder="Search..."
      />
      {searchValue && (
        <div className="reset-search" onClick={resetValue}>
          &#x2715;
        </div>
      )}
    </div>
  );
}

export default Search;
