import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Slider from "react-slick";

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
        {imagenes.map((imagen) => (
          <div>
            <img
              className="w-100 px-5"
              style={{
                maxHeight: "550px",
                objectFit: "cover",
                minHeight: "550px",
              }}
              src={`/deportes/infraestructura/infraestructura${imagen}.jpg`}
            />
          </div>
        ))}
      </Slider>
    </MDBContainer>
  );
};
