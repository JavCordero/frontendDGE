/*
Tercera seccion de noticia, recibe un div y dentro estara uno o mas button,
por cada div se genera una seccion de botones, y cada seccion puede tener uno o mas botones ej:
<NoticiaBotones>
  <div>
    <button>boton1</button>
    <button>boton2</button>
  </div>
  <div>
    <button>boton3</button>
    <button>boton4</button>
    <button>boton5</button>
  </div>
</NoticiaBotones>
*/

const NoticiaBotones = (props) => (
  <div className="noticia__botones">{props.children}</div>
);

export default NoticiaBotones;
