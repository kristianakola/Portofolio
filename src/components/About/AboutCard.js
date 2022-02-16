import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kristiana Kola </span>
            from <span className="purple"> Fier, Albania.</span>
            <br />I am a graduate in Computer Science from International University of Struga.
            <br />
            <br />
            Apart from programming and designing, some other activities that I like to do...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going out with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TV series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing volleyball
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Make a difference, be sure to leave your footprint!"{" "}
          </p>
          <footer className="blockquote-footer">Kristiana Kola</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
