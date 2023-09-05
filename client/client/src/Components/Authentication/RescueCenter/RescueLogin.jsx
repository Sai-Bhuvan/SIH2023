import React, { useState } from "react";
import NavBar from "../../Navbar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

import Container from "react-bootstrap/Container";

const formStyle = {
  maxWidth: "400px", // Adjust the maximum width as needed
  width: "100%",
};

function RescueLogin() {
  async function handlesubmit(event) {
    event.preventDefault();

    if (!username || !email || !password || !mobileno) {
      alert("enter credencilas properly");
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/user/login",
        {
          username: username,
          password: password,
        }
      );

      // setMessage(response.data.message);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function sendotp(event) {
    event.preventDefault();

    try {
      await axios
        .post("http://localhost:4000/auth/verify", {
          country_code: "+91",
          phone_no: mobileno,
        })
        .then(function (response) {
          alert(response.message);
        });

      // setdisablecheck(false);
    } catch (error) {
      console.log(error);
      alert("check mobile no");
    }
  }

  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [otp, setotp] = useState();

  return (
    <>
      <div>
        <NavBar />
      </div>

      <Container className="d-flex justify-content-center mt-5">
        <Form style={formStyle} onSubmit={handlesubmit}>
          <h3 className="mb-3 fs-1 fw-normal">Sign in </h3>

          <Form.Group controlId="formName">
            <Form.Label>username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formMobileNO">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your mobile no"
              value={mobileno}
              onChange={(event) => setmobileno(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formOTP">
            <Form.Label>Enter Otp</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your OTP"
              value={otp}
              onChange={(event) => setotp(event.target.value)}
            />
          </Form.Group>

          <Button variant="secondary" className="mt-3" onClick={sendotp}>
            Send OTP
          </Button>

          <Button
            variant="secondary"
            type="submit"
            className="mt-3"
            onClick={handlesubmit}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default RescueLogin;
