import { useState } from 'react';
import { getRandomInt } from '../support/commonHelpers';
import { addBoat } from '../support/boatHelpers';
import { deepCopy } from '../support/commonHelpers';

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

    let tries = 0;
    let foundBlockingBoat = false;
    let rowPos, colPos;
    do {

      rowPos = getRandomInt(rows);
      colPos = getRandomInt(cols);

      foundBlockingBoat = addBoat(retVal, rowPos, colPos, directionAxis, boatLength, true);

      tries++;

    }
    while (foundBlockingBoat && tries < 100);

    if ( tries >= 100 ) {
      console.error("Couldnot find a place for a boat.");
    }

    addBoat(retVal, rowPos, colPos, directionAxis, boatLength, false);

  })

  return retVal;

};

const usePlayer = (rows, cols, boats) => {

  const [ totalUnrevealedCells, setTotalUnrevealedCells ] = useState(() => {
    return boats.reduce((a, b) => {
      return a + b;
    }, 0);
  });

  const [ totalRemainingCells, setTotalRemainingCells ] = useState(() => {
    return rows * cols;
  });

  const [ board, setBoard ] = useState(() => {
    return getInitialBoard(rows, cols, boats);
  });

  const revealCell = (row, col) => {
    let newBoard = deepCopy(board);
    let currentValue = newBoard[row][col];

    if ( currentValue > 1 ) { // should be 0 or 1
      return false;
    }

    let newValue = 2; // nothing found
    setTotalRemainingCells(totalRemainingCells - 1);
    if ( currentValue === 1 ) {
      newValue = 3;
      setTotalUnrevealedCells(totalUnrevealedCells - 1);
    }

    newBoard[row][col] = newValue;
    setBoard(newBoard);
    return true;
  };

  const handlePress = (row, col) => {
    revealCell(row, col);
  }

  const reset = () => {
    setBoard(getInitialBoard(rows, cols, boats));
    setTotalUnrevealedCells(() => {
      return boats.reduce((a, b) => {
        return a + b;
      }, 0);
    });
  };

  return [ board, revealCell, totalUnrevealedCells, reset ];

};

export default usePlayer;