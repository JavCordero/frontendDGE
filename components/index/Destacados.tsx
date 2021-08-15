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
import removeSpecialCharacters from "../../utils/removeSpecialCharacters";

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} destacado-slide__arrow`}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
};

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
    centerPadding: 0,
    dots: true,
    initialSlide: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <MDBContainer fluid className="mb-3">
      <MDBRow>
        <MDBCol size="12" sm="9" className="p-1">
          <MDBContainer>
            <TitleLine noLine>{titulo1}</TitleLine>
            <Slider {...settings2}>
              {/* {noticias.map((noticia) => (
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
                        pathname: `${path}noticias/${removeSpecialCharacters(
                          noticia.titulo
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
              ))} */}
              {noticias.map((noticia) => (
                <div key={noticia.id} className="destacado-slide">
                  <Image
                    src={`${host}${noticia.imagen}`}
                    alt="..."
                    height="720"
                    width="1280"
                    objectFit="cover"
                  />
                  <Link
                    href={{
                      pathname: `${path}noticias/${removeSpecialCharacters(
                        noticia.titulo
                      )}`,
                      query: { id: noticia.id },
                    }}
                    passHref
                  >
                    <div className="destacado-slide__content">
                      <h3 className="destacado-slide__content-titulo">
                        {noticia.titulo}
                      </h3>
                      <p className="destacado-slide__content-subtitulo">
                        {noticia.subtitulo}
                      </p>
                      <p className="destacado-slide__content-fecha">{`Creado el ${new Date(
                        noticia.created_at
                      ).getDate()} de ${new Date(
                        noticia.created_at
                      ).toLocaleDateString(undefined, {
                        month: "long",
                      })} de ${new Date(noticia.created_at).getFullYear()}`}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </MDBContainer>
        </MDBCol>
        <MDBCol
          size="12"
          sm="3"
          className="index-noticias index-noticias-scroll p-0 m-0"
        >
          <MDBContainer fluid className="p-0 m-0">
            <TitleLine noLine>{titulo2}</TitleLine>
            <iframe
              className="scrollable"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdge.ucn&tabs=timeline&width=300&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
