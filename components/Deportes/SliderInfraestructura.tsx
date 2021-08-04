import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Slider from "react-slick";
import Image from "next/image";

export const SliderInfraestructura = () => {
  const imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MDBContainer className="px-5 my-5" fluid>
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div key={index}>
            <Image
              className="w-100 px-5"
              width="4000"
              height="2000"
              objectFit="cover"
              alt="..."
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
