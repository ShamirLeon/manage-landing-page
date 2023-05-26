const Funcionality = ({ id, title, paragraph }) => {
  return (
    <div className="Funcionality">
      <div className="Funcionality__Header">
        <span>{id}</span>
        <h3>{title}</h3>
      </div>
      <p>{paragraph}</p>
    </div>
  );
};

export default Funcionality;
