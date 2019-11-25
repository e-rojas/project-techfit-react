import React from 'react';
import { VictoryBar } from 'victory';

export default function GenerateBar(drink) {
  
  //CHOOSE BAR COLOR
  function determineColor(drinkType) {
    switch (drinkType) {
      case 'water':
        return 'cyan';

      case 'coffee':
        return 'tan';

      case 'soda':
        return 'tomato';

      case 'other':
        return 'grey'

    }
  }

  let fillColor = determineColor(drink);

  //DATA MANIPULATION
  //GENERATE {x, y} PAIR FOR ALL DAYS
  //x-value is the index of the day
  //x-value should be relative to current time so that the current day is index 7
  //x-value for 7 days ago should be 1

  //y-value is the % of total drinks
  //y-value is calculated from drinkCount / totalDrinkCount



  //RETURN VICTORY BAR COMPONENT WITH DATA
  return (
    <VictoryBar
      alignment={'end'}
      animate={{
        duration: 1500,
        onLoad: { duration: 1500 }
      }}
      style={{
        data: { fill: fillColor, fillOpacity: 1, stroke: '#636363', strokeWidth: 0.1 },
        labels: { fontSize: 6 },
      }}
      data={[
        {x: 1, y: 1}, 
        {x: 2, y: 3}, 
        {x: 3, y: 1}, 
        {x: 4, y: 1},
        {x: 5, y: 2},
        {x: 6, y: 1},
        {x: 7, y: 5}
      ]}
    />
  )
}