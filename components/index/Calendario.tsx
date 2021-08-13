import React, { useRef, Ref, useState, createRef } from "react";
import Calendar, { addDays } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useEffect } from "react";
import LoadEventosNoPaginate from "../../hooks/useLoadEventosNoPaginate";
import { Placeholder } from "rsuite";
import FullCalendar from "@fullcalendar/react";
import { LegacyRef } from "react";
import { Modal } from "react-bootstrap";
import { host } from "../../public/js/host";
import Image from "next/image";

export const Calendario = () => {
  const [isLoadEventos, setIsLoadEventos] = useState(false);
  const [areaSelect, setAreaSelect] = useState("");
  const [eventList, setEventList] = useState([]);
  const [lgShow, setLgShow] = useState(false);

  const toggleShow = () => setLgShow(!lgShow);
  const [eventSelect, setEventSelect]: any = useState({
    endStr: "",
    extendedProps: {
      area: "",
      cuerpo: "",
      desc_imagen: "",
      imagen: "",
      tags: [{ name: "" }],
      user: { name: "" },
    },
    id: "",
    startStr: "",
    title: "",
  });

  const deleteItem = () => {
    setEventList([]);
    eventList.length = 0;
  };

  const fullCalendar1: LegacyRef<FullCalendar> = createRef();
  const fullCalendar2: LegacyRef<FullCalendar> = createRef();

  const cargarEvento = async (area) => {
    const eventosArray = await LoadEventosNoPaginate(area);
    console.log(eventosArray);
    if (eventosArray.length >= 0) {
      eventosArray.forEach((evento: any) => {
        let newEvent = {
          id: evento.id,
          title: evento.titulo,
          start: new Date(evento.inicio),
          end: new Date(evento.fin),
          color: evento.color,
          area: evento.area.name,
          cuerpo: evento.cuerpo,
          desc_imagen: evento.desc_imagen,
          imagen: evento.imagen,
          tags: evento.tags,
          user: evento.user,
        };

        eventList.push(newEvent);
      });
    }
    setEventList([...eventList]);
  };

  useEffect(() => {
    setIsLoadEventos(false);

    const EventosListos = async () => {
      const eventosArray = await LoadEventosNoPaginate(areaSelect);
      console.log(eventosArray);
      if (eventosArray.length >= 0) {
        eventosArray.forEach((evento) => {
          let newEvent = {
            id: evento.id,
            title: evento.titulo,
            start: new Date(evento.inicio),
            end: new Date(evento.fin),
            color: evento.color,
            area: evento.area.name,
            cuerpo: evento.cuerpo,
            desc_imagen: evento.desc_imagen,
            imagen: evento.imagen,
            tags: evento.tags,
            user: evento.user,
          };
          eventList.push(newEvent);
        });
        setIsLoadEventos(true);
      }
    };
    EventosListos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MDBContainer fluid className="mt-4">
      {isLoadEventos ? (
        <MDBRow>
          <MDBCol size="12" md="8">
            <Calendar
              locale={esLocale}
              ref={fullCalendar1}
              hiddenDays={[0]}
              contentHeight="auto"
              dayMaxEventRows={4}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={eventList}
              headerToolbar={{
                start: "title,Salud,Deportes,Beneficios,Todos",
                end: "prev,next",
              }}
              customButtons={{
                Salud: {
                  text: "Salud",
                  click: async () => {
                    deleteItem();
                    cargarEvento("salud");
                  },
                },
                Deportes: {
                  text: "Deportes",
                  click: () => {
                    deleteItem();
                    cargarEvento("deportes");
                  },
                },
                Beneficios: {
                  text: "Beneficios",
                  click: () => {
                    deleteItem();
                    cargarEvento("beneficios");
                  },
                },
                Todos: {
                  text: "Ver Todos",
                  click: () => {
                    deleteItem();
                    cargarEvento("");
                  },
                },
                prev: {
                  click: () => {
                    fullCalendar1.current.getApi().prev();
                    fullCalendar2.current.getApi().prev();
                  },
                },
                next: {
                  click: () => {
                    fullCalendar1.current.getApi().next();
                    fullCalendar2.current.getApi().next();
                  },
                },
              }}
              eventClick={(info) => {
                setEventSelect(info.event);
                setLgShow(true);
              }}
            />
          </MDBCol>
          <MDBCol className="mt-5" size="12" md="4">
            <Calendar
              locale={esLocale}
              ref={fullCalendar2}
              height={screen.width < 768 ? "auto" : "600px"}
              hiddenDays={[0]}
              initialView="listMonth"
              plugins={[listPlugin]}
              events={eventList}
              headerToolbar={{ end: "", left: "" }}
              eventClick={(info) => {
                setEventSelect(info.event);
                setLgShow(true);
              }}
            />
          </MDBCol>
        </MDBRow>
      ) : (
        <Placeholder.Graph active height={450} />
      )}
      <Modal
        size="xs"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{ zIndex: 100, border: 0 }} closeButton>
          <b>{eventSelect.title}</b>
        </Modal.Header>
        <Modal.Body>
          {eventSelect.extendedProps.imagen ? (
            <img
              src={`${host}${eventSelect.extendedProps.imagen}`}
              className="w-100 m-0"
              alt="..."
            />
          ) : null}

          <br />
          <p className="m-0">
            Inicio evento:{" "}
            {eventSelect.startStr
              ? new Date(eventSelect.startStr).toLocaleString(undefined, {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })
              : null}
          </p>
          <p className="m-0">
            Termino evento:{" "}
            {eventSelect.endStr
              ? new Date(eventSelect.endStr).toLocaleString(undefined, {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })
              : new Date(eventSelect.startStr).toLocaleString(undefined, {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
          </p>
          <h5>
            <b>Detalles:</b>
          </h5>
          <div
            className="se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable"
            dangerouslySetInnerHTML={{
              __html: eventSelect.extendedProps.cuerpo,
            }}
          ></div>
          <p>
            {" "}
            Tags:
            {eventSelect.extendedProps.tags.map((tag, index) => (
              <span key={index}>#{tag.name} </span>
            ))}
          </p>
        </Modal.Body>
      </Modal>
    </MDBContainer>
  );
};
