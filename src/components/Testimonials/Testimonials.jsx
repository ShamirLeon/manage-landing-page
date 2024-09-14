import { useState } from "react";
import { testimonials } from "../../data/data.json";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const screenWidth = window.innerWidth < 768 ? "mobile" : "desktop";

  return (
    <section className="Testimonials">
      <h2>What they&apos;ve said</h2>
      {screenWidth === "mobile" ? (
        <>
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
        </>
      ) : (
        <div className="Testimonials__Desktop">
          {testimonials.map((testimonial) => (
            <div className="Testimonials__Item" key={testimonial.id}>
              <img
                src={testimonial.photo}
                alt=""
                className="Testimonials__Photo"
              />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.comment}</p>
            </div>
          ))}
        </div>
      )}

      <a href="#" className="Hero__Button">
        Get Started
      </a>
    </section>
  );
};

export default Testimonials;
