import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/AuthContext";
import CheckLogin from "../../../hooks/useCheckLogin";

const Index = () => {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(true);
  const [loadData, setLoadData] = useState(false);
  const [item, setItem] = useState([]);
  const { checkLogin } = useContext(AuthContext);
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
    async function LoadItem() {
      /* const item = await LoadEventos(); */
      /* if (item.data) {
          setItem(item.data);
          setLoadData(true);
        } */
    }
    verificar();
    LoadItem();
  }, [loadData]);
  return <div></div>;
};

export default Index;
