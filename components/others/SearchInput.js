/*
Componente que muestra un cuadro de busqueda (input) estilizado.

Los parametros que recibe son:

- placeholder: texto que aparece en el input.
- value: valor que ingresa el usuario en el input (se espera un state (useState)).
- setValue: se espera un setState (useState). para manejar el input.
- fn: función que se ejecuta cuando se presiona el icono de busqueda.
- className: clase personalizada del input (opcional podria usarse para añadir margin, o cosas asi con boostrap)
*/

const SearchInput = (props) => (
  <div className="SearchInput" style={props.className}>
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
