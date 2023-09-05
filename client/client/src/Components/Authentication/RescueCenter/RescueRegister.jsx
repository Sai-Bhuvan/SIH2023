import React, { useState } from "react";
import NavBar from "../../Navbar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Selector from "../../Utility/Selector";

import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";

const formStyle = {
  maxWidth: "400px", // Adjust the maximum width as needed
  width: "100%",
};

function RescueRegister() {
  const nextbuttonhandle = (event) => {
    event.preventDefault();
    if (rescueslider == 2) {
      setdisablenext(true);
    } else {
      setrescueslider(rescueslider + 1);
    }
  };

  async function register(event) {
    event.preventDefault();

    if (
      !mobileno ||
      !username ||
      !address ||
      !email ||
      !password ||
      !confirmpass ||
      !discription ||
      !authotp
    ) {
      alert("enter all credentials correctly");
    }

    try {
      await axios
        .post("http://localhost:4000/auth/user/register", {
          email: email,
          password: password,
          verCode: authotp,
          country_code: "+91",
          phone_no: mobileno,
        })
        .then(function (response) {
          alert(response.message);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function sendotp(event) {
    event.preventDefault();

    if (password !== confirmpass) {
      alert("passwords are not matching");
    }

    try {
      await axios
        .post("http://localhost:4000/auth/verify", {
          country_code: "+91",
          phone_no: mobileno,
        })
        .then(function (response) {
          alert(response.message);
        });

      setdisablecheck(false);
    } catch (error) {
      console.log(error);
      alert("check mobile no");
    }
  }

  const [mobileno, setmobileno] = useState();
  const [disablecheck, setdisablecheck] = useState(true);
  const [authotp, setauthotp] = useState();
  const [address, setaddress] = useState("");
  const [discription, setdiscription] = useState("");
  const [rescueslider, setrescueslider] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [username, setUsername] = useState("");
  const [capacity, setcapacity] = useState();
  const [disablenext, setdisablenext] = useState(false);

  return (
    <>
      <div>
        <NavBar />
      </div>

      <Container className="d-flex justify-content-center mt-5">
        <Form style={formStyle}>
          <h3 className="mb-3 fs-1 fw-normal">Sign up </h3>
          {rescueslider === 0 && (
            <div>
              <Form.Group controlId="formName">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name of Rescue Team"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPass">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="confirm your password"
                  value={confirmpass}
                  onChange={(event) => setconfirmpass(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(event) => setaddress(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formDiscription">
                <Form.Label>Discription</Form.Label>
                <Form.Control
                  type="textarea"
                  placeholder="Enter your Discription of center"
                  value={discription}
                  onChange={(event) => setdiscription(event.target.value)}
                />
              </Form.Group>
            </div>
          )}

          {rescueslider === 1 && (
            <div>
              <Form.Label>Specifications</Form.Label>
              <Selector
                options={[
                  "fire response",
                  "medical",
                  "mental health support",
                  "search and rescue",
                  "water rescue",
                ]}
              />

              <Form.Label>calamities</Form.Label>
              <Selector
                options={[
                  "earthquake",
                  "fire",
                  "flood",
                  "hurricane",
                  "pandemic",
                  "tsunami",
                ]}
              />

              <Form.Label>Supply And Recources</Form.Label>
              <Selector
                options={[
                  "limited supplies",
                  "medical equipment available",
                  "pharmaceuticals available",
                  "well-stocked",
                ]}
              />

              <Form.Label>Madical Facilities</Form.Label>
              <Selector
                options={[
                  "basic first aid",
                  "intensive care units",
                  "pediatric care",
                  "surgical facilities",
                  "trauma care",
                ]}
              />

              <Form.Group controlId="formCapacity">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your Capacity"
                  value={capacity}
                  onChange={(event) => setcapacity(event.target.value)}
                />
              </Form.Group>
            </div>
          )}

          {rescueslider === 2 && (
            <div>
              <Form.Group controlId="formMobileno">
                <Form.Label>Mobile NO</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your mobile no"
                  value={mobileno}
                  onChange={(event) => setmobileno(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formOTP">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your OTP"
                  value={authotp}
                  onChange={(event) => setauthotp(event.target.value)}
                />
              </Form.Group>

              <Button
                variant="outline-secondary"
                onClick={sendotp}
                className="m-3"
              >
                Send OTP
              </Button>
            </div>
          )}

          <Button
            variant="outline-secondary"
            className="mt-3 m-5"
            onClick={nextbuttonhandle}
            disabled={disablenext}
            hidden={rescueslider === 2 ? true : false}
          >
            Next
          </Button>

          <Button
            variant="secondary"
            type="submit"
            className="mt-3 m-3"
            onClick={register}
            hidden={rescueslider === 2 ? false : true}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default RescueRegister;
