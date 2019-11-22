import React from 'react';


export default function AddButton(props) {
  return (
    <main className="liquid--counter--increase">
      <img
        className="increase--liquid--button"
        src='images/add.png'
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  )
};