import React from 'react';
import Button from 'react-bootstrap/Button'

export default function Incrementer(props) {
  return (
    <main className="liquid--counter--increase">
      {props.name}
      <Button variant='outline-primary' onChange={console.log('+1')}>+</Button>
      <Button variant='outline-primary' onChange={console.log('-1')}>-</Button>
    </main>
  )
};