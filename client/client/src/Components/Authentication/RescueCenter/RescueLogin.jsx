import React from "react";
import NavBar from "../../Navbar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";

const formStyle = {
  maxWidth: "400px", // Adjust the maximum width as needed
  width: "100%",
};

function RescueLogin() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <Container className="d-flex justify-content-center mt-5">
        <Form style={formStyle}>
          <h3 className="mb-3 fs-1 fw-normal">Sign in </h3>
          <Form.Group controlId="formName">
            <Form.Label>username</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>password</Form.Label>
            <Form.Control type="text" placeholder="Enter your password" />
          </Form.Group>

          <Button variant="secondary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default RescueLogin;
