const SearchInput = (props) => (
  <div className="SearchInput" style={props.style}>
    <input
      id="SearchInput__buscar"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      style={props.styleInput}
    />
    <label
      style={props.styleIcon}
      htmlFor="SearchInput__buscar"
      className="fas fa-search"
      onClick={props.fn}
    />
  </div>
);

export default SearchInput;