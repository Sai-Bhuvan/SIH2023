import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../Navbar/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Container
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "90vh" }}
        >
          <Card border="light">
            <Card.Title>Sign Up as</Card.Title>
            <Row>
              <Col>
                <Link to="/auth/user/register">
                  <Card style={{ width: "10rem" }}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>User</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/auth/rescue/register">
                  <Card style={{ width: "10rem" }}>
                    <Card.Img
                      variant="top"
                      src="holder.js/100px100?text=Image cap"
                    />
                    <Card.Body>
                      <Card.Title>Rescue Center</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
