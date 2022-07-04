import React from "react";
import Button from "../../../components/Button";
import Section from "../../../components/Section";

const About = () => {
  return (
    <div>
      <img src="" alt="about-belema" />
      <Section title="About" align_left>
        <div className="pb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
          vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
          expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
          officiis maxime?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          atque incidunt eveniet nisi beatae aliquid illo magni ullam animi
          vero, eius cum debitis hic doloribus assumenda ducimus? Ducimus,
          expedita, maiores velit quo facilis qui hic voluptatum voluptas ea
          officiis maxime?
        </p>
        </div>
        <Button>About me</Button>
      </Section>
    </div>
  );
};

export default About;
