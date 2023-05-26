import { hero } from "../../data/data.json";

import HeroImg from "../../assets/images/illustration-intro.svg";

const HeroC = (params) => {
  return (
    <main className="Hero">
      <img src={HeroImg} alt="Hero Img" className="Hero__Img"/>
      <h1 className="Hero__Title">{hero.title}</h1>
      <p className="Hero__Paragraph">{hero.paragraph}</p>
      <button className="Hero__Button">Get Started</button>
    </main>
  );
};

export default HeroC;
