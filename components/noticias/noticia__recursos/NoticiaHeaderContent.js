import styled from "@emotion/styled";
/*
¿Seccion primera y medio?
Esta seccion debe ir dentro de la seccion NoticiaHeader, 
sin embargo es opcional y podria utilizarse otro componente dentro de NoticiaHeader, 
se propone este componente si se requiere.
los parametros que recibe son:
  - title: titulo de la noticia
  - src: url de la imagen
  - alt: texto alternativo de la imagen
  - children: texto que se mostrara en la descripcion
*/

const NoticiaHeaderContent = (props) => {
  const Container = styled.div`
    position: relative;
    display: block !important;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    overflow: hidden;
  `;
  const Imagen = styled.img`
    width: 100%;
    max-height: inherit;
    object-fit: cover;
    background-position: center;
  `;

  const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 4px;
  `;

  const Titulo = styled.h2`
    //max font size
    font-size: min(3.5vw, 2.1rem);
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
  `;
  const Descripcion = styled.p`
    font-size: min(3.3vw, 1.8rem);
    color: white;
    text-align: center;
    line-height: 100%;
    padding: 0;
    margin: 0;
  `;

  return (
    <Container>
      <Imagen
        src={props.src ? props.src : "/images/noImage.jpg"}
        alt={props.alt ? props.alt : "imagen"}
      />
      <Contenido>
        <Titulo>{props.title ? props.title : "SIN TITULO"}</Titulo>
        <Descripcion>
          {props.children ? props.children : "SIN DESCRIPCION"}
        </Descripcion>
      </Contenido>
    </Container>
  );
};

export default NoticiaHeaderContent;
