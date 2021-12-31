import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

const Cell = ({ val, borderStyles }) => {

  let commonTextStyles = {
    fontSize: 20,
    color: 'red',
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: 'center',
  };

  let backgroundColor = "auto";

  switch(val) {
    case 1:
      backgroundColor = "blue";
      break;
    case 2:
      backgroundColor = "gray";
      break;
    case 3:
      backgroundColor = "black";
      break;
    default:
      backgroundColor = "#ddd";
  }

  let text;

  switch(val) {
    case 2:
      text = "·";
      break;
    case 3:
      text = "×";
      break;
    default:
      text = "";
  }

  return <>
    <View style={{
      padding: 0,
    }}>
      <TouchableHighlight>
        <View style={{
          ...borderStyles,
          height: 36,
          width: 36,
          padding: 0,
          justifyContent: "center",
          backgroundColor: backgroundColor
        }}>
          {/* × */}
          {/* · */}
          {<Text style={{
            ...commonTextStyles
          }}>{text}</Text> }
        </View>
      </TouchableHighlight>
    </View>
  </>;

};

export default Cell;