import { main } from "../../data/data.json";
import Funcionality from "./Funcionality";

const MainC = () => {
  return (
    <main className="Main">
      <h2>{main.title}</h2>
      <p>{main.paragraph}</p>
      <div className="Funcionalities__Container">
        {main.funcionalities.map((e) => (
          <Funcionality id={e.id} title={e.title} paragraph={e.paragraph} key={e.id} />
        ))}
      </div>
    </main>
  );
};

export default MainC;
