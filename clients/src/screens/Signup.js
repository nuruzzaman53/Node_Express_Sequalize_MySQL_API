import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import ShowError from "../components/ShowError";
import ShowSuccess from "../components/ShowSuccess";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(null);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      let userInfo = { name: name, email: email, password: password };
      const newUser = await axios.post("/api/user/addUser", userInfo);
      setSuccess("User has been created");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors(["An unexpected error occurred"]);
      }
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="mt-5 border p-5">
          <h1>Sign up</h1>
          <Form className="mt-5">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="fw-bold"
              onClick={formHandler}
            >
              Sign-up now !!!
            </Button>
          </Form>
          <br />
          {success && <ShowSuccess success={success} />}
        </Col>
        <Col md={6} className="mt-5 border p-5">
          {!success && <ShowError errors={errors} />}
        </Col>
      </Row>
    </Container>
  );
};
export default Signup;
