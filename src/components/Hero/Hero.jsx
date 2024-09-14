import { hero } from "../../data/data.json";

import HeroImg from "../../assets/images/illustration-intro.svg";

const HeroC = () => {
  return (
    <section className="Hero">
      <div  className="Hero__Img">
        <img src={HeroImg} alt="Hero Img"/>
      </div>
      <div>
      <h1 className="Hero__Title">{hero.title}</h1>
      <p className="Hero__Paragraph">{hero.paragraph}</p>
      <button className="Hero__Button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroC;
