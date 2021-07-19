import React from "react";
import Calendar, { addDays } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const events: any = [
  {
    id: 1,
    title: "event 1",
    start: new Date(),
    end: `2021-07-20`,
    info: "lorem loooooooremmmmfdsgdfsm",
  },
  {
    id: 2,
    title: "event 2",
    start: "2021-07-16T13:00:00",
    end: "2021-07-16T18:00:00",
    info: "lorem loooooooremmmmm",
    foto: "",
    gfdgfd: "fdgfd",
  },
  {
    id: 3,
    title: "event 3",
    start: "2021-08-17",
    end: "2021-08-20",
  },
];

export const Calendario = () => {
  return (
    <MDBContainer fluid className="mt-4">
      <MDBRow>
        <MDBCol size="7">
          <Calendar
            locale={esLocale}
            hiddenDays={[0]}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{ end: "prev,next,Salud,Deportes" }}
            customButtons={{
              Salud: {
                text: "Salud",
                click: () => console.log("filtro salud"),
              },
              Deportes: {
                text: "Deportes",
                click: () => console.log("filtro deportes"),
              },
            }}
            eventClick={(info) => {
              console.log(JSON.stringify(info.event.extendedProps));
            }}
          />
        </MDBCol>
        <MDBCol className="mt-5" size="5">
          {
            <Calendar
              locale={esLocale}
              hiddenDays={[0]}
              initialView="listWeek"
              plugins={[listPlugin]}
              events={events}
              headerToolbar={{ end: "", left: "" }}
              eventClick={(info) => {
                console.log(JSON.stringify(info.event.extendedProps));
              }}
            />
          }
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
