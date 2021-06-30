import "../styles/globals.css";
import "../styles/custom.scss";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import * as React from "react";
import NavbarPage from "../components/layout/NavbarPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavbarPage>
      <Component {...pageProps} />
    </NavbarPage>
  );
}
export default MyApp;
