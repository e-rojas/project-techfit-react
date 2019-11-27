import React,{useState} from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import axios from 'axios'
const UserInfoForm = (props) => {
  console.log('FORM', props.user.id)
 
 const [form, setValues] = useState({
  email: "",
  password: ""
});
const [msg, setMsg] = useState("");
const resetForm = () => {
  setValues({
    email: "",
    password: ""
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
    last_name:form.last_name,
    email: form.email,
    password: form.password,
   
    weight:form.weight
  };
  const axiosConfig = {
    headers: {
      
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  };
  axios
    .post("http://localhost:3002/api/login", postData, axiosConfig)
    .then(res => {
      setMsg(res.data.message);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        resetForm();
      
      } else {
        localStorage.setItem("token", null);
      }
      // console.log("response from server>>>", res.data);
    })
    .catch(err => {
      // setMsg(err);
      console.log("AXIOS ERROR:", err);
    });
};





  return (

    <Row
      //style={{ marginTop: "200px", marginBottom: "200px" }}
      className="p-4  d-flex justify-content-center "
    >
      <Col lg={12}>
        <Form>
          <Form.Group >
            <Form.Control
              type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group >
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="passwordOne" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="passwordTwo" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group >
            <Form.Control type="text" placeholder="Job title" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="number" placeholder="Age" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="number" placeholder="Weight" />
          </Form.Group>
          <Form.Group >
            <Form.Control type="text" placeholder="url-image" />
          </Form.Group>
          <Form.Group >
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="About you ..." as="textarea" rows="3" />
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
        </Form>
      </Col>
    </Row>
  );
};

export default UserInfoForm;
