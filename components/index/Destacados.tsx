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

export const Destacados = ({ titulo1, titulo2 }) => {
  return (
    <div>
      <section className="mt-4 d-md-inline-flex">
        <article>
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
        </article>
        <aside className="w-100  index-noticias index-noticias-scroll">
          <MDBContainer fluid className="shadow-5">
            <h2>{titulo2}</h2>
            <MDBRow className="row-cols-3 row-cols-md-1 g-1">
              <div
                className="bg-image hover-overlay"
                style={{ maxWidth: "24rem" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask overlay d-flex"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  >
                    <h4 className="m-2 text-white d-flex align-items-end">
                      Prueba de texto
                    </h4>
                  </div>
                </a>
              </div>
              <div
                className="bg-image hover-overlay"
                style={{ maxWidth: "24rem" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask overlay d-flex"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  >
                    <h4 className="m-2 text-white d-flex align-items-end">
                      Prueba de texto
                    </h4>
                  </div>
                </a>
              </div>
              <div
                className="bg-image hover-overlay"
                style={{ maxWidth: "24rem" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask overlay d-flex"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  >
                    <h4 className="m-2 text-white d-flex align-items-end">
                      Prueba de texto
                    </h4>
                  </div>
                </a>
              </div>
              <div
                className="bg-image hover-overlay"
                style={{ maxWidth: "24rem" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask overlay d-flex"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  >
                    <h4 className="m-2 text-white d-flex align-items-end">
                      Prueba de texto
                    </h4>
                  </div>
                </a>
              </div>
              <div
                className="bg-image hover-overlay"
                style={{ maxWidth: "24rem" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask overlay d-flex"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  >
                    <h4 className="m-2 text-white d-flex align-items-end">
                      Prueba de texto
                    </h4>
                  </div>
                </a>
              </div>
              <div
                className="bg-image hover-overlay"
                style={{ maxWidth: "24rem" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask overlay d-flex"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  >
                    <h4 className="m-2 text-white d-flex align-items-end">
                      Prueba de texto
                    </h4>
                  </div>
                </a>
              </div>
              <div
                className="bg-image hover-overlay"
                style={{ maxWidth: "24rem" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask overlay d-flex"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  >
                    <h4 className="m-2 text-white d-flex align-items-end">
                      Prueba de texto
                    </h4>
                  </div>
                </a>
              </div>
            </MDBRow>
          </MDBContainer>
        </aside>
      </section>
    </div>
  );
};
