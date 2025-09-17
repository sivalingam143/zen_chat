import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
import { Tables } from "../components/Tables";
import API_DOMAIN from "../config/config";
import companyId from "../config/companyId";
import moment from "moment";

const Dashboard = () => {
  return (
    <>
      <Container fluid className="position-relative">
        <Row>
          <Col>
            <PageTitle PageTitle={"Dashboard"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
