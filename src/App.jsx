import { Container } from './components/Container';
import { Header } from './components/Header';
import { PlayerBoard } from './components/PlayerBoard/PlayerBoard';
import { useState } from 'react';
import style from './components/PlayerBoard/PlayerBoard.module.scss';

export default function App() {
  const [points, setPoints] = useState('0');

  return (
    <Container>
      <Header>21 Dice Game</Header>
      <div className={style.containerPlayerBoard}>
        <PlayerBoard player='Player 1' avatar='../src/assets/img/player1.jpg' points={points}></PlayerBoard>
        <PlayerBoard player='Player 2' avatar='../src/assets/img/player2.jpg' points={points}></PlayerBoard>
      </div>
    </Container>
  );
}