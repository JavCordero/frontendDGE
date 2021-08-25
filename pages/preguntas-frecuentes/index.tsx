import TitleLine from "../../components/others/TitleLine";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useState } from "react";
import Link from "next/link";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import { useRouter } from "next/router";

const Index = () => {
  const [seccion, setSeccion] = useState("salud");
  const router = useRouter();
  return (
    <div>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Preguntas Frecuentes</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <div className="preguntasFrecuentes bg-light shadow-5 rounded text-dark">
        <TitleLine className="mb-3">Preguntas Frecuentes</TitleLine>
        {/* esto es para los cuadros de seleccion de opciones de preguntas por area, usa el mismo estilo que los cuadros de opciones en atenciones de salud */}
        <div className="salud-atencion__opciones-grupo">
          <button
            value="deportes"
            className="salud-atencion__opcion"
            onClick={(e: any) => setSeccion(e.target.value)}
          >
            Deportes
          </button>
          <button
            value="salud"
            className="salud-atencion__opcion"
            onClick={(e: any) => setSeccion(e.target.value)}
          >
            Salud
          </button>
        </div>

        <MDBAccordion alwaysOpen initialActive="panelsStayOpen-collapse1">
          {/* SALUD */}
          {seccion === "salud" && (
            <div>
              <TitleLine noLine className="mb-2">
                Salud
              </TitleLine>
              <MDBAccordionItem
                collapseId="panelsStayOpen-collapse"
                className="text-justify"
                headerTitle="¿Pregunta SALUD 1?"
              >
                <p>
                  La respuesta a la pregunta es que si. porque es una pregunta
                  de salud. y es una pregunta de salud. y es una pregunta de
                  salud. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quam vero accusamus minima neque quisquam id
                  consequuntur fugiat est temporibus laborum.
                </p>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId="panelsStayOpen-collapse"
                className="text-justify"
                headerTitle="¿Pregunta SALUD 2?"
              >
                <p>La respuesta a la pregunta es que no.</p>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId="panelsStayOpen-collapse"
                className="text-justify"
                headerTitle="¿Pregunta SALUD 3?"
              >
                <p>La respuesta a la pregunta es que no.</p>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId="panelsStayOpen-collapse"
                className="text-justify"
                headerTitle="¿Pregunta SALUD 4?"
              >
                <p>La respuesta a la pregunta es que no.</p>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId="panelsStayOpen-collapse"
                className="text-justify"
                headerTitle="¿Pregunta SALUD 5?"
              >
                <p>La respuesta a la pregunta es que no.</p>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId="panelsStayOpen-collapse"
                className="text-justify"
                headerTitle="¿Pregunta SALUD 6?"
              >
                <p>La respuesta a la pregunta es que no.</p>
              </MDBAccordionItem>
            </div>
          )}
          {/* DEPORTES */}
          {seccion === "deportes" && (
            <div>
              <TitleLine noLine className="mb-2">
                Deportes
              </TitleLine>
              <MDBAccordionItem
                collapseId="panelsStayOpen-collapse"
                className="text-justify"
                headerTitle="¿Pregunta deporte 1?"
              >
                <p>La respuesta a la pregunta es que si.</p>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId="panelsStayOpen-collapse"
                className="text-justify"
                headerTitle="¿Pregunta deporte 2?"
              >
                <p>La respuesta a la pregunta es que no.</p>
              </MDBAccordionItem>
            </div>
          )}
        </MDBAccordion>
        {/* Aca nuevamente se usa el mismo estilo que link de destacados por lo que se reutiliza */}
        <div onClick={() => router.back()}>
          <p className="destacados__irNoticias pb-4">Volver</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
