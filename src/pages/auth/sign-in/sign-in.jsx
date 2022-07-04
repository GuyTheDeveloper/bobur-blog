import { Row, Col, Form, Input, message } from "antd";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
//styles
import "./sign-in.css";

export const SignIn = () => {
  const { setToken } = useAuth();
  const emailRef = React.useRef(null);
  const passRef = React.useRef(null);
  const [error, setError] = React.useState(false);

  const success = () => {
    message.loading("Action in progress..", 1.5);
    if (emailRef.current.input.value === "eve.holt@reqres.in") {
      return message.success("Loading finished", 2.5);
    } else {
      return message.error(
        "You've enetered wrong email ,Try to enter this email: eve.holt@reqres.in",
        10
      );
    }
  };

  const onFinishFailed = () => {
    return message.info("Try to enter this email: eve.holt@reqres.in", 10);
  };

  const handleLogin = async () => {
    const data = {
      email: emailRef.current.input.value,
      password: passRef.current.input.value,
    };

    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setToken(await res.json());
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ height: "80%" }}>
        <Col style={{ width: "350px" }}>
          <h1 className="sign-heading">Login</h1>
          <Form
            className="sign-form"
            name="singin"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={handleLogin}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Input
              ref={emailRef}
              style={{ minWidth: "100%" }}
              status={error ? "error" : ""}
              className={`form-inputs ${error ? "sign-error" : ""}`}
              placeholder="Login"
              required
            />

            <Input
              ref={passRef}
              style={{ minWidth: "100%" }}
              className={`form-inputs ${error ? "sign-error" : ""}`}
              type="password"
              status={error ? "error" : ""}
              minLength={8}
              placeholder="Password"
              required
            />

            <button onClick={success} className="sign-btn" type="primary">
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </>
  );
};
