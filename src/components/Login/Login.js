import React from 'react'

const login = () => {
  return (
    <Form style={{}}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ width: "100%", marginTop: "50px", filter: 'grayscale(100%)' }} variant="dark" >
        Login
      </Button>
      <Form.Text className="text-muted">
        Dont have an account? <a>Sign Up</a>.
      </Form.Text>
    </Form>
  )
}

export default login;
