import {useReducer} from 'react';
import axios from 'axios';
import reducer from '../reducers/updateDrinksReducer';

export default function useDrinksTracking() {
  const [state, dispatch] = useReducer(reducer, {
    drinks: {
      waterCount: 0,
      coffeeCount: 0,
      sodaCount: 0,
      otherCount: 0
    }
  });

  const INCREASE = 'INCREASE';
  const DECREASE = 'DECREASE';
  
  //Server URI
  let baseUri = 'http://localhost:3002';

  function increase(drinkType, userId) {
    //make new object for state with drinkTypeCount ++
    //Make axios call
    //Then update state w/ object via Dispatch

    const newState = {...state};

    const queryUrl = `/api/drinks-tracking/?id=${userId}&action=increase&drinkType=${drinkType}`;
    console.log(state)
    axios
      .post(baseUri + queryUrl)
      .then((res) => {
        
        console.log('successfully posted increase to server');
        dispatch({ type: INCREASE, value: newState });
      })
      .catch((e) => {
        console.log(e);
      })
  }

  function decrease(drinkType, userId) {
    const newState = {...state}

    const queryUrl = `/api/drinks-tracking/?id=${userId}&action=decrease&drinkType=${drinkType}`;

    axios
      .post(baseUri + queryUrl)
      .then((res) => {
        console.log('successfully posted decrease to server');
        dispatch({ type: DECREASE, value: newState });
      })
      .catch((e) => {
        console.log(e);
      })
  }

  return { increase, decrease };
}