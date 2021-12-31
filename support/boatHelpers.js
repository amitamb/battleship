
const isEmptyAround = (boardArray, rows, cols, row, col) => {

  let retVal = isEmpty(boardArray, rows, cols, row-1, col) &&
               isEmpty(boardArray, rows, cols, row+1, col) &&
               isEmpty(boardArray, rows, cols, row, col-1) &&
               isEmpty(boardArray, rows, cols, row, col+1);

  return retVal;
};

const isEmpty = (boardArray, rows, cols, row, col) => {
  let retVal = true;

  if ( row >= 0 && row < rows && col >= 0 && col < cols ) {
    retVal = (boardArray[row][col] == 0);
  }

  return retVal;
};

const addBoat = (boardArray, rowPos, colPos, directionAxis, boatLength, onlyTry = false) => {

  let rows = boardArray.length;
  let cols = boardArray[0].length;

  if ( directionAxis == 0 ) {
    for ( let i = rowPos ; i < rowPos + boatLength ; i++ ) {
      if ( onlyTry ) {
        if ( i >= rows || !isEmpty(boardArray, rows, cols, i, colPos) || !isEmptyAround(boardArray, rows, cols, i, colPos) ) { // boardArray[i][colPos] != 0 ) { 
          return true;
        }
      }
      else {
        boardArray[i][colPos] = 1;
      }
    }
  }
  else {
    for ( let j = colPos ; j < colPos + boatLength ; j++ ) {

      if ( onlyTry ) {
        if ( j >= cols || !isEmpty(boardArray, rows, cols, rowPos, j) || !isEmptyAround(boardArray, rows, cols, rowPos, j) ) { // boardArray[rowPos][j] != 0 ) {
          return true;
        }
      }
      else {
        boardArray[rowPos][j] = 1;
      }

    }
  }

  if ( onlyTry ) {
    return false;
  }

  // console.error(rowPos, colPos);

}

export { addBoat };