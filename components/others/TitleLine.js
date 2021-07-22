const TitleLine = (props) => {
  return (
    <div className={`titleLine ${props.className}`}>
      <h2 className="titleLine__title">{props.children}</h2>
      <div className="titleLine__line"></div>
    </div>
  );
};

export default TitleLine;
