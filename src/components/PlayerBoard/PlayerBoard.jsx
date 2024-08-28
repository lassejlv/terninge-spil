import { useState } from 'react';
import style from './PlayerBoard.module.scss';
import { Player } from './Player/Player';
import { Dice } from '../Dice/Dice';
import { Button } from '../Button/Button';
import Confetti from 'react-confetti';

export function PlayerBoard({ player, diceSum, points }) {
  const [result, setResult] = useState(null);
  const [picking, setPicking] = useState(false);

  const randomNumber = () => Math.floor(Math.random() * 6 + 1);

  const rollDice = () => {
    setPicking(true);
    const newResult = randomNumber();

    setTimeout(() => {
      setResult(newResult);
      setPicking(false);
    }, 1000);

    console.log(newResult);
  };

  return (
    <div className={style.containerPlayer}>
      <Confetti />
      <Player player={player} diceSum={diceSum} points={points} />
      <div className={style.diceConainer}>
        <Dice result={result} picking={picking} />
        <Dice result={result} picking={picking} />
      </div>
      <div className={style.containerButtons}>
        <Button onClick={rollDice}>Roll the Dice</Button>
        <Button>Other Action</Button>
      </div>
    </div>
  );
}
