import React from 'react';
import AddButton from './AddButton';

export default function Tracker(props) {
  return (
    <section className="liquid--tracker">
      <h3>Liquid Consumption Tracker</h3>
      <table>
        <tbody>
          <tr>
            <td>Water</td>
            <td><AddButton confirm onClick={props.incrementWater}/></td>
          </tr>        
          <tr>
            <td>Coffee</td>
            <td><AddButton confirm onClick={props.incrementCoffee}/></td>
          </tr>
          <tr>
            <td>Soda</td>
            <td><AddButton confirm onClick={props.incrementSoda}/></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}