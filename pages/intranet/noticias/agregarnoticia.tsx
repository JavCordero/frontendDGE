import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Loader, Placeholder, Steps, Panel, ButtonGroup, Button } from "rsuite";
import { AuthContext } from "../../../context/AuthContext";
import CheckLogin from "../../../hooks/useCheckLogin";

const agregarnoticia = () => {
  const router = useRouter();
  const { checkLogin } = useContext(AuthContext);
  const [isLoged, setIsLoged] = useState(true);

  const [step, setStep] = React.useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  useEffect(() => {
    async function verificar() {
      const verificacion = await CheckLogin();
      if (verificacion.rol) {
        checkLogin(verificacion.rol);
        setIsLoged(false);
      } else {
        setIsLoged(true);
        router.push("/login");
      }
    }
    verificar();
  }, []);
  return (
    <>
      {isLoged ? (
        <>
          <Placeholder.Grid rows={5} columns={6} active />
          <Loader backdrop content="Cargando..." vertical />
        </>
      ) : (
        <div>
          <div className="p-5 text-center bg-light">
            <h1 className="mb-3">Agregar Nueva Noticia</h1>
          </div>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href="/intranet">Intranet</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href="/intranet/noticias">Noticias</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Nueva Noticia</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div>
            <Steps current={step}>
              <Steps.Item title="Datos" description="Noticia" />
              <Steps.Item title="Cuerpo" description="Noticia" />
              <Steps.Item title="Vista Previa" description="Noticia" />
            </Steps>
            <hr />
            <Panel header={`Step: ${step + 1}`}>hola hola</Panel>
            <hr />
            <ButtonGroup>
              <Button onClick={onPrevious} disabled={step === 0}>
                Previous
              </Button>
              <Button onClick={onNext} disabled={step === 2}>
                Next
              </Button>
            </ButtonGroup>
          </div>
        </div>
      )}
    </>
  );
};

export default agregarnoticia;
