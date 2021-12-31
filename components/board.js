import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Cell from './cell';
import { Col, Row, Grid } from "react-native-easy-grid";

const boardRow = (rowVals, cols, row) => {

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
      <Cell val={val} borderStyles={borderStyles} />
    </Col>);
  }

  return <Row key={'col'+ row} style={{
    flex: 1,
    flexDirection: 'row',
  }}>
    {colOutputs}
  </Row>
};



const Board = ({ board }) => {

  let rows = board.length, cols = board[0].length;

  let rowOutputs = [];

  let rowVals = [0, 1, 1, 0, 0, 0];

  for ( let i = 0; i < rows; i++ ) {
    rowOutputs.push(boardRow(board[i], cols, i));
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