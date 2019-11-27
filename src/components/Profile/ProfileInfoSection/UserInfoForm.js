import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
const UserInfoForm = props => {
  const userID = props.user.id;

  const [form, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    location: "",
    bio: "",
    image_url: ""
  });

  const [msg, setMsg] = useState("");
  const resetForm = () => {
    setValues({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      age: "",
      weight: "",
      height: "",
      location: "",
      bio: "",
      image_url: ""
    });
  };

  // const printValues = e => {
  //   e.preventDefault();
  //   console.log(form.email, form.password);
  //   resetForm()
  // };
  const handleFieldChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
    e.preventDefault();
   
    const postData = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      password: form.password,
      age: parseInt(form.age),
      height: parseInt(form.height),
      weight: parseInt(form.weight),
      bio: form.bio,
      image_url: form.image_url
    };

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .put(`http://localhost:3002/users/${userID}`, postData, axiosConfig)
      .then(res => {
        setMsg(res.data.message)
        console.log("axios res.data>>>>", res.data);
        resetForm();
        window.location.reload();
      })
      .catch(err => {
        // setMsg(err);
        console.log("AXIOS ERROR:", err);
      });
  };

 /*  const printValues = e => {
    e.preventDefault();
    console.log(form);
    resetForm();
  }; */

  return (
    <Row
      //style={{ marginTop: "200px", marginBottom: "200px" }}
      className="p-4  d-flex justify-content-center "
    >
      <Col lg={12}>
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Control
              value={form.first_name}
              name="first_name"
              onChange={handleFieldChange}
              type="text"
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={form.last_name}
              name="last_name"
              onChange={handleFieldChange}
              type="text"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={form.email}
              name="email"
              onChange={handleFieldChange}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              value={form.password}
              name="password"
              onChange={handleFieldChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={form.age}
              name="age"
              onChange={handleFieldChange}
              type="number"
              placeholder="Age"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={form.weight}
              name="weight"
              onChange={handleFieldChange}
              type="number"
              placeholder="Weight"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={form.image_url}
              name="image_url"
              onChange={handleFieldChange}
              type="text"
              placeholder="url-image"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={form.location}
              name="location"
              onChange={handleFieldChange}
              type="text"
              placeholder="Location"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "100%",
              marginTop: "10px",
              filter: "grayscale(100%)"
            }}
          >
            <i className="far fa-paper-plane"></i>
            <span> Update</span>
          </Button>
          {msg && <p className='text-danger pt-2' >{msg}</p>}
        </Form>
      </Col>
    </Row>
  );
};

export default UserInfoForm;
