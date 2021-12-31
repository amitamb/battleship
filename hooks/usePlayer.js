import { useState } from 'react';
import { getRandomInt } from '../support/commonHelpers';
import { addBoat } from '../support/boatHelpers';

const getInitialBoard = (rows, cols, boats = [2]) => {

  let retVal = new Array(rows);

  for (let i = 0 ; i < retVal.length ; i++ ) {
    retVal[i] = new Array(cols);

    for ( let j = 0 ; j < cols ; j++ ) {
      retVal[i][j] = 0;
    }
  }

  boats.forEach((boatLength) => {

    // get boat direction
    let randDirection = Math.random();

    let directionAxis = 0; // along row

    if ( randDirection < 0.5 ) {
      // horizontal
      directionAxis = 0;
    }
    else {
      // vertical
      directionAxis = 1;
    }

    let foundBlockingBoat = false;
    let rowPos, colPos;
    do {

      rowPos = getRandomInt(rows);
      colPos = getRandomInt(cols);

      foundBlockingBoat = addBoat(retVal, rowPos, colPos, directionAxis, boatLength, true);

    }
    while (foundBlockingBoat);

    addBoat(retVal, rowPos, colPos, directionAxis, boatLength, false);

  })

  return retVal;

};

const usePlayer = (rows, cols, boats) => {

  const [ board, setBoard ] = useState(getInitialBoard(rows, cols, boats));

  const handlers = {
    handleBlockClick: (row, col) => {

    }
  }

  return [ board ];

};

export default usePlayer;