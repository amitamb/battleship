import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Cell from './cell';
import { Col, Row, Grid } from "react-native-easy-grid";

const boardRow = (rowVals, hideBoats, cols, row, handlePress) => {

  let colOutputs = [];

  for ( let i = 0; i < cols; i++ ) {

    let val = rowVals[i];

    let borderStyles = {
      borderBottom: "1 solid #000",
      borderRight: "1 solid #000",
      borderLeft: i == 0 ? "1 solid #000" : "",
      borderTop: row == 0 ? "1 solid #000" : "",
      backgroundColor: "red",
    };

    colOutputs.push(<Col
      key={'col'+ row + '-' + i}
      style={{
      }}
    >
      <Cell row={row} col={i} val={val} borderStyles={borderStyles} hideBoats={hideBoats} handlePress={handlePress} />
    </Col>);
  }

  return <Row key={'col'+ row} style={{
    flex: 1,
    flexDirection: 'row',
  }}>
    {colOutputs}
  </Row>
};



const Board = ({ board, hideBoats, handlePress }) => {

  let rows = board.length, cols = board[0].length;

  let rowOutputs = [];

  let rowVals = [0, 1, 1, 0, 0, 0];

  for ( let i = 0; i < rows; i++ ) {
    rowOutputs.push(boardRow(board[i], hideBoats, cols, i, handlePress));
  }

  return <>
    <View style={{ 
      width: 40 * cols + 2,
      height: 40 * rows + 2,
    }}>
      <Grid >
        {rowOutputs}
      </Grid>
    </View>
  </>;

};

export default Board;