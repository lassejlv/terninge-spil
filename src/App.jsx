import { Container } from './components/Container';
import { Header } from './components/Header';
import { PlayerBoard } from './components/PlayerBoard/PlayerBoard';
import style from './components/PlayerBoard/PlayerBoard.module.scss';
// import { Dice } from './components/Dice/Dice';
// import { Player } from './components/Player/Player';
import { useEffect, useState } from 'react';

export default function App() {

  const [sum, setSum] = useState('0');
  const [points, setPoints] = useState('0');

  return (
    <Container>
      <Header>Roll the Dice</Header>
      <div className={style.containerPlayerBoard}>
        <PlayerBoard player='Player 1' diceSum={sum} points={points}></PlayerBoard>
        <PlayerBoard player='Player 2' diceSum={sum} points={points}></PlayerBoard>
      </div>
    </Container>
  );
}
