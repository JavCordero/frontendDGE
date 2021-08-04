import {
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselElement,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import Slider from "react-slick";
import { host } from "../../public/js/host";
import TitleLine from "../others/TitleLine";
import Link from "next/link";
import Image from "next/image";

export const Destacados = ({ titulo1, titulo2, noticias, path }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    className: "center",
  };
  const settings2 = {
    arrowsBlock: false,
    centerPadding: 40,
    dots: true,
    initialSlide: true,
    infinite: true,
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="12" sm="9">
          <MDBContainer>
            <TitleLine noLine>{titulo1}</TitleLine>
            <Slider {...settings2}>
              {noticias.map((noticia) => (
                <MDBCard
                  className="text-white"
                  background="dark"
                  key={noticia.id}
                >
                  {console.log(noticia)}
                  <Image
                    src={`${host}${noticia.imagen}`}
                    className="mr-auto ml-auto"
                    alt="..."
                    height="450"
                    width="1000"
                    objectFit="cover"
                  />

                  <MDBCardOverlay className="d-flex flex-column justify-content-end">
                    <Link
                      href={{
                        pathname: `${path}noticias/${noticia.titulo.replaceAll(
                          " ",
                          "-"
                        )}`,
                        query: { id: noticia.id },
                      }}
                      passHref
                    >
                      <div className="texto-noticia rounded p-3">
                        <MDBCardTitle>{noticia.titulo}</MDBCardTitle>
                        <MDBCardText>{noticia.subtitulo}</MDBCardText>
                        <MDBCardText>
                          {`Creado el ${new Date(
                            noticia.created_at
                          ).getDate()} de ${new Date(
                            noticia.created_at
                          ).toLocaleDateString(undefined, {
                            month: "long",
                          })} de ${new Date(noticia.created_at).getFullYear()}`}
                        </MDBCardText>
                      </div>
                    </Link>
                  </MDBCardOverlay>
                </MDBCard>
              ))}
            </Slider>
          </MDBContainer>
        </MDBCol>
        <MDBCol
          size="12"
          sm="3"
          className="index-noticias index-noticias-scroll"
        >
          <MDBContainer fluid className="shadow-5">
            <TitleLine noLine>{titulo2}</TitleLine>
            <Slider {...settings}>
              {noticias.map((noticia) => (
                <MDBCard
                  background="dark"
                  className="text-white"
                  key={noticia.id}
                >
                  <MDBCardImage
                    overlay
                    src={`${host}${noticia.imagen}`}
                    alt="..."
                  />
                  <MDBCardOverlay className="texto-noticia">
                    <MDBCardTitle>{noticia.titulo}</MDBCardTitle>
                    <MDBCardText>{noticia.subtitulo}</MDBCardText>
                  </MDBCardOverlay>
                </MDBCard>
              ))}
            </Slider>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
