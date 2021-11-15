import React from "react";
import { fetchData } from "../../assats/js";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import { Container, Row } from "react-bootstrap";

export default function Homepage({ authorized, profile }) {
  return (
    <Container className="homepage">
      <Sidebar authorized={authorized} />
      <Feed authorized={authorized} profile={profile} />
      <Widget />
    </Container>
  );
}
