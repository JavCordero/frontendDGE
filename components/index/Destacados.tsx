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
  MDBRow,
} from "mdb-react-ui-kit";
import { MDBMask } from "mdbreact";
import React from "react";
import Slider from "react-slick";

export const Destacados = ({ titulo1, titulo2 }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="12" sm="9">
          <MDBContainer fluid className="shadow-5">
            <h2>{titulo1}</h2>
            <MDBCarousel showControls keyboard showIndicators fade>
              <MDBCarouselInner>
                <MDBCarouselItem itemId={0}>
                  <MDBCarouselElement
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                    alt="..."
                  />
                  <MDBCarouselCaption
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                    className="shadow-box-example hoverable"
                  >
                    <h5>First slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={1}>
                  <MDBCarouselElement
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    alt="..."
                  />
                  <MDBCarouselCaption
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                    className="shadow-box-example hoverable"
                  >
                    <h5>Second slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                  <MDBCarouselElement
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    alt="..."
                  />
                  <MDBCarouselCaption
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                    className="shadow-box-example hoverable"
                  >
                    <h5>slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </MDBCol>
        <MDBCol
          size="12"
          sm="3"
          className="index-noticias index-noticias-scroll"
        >
          <MDBContainer fluid className="shadow-5">
            <h2>{titulo2}</h2>
            <Slider {...settings}>
              <MDBCard background="dark" className="text-white">
                <MDBCardImage
                  overlay
                  src="https://mdbcdn.b-cdn.net/img/new/slides/017.jpg"
                  alt="..."
                />
                <MDBCardOverlay>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>Last updated 3 mins ago</MDBCardText>
                </MDBCardOverlay>
              </MDBCard>
              <MDBCard background="dark" className="text-white">
                <MDBCardImage
                  overlay
                  src="https://mdbcdn.b-cdn.net/img/new/slides/017.jpg"
                  alt="..."
                />
                <MDBCardOverlay>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>Last updated 3 mins ago</MDBCardText>
                </MDBCardOverlay>
              </MDBCard>
              <MDBCard background="dark" className="text-white">
                <MDBCardImage
                  overlay
                  src="https://mdbcdn.b-cdn.net/img/new/slides/017.jpg"
                  alt="..."
                />
                <MDBCardOverlay>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>Last updated 3 mins ago</MDBCardText>
                </MDBCardOverlay>
              </MDBCard>
              <MDBCard background="dark" className="text-white">
                <MDBCardImage
                  overlay
                  src="https://mdbcdn.b-cdn.net/img/new/slides/017.jpg"
                  alt="..."
                />
                <MDBCardOverlay>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>Last updated 3 mins ago</MDBCardText>
                </MDBCardOverlay>
              </MDBCard>
              <MDBCard background="dark" className="text-white">
                <MDBCardImage
                  overlay
                  src="https://mdbcdn.b-cdn.net/img/new/slides/017.jpg"
                  alt="..."
                />
                <MDBCardOverlay>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>Last updated 3 mins ago</MDBCardText>
                </MDBCardOverlay>
              </MDBCard>
              <MDBCard background="dark" className="text-white">
                <MDBCardImage
                  overlay
                  src="https://mdbcdn.b-cdn.net/img/new/slides/017.jpg"
                  alt="..."
                />
                <MDBCardOverlay>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>Last updated 3 mins ago</MDBCardText>
                </MDBCardOverlay>
              </MDBCard>
            </Slider>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
