import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Misha Kumari </span>
            from <span className="purple"> Gurgaon, India.</span>
            <br />
            I am currently majoring in Software Engineering at Arizona State University
            <br />
            I have worked as a Software Engineer II at Dell Technologies for 2.10 years. Moajority of my work was developing enterprise application intergration system. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Conspiracy Theories.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Misha Kumari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
