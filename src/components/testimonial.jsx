import React from "react";
import TestimonialCard from "./testimonials-card";

export default function testimonial() {
  
  return (
    <>
      {testimonials.map((testimonial, i) => (
        return(
            <TestimonialCard
            key={i}
            name={testimonial.name}
            title={testimonial.title}
            description={testimonial.description}
          />
        );
      ))}
    </>
  );
}
