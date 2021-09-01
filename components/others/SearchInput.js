/*
Componente que muestra un cuadro de busqueda (input) estilizado.

Los parametros que recibe son:

- placeholder: texto que aparece en el input.
- value: valor que se muestra en el input (si se requiere)
- onChange: funcion que se ejecuta al cambiar el valor del input.
- fn: función que se ejecuta cuando se presiona el icono de busqueda.
- className: clase personalizada del componente buscador (opcional podria usarse para añadir margin, o cosas asi con boostrap)
- style: estilo personalizado del componente buscador (opcional podria usarse para añadir margin, o cosas asi con boostrap)
- styleInput: estilo del input (opcional podria usarse para añadir margin, o cosas asi con boostrap)
- styleIcon: estilo del icono de busqueda (opcional podria usarse para añadir margin, o cosas asi con boostrap)
*/

const SearchInput = (props) => (
  <div className={`SearchInput ${props.className}`} style={props.style}>
    <input
      id="SearchInput__buscar"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      style={props.styleInput}
      aria-label="Search"
      onKeyPress={(e) => e.key === "Enter" && (props.fn ? props.fn() : null)}
    />
    <label
      style={props.styleIcon}
      htmlFor="SearchInput__buscar"
      className="fas fa-search"
      onClick={props.fn ? props.fn : null}
    />
  </div>
);

export default SearchInput;
