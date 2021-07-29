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
  - widthRem: ancho en rem de la imagen (se espera un int, es opcional)
  - children: texto que se mostrara en la descripcion
*/

const NoticiaHeaderContent = (props) => {
  const widthImagenRem = props.widthRem ? props.widthRem : 45;
  const relacionImagen = 0.5625;
  const heightImagenRem = widthImagenRem * relacionImagen;
  const responsiveMaxRem = widthImagenRem + widthImagenRem * 0.18;
  const Container = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: ${widthImagenRem + "rem"};
    height: ${heightImagenRem + "rem"};
    @media screen and (max-width: ${responsiveMaxRem + "rem"}) {
      width: 100%;
      height: auto;
    }
  `;
  const Imagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: min(3.1vw, ${widthImagenRem * 0.04 + "rem"});
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
  `;
  const Descripcion = styled.p`
    font-size: min(3vw, ${widthImagenRem * 0.03 + "rem"});
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
