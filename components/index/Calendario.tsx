import React, { useState } from "react";
import Calendar, { addDays } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useEffect } from "react";
import LoadEventosNoPaginate from "../../hooks/useLoadEventosNoPaginate";
import { Placeholder } from "rsuite";

export const Calendario = () => {
  const [isLoadEventos, setIsLoadEventos] = useState(false);
  const [areaSelect, setAreaSelect] = useState("");
  const [eventList, setEventList] = useState([]);

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
    console.log(eventList);
  }, [areaSelect]);

  return (
    <MDBContainer fluid className="mt-4">
      {isLoadEventos ? (
        <MDBRow>
          <MDBCol size="12" md="8">
            <Calendar
              locale={esLocale}
              hiddenDays={[0]}
              contentHeight={"auto"}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={eventList}
              headerToolbar={{ end: "prev,next,Salud,Deportes" }}
              customButtons={{
                Salud: {
                  text: "Salud",
                  click: () => {
                    setAreaSelect("salud");
                    setEventList([]);
                  },
                },
                Deportes: {
                  text: "Deportes",
                  click: () => {
                    setAreaSelect("deportes");
                    setEventList([]);
                  },
                },
              }}
              eventClick={(info) => {
                console.log(info.event);
              }}
            />
          </MDBCol>
          <MDBCol className="mt-5" size="12" md="4">
            <Calendar
              locale={esLocale}
              height={screen.width < 768 ? "auto" : "100%"}
              hiddenDays={[0]}
              initialView="listMonth"
              plugins={[listPlugin]}
              events={eventList}
              headerToolbar={{ end: "", left: "" }}
              eventClick={(info) => {
                console.log(JSON.stringify(info.event.extendedProps));
              }}
            />
          </MDBCol>
        </MDBRow>
      ) : (
        <Placeholder.Graph active height={450} />
      )}
    </MDBContainer>
  );
};
