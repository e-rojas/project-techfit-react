import React from 'react';
import Incrementer from './Incrementer';
import './Tracker.scss';

export default function Tracker(props) {
  return (
    <section className="liquid--tracker text-center">
      <h3>Liquid Consumption Tracker</h3>
      <table className="text-center">
        <tbody>
          <tr>
            <td><Incrementer name={'Water '} user={props.user}/></td>
          </tr>        
          <tr>
            <td><Incrementer name={'Coffee'} user={props.user}/></td>
          </tr>
          <tr>
            <td><Incrementer name={'Soda '} user={props.user}/></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}