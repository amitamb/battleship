import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import dotImage from '../assets/dot.png';
import xImage from '../assets/x.png';

const Cell = ({ row, col, val, borderStyles, hideBoats, handlePress }) => {

  let commonTextStyles = {
    fontSize: 20,
    color: 'red',
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: 'center',
  };

  let backgroundColor = "#ddd";

  switch(val) {
    case 1:
      if ( !hideBoats ) {
        backgroundColor = "blue";
      }
      // backgroundColor = "blue";
      break;
    case 2:
      backgroundColor = "#fafafa";
      commonTextStyles.fontSize = 60;
      commonTextStyles.color = "black";
      break;
    case 3:
      backgroundColor = "#fafafa";
      commonTextStyles.fontSize = 60;
      break;
    default:
      backgroundColor = "#ddd";
  }

  let text;
  let image=null;

  switch(val) {
    case 2:
      text = "·";
      image = dotImage;
      break;
    case 3:
      text = "×";
      image = xImage;
      break;
    default:
      text = "";
  }

  return <>
    <View style={{
      padding: 0,
    }}>
      <TouchableHighlight
        onPress={() => handlePress && handlePress(row,col)} disabled={val > 1 || !handlePress}
        underlayColor="white"
      >
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
          {/* {false && <Text style={{
            ...commonTextStyles
          }}>{text}</Text> } */}

          {image && <Image 
            style={{
              height: "100%",
              width: "100%",
            }}
            source={image}
          /> }

        </View>
      </TouchableHighlight>
    </View>
  </>;

};

export default Cell;