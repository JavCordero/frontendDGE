import React from "react";
import TitleLine from "../../components/others/TitleLine";

const noticia = () => {
  return (
    <div className="noticia">
      <div className="noticia__header">
        <img
          className="noticia__header-img"
          src="/images/noticias/lorem5.jpg"
          alt=""
        />
      </div>
      <div className="noticia__links"></div>
      <div className="noticia__botones">
        <button>A+</button>
        <button>A-</button>
        <button>Imprimir</button>
      </div>
      <div className="noticia__fecha">
        <p>20/Abril/2021</p>
      </div>
      <div className="noticia__content">
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          iusto, culpa sequi alias ipsa consequuntur facilis cumque eos nihil
          eveniet omnis molestiae aliquam. Veniam quibusdam praesentium fuga
          veritatis! Vel, quis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          iusto, culpa sequi alias ipsa consequuntur facilis cumque eos nihil
          eveniet omnis molestiae aliquam. Veniam quibusdam praesentium fuga
          veritatis! Vel, quis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Officiis pariatur doloremque quos commodi omnis
          quaerat voluptate porro. Perspiciatis, nulla optio. Omnis nesciunt
          neque, autem officiis ducimus sequi pariatur consequuntur alias?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          iusto, culpa sequi alias ipsa consequuntur facilis cumque eos nihil
          eveniet omnis molestiae aliquam. Veniam quibusdam praesentium fuga
          veritatis! Vel, quis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis, sunt a? Repudiandae dolorum at tempora
          illum aliquam veritatis voluptate debitis vel explicabo neque!
          Provident nihil quis dolorum, tempore doloribus possimus. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Ullam quo nemo, sapiente
          obcaecati quod nulla a. Eum at aspernatur sunt vitae doloribus.
          Similique sequi unde est, asperiores vel hic qui.
        </p>
      </div>
      <div className="noticia__tags">
        <p>#noticia</p>
        <p>#evento</p>
      </div>
      <div className="noticia__volver">
        <p>Volver a noticias</p>
      </div>
      <div className="noticia__relacionados">
        <TitleLine>Relacionados</TitleLine>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          iusto, culpa sequi alias ipsa consequuntur facilis cumque eos nihil
          eveniet omnis molestiae aliquam. Veniam quibusdam praesentium fuga
          veritatis! Vel, quis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis, sunt a? Repudiandae dolorum at tempora
          illum aliquam veritatis voluptate debitis vel explicabo neque!
          Provident nihil quis dolorum, tempore doloribus possimus. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Ullam quo nemo, sapiente
          obcaecati quod nulla a. Eum at aspernatur sunt vitae doloribus.
          Similique sequi unde est, asperiores vel hic qui.
        </p>
      </div>
    </div>
  );
};

export default noticia;
