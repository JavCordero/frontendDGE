import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Slider from "react-slick";
import Image from "next/image";
import TitleLine from "../others/TitleLine";

export const SliderInfraestructura = () => {
  const imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <MDBContainer className="px-5" fluid>
      <TitleLine className="mb-2">Imagenes</TitleLine>
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div key={index}>
            <Image
              className="w-50 px-5"
              width="4000"
              height="2000"
              objectFit="cover"
              alt="..."
              //center image Image Prop

              src={
                `/deportes/infraestructura/infraestructura${imagen}.jpg` as any
              }
            />
          </div>
        ))}
      </Slider>
    </MDBContainer>
  );
};
