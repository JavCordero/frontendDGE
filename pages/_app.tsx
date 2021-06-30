import "../styles/globals.css";
import "../styles/custom.scss";
import Head from "next/head";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import type { AppProps } from "next/app";
import * as React from "react";
import NavbarPage from "../components/layout/NavbarPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* --FRAGMENTO CORRESPONDIENTE AL HEAD DE LA PAGINA -- aca se pueden importar estilos css globales. */}
      <Head>
        <title>Plataforma DGE</title>
        <meta name="description" content="Plataforma DGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/dgeico.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>
      <NavbarPage>
        <Component {...pageProps} />
      </NavbarPage>
    </>
  );
}
export default MyApp;
