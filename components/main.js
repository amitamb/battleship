import usePlayer from '../hooks/usePlayer';
import { Button, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Board from './board';
import { getRandomInt } from '../support/commonHelpers';

const Main = () => {

  const boats = [1, 2, 3, 4];
  const SIZE = 7;

  const [ opponentBoard, opponentRevealCell, opponentUnrevealedCells, resetOpponent ] = usePlayer(SIZE, SIZE, boats);
  const [ playerBoard, playerRevealCell, playerUnrevealedCells, resetPlayer ] = usePlayer(SIZE, SIZE, boats);

  const handlePress = (row, col) => {
    playerRevealCell(row, col);

    if ( opponentUnrevealedCells > 0 ) {
      let foundEmptyCell = false;
      let tries;
      for ( tries = 0; tries < 100 && !foundEmptyCell ; tries++) {

        foundEmptyCell = opponentRevealCell(getRandomInt(SIZE), getRandomInt(SIZE));

      }

      if ( tries == 100 ) {
        console.error("Something wrong with the logic!");
      }
    }
  };

  let opponentHasWon = (opponentUnrevealedCells == 0);
  let playerHasWon = (playerUnrevealedCells == 0);
  let gameEnded = opponentHasWon || playerHasWon;

  const restartGame = () => {

    resetOpponent();
    resetPlayer();

  };

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
                paddingTop: 10,
                paddingBottom: 10,
                color: opponentHasWon ? "green" : null
              }}>
                Opponent
                {opponentHasWon && " Won ✓"}
              </Text>
              <Board board={opponentBoard} hideBoats={false} handlePress={null} hasWon={opponentUnrevealedCells == 0} />

            </View>

            <View style={{
              flex: 1,
              alignItems: "center"
            }}>

              <Text style={{
                fontSize: 20,
                paddingTop: 10,
                paddingBottom: 10,
                color: playerHasWon ? "green" : null
              }}>
                You
                {playerHasWon && " Won ✓"}
              </Text>
              <Board board={playerBoard} hideBoats={true} handlePress={!gameEnded && handlePress} hasWon={playerUnrevealedCells == 0} />

            </View>

            { gameEnded && <Button onPress={restartGame} title="Restart" /> }

          </View>

        </View>
      </View>
    </>
  );

}

export default Main;