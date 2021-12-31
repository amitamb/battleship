import usePlayer from '../hooks/usePlayer';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Board from './board';

const Main = () => {

  const [ opponentBoard ] = usePlayer(7, 7, [1]);
  const [ playerBoard ] = usePlayer(7, 7, [1]);

  console.table(opponentBoard);

  return (
    <>
      <View style={{
          width: '100%',
          flexDirection: 'column',
          paddingTop: 30,
          flex: 1
        }}>
        <View style={{
            backgroundColor: "#fcfcfc",
            alignItems: 'center',
            flexGrow: 0
          }}>
          <Text style={{
            fontSize: 30,
            color: "#772222",
            padding: 15
          }}>
            Play Battleship
          </Text>
        </View>
        <View style={{
            backgroundColor: "#fcfcfc",
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1
          }}>

          <View style={{
            width: '100%',
            flexDirection: 'column',
            flex: 1
          }}>

            <View style={{
              flex: 1,
              alignItems: "center"
            }}>

              <Text style={{
                fontSize: 20,
                paddingBottom: 20
              }}>
                Opponent
              </Text>
              <Board board={opponentBoard} />

            </View>

            <View style={{
              flex: 1,
              alignItems: "center"
            }}>

              <Text style={{
                fontSize: 20,
                paddingBottom: 20
              }}>
                You
              </Text>
              <Board board={playerBoard} />

            </View>

          </View>

        </View>
      </View>
    </>
  );

}

export default Main;