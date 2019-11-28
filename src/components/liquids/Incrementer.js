import React from 'react';
import Button from 'react-bootstrap/Button'
import useDrinksTracking from '../../hooks/useDrinksTracking';

export default function Incrementer(props) {
  const { increase, decrease } = useDrinksTracking();

  return (
    <main className="liquid--counter--increase text-center">
      {props.name}
    <Button variant='outline-primary' onClick={() => {decrease(props.name, props.user.id)}}>-</Button>
      <span>{'DYNAMIC COUNT'}</span>
      <Button variant='outline-primary' onClick={() => {increase(props.name, props.user.id)}}>+</Button>
    </main>
  )
};