import { useEffect, useState } from "react";
import styled from "styled-components";

const NoticiasFilter = (props) => {
  const [opcion, setOpcion] = useState("Fecha");
  const [drop, setDrop] = useState(false);
  useEffect(() => {
    window.onclick = () => {
      if (drop) {
        setDrop(false);
      }
    };
  }, [drop]);

  const MyFilterContent = styled.div`
    position: relative;
    height: 35px;
    width: 150px;
    z-index: 100;
    cursor: pointer;
    & div {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      display: ${drop ? "flex" : "none"};
      height: 100%;
      width: 100%;
      cursor: pointer;
    }
    & div:first-child {
      border-radius: ${drop ? "5px 5px 0px 0px" : "5px"};
      justify-content: space-between;
      display: flex;
    }
    & div:last-child {
      border-radius: 0 0 5px 5px;
    }
    & .fas {
      font-size: 25px;
    }
    & i,
    span {
      z-index: -1;
    }
  `;

  const Option = styled.div`
    font-weight: bold;
    border: 2px solid black;
    position: absolute;
  `;

  const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
  `;

  const handdleClick = (e) => {
    if (!drop) {
      setDrop(true);
    }
    const opcion_ = e.target.dataset.value;
    setOpcion(opcion_);
    props.fn(opcion_);
  };

  return (
    <MyFilterContent>
      <Option data-value={opcion} onClick={handdleClick}>
        <Background style={{ background: "#abcff3" }} />
        <i
          className={`far fa-clock ${
            opcion === "Destacados" && "fa-star"
          } ml-2`}
        ></i>
        <span>{opcion}</span>
        <i className={`fas fa-angle-${drop ? "up" : "down"} mr-2`}></i>
      </Option>

      <Option data-value="Fecha" onClick={handdleClick} style={{ top: "35px" }}>
        <Background style={{ background: "#cdeff5" }} />

        <i className="far fa-clock ml-2 mr-2"></i>
        <span>Fecha</span>
      </Option>

      <Option
        data-value="Destacados"
        onClick={handdleClick}
        style={{ top: "70px" }}
      >
        <Background style={{ background: "#fdf4d7" }} />
        <i className="far fa-star ml-2 mr-2"></i>
        <span>Destacados</span>
      </Option>
    </MyFilterContent>
  );
};

export default NoticiasFilter;
