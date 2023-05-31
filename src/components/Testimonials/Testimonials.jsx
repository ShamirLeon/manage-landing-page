import { useState } from "react";
import { testimonials } from "../../data/data.json";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="Testimonials">
      <h2>What they've said</h2>
      <div className="Testimonials__Item" key={index}>
        <img
          src={testimonials[index].photo}
          alt=""
          className="Testimonials__Photo"
        />
        <h3>{testimonials[index].name}</h3>
        <p>{testimonials[index].comment}</p>
      </div>
      <div className="Inputs">
        {testimonials.map((testimonial, _index) => (
          <label className="radio-btn" key={testimonial.id}>
            <input
              type="radio"
              name="Test"
              onClick={() => {
                setIndex(_index);
              }}
            />
            <span
              className={`checkmark ${_index === index ? "show" : ""}`}
            ></span>
          </label>
        ))}
      </div>

      <a href="#" className="Hero__Button">Get Started</a>
    </section>
  );
};

export default Testimonials;
