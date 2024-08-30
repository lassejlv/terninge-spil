import { useState } from 'react';
import style from './PlayerBoard.module.scss';
import { Player } from './Player/Player';
import { Dice } from '../Dice/Dice';
import { Button } from '../Button/Button';
import Confetti from 'react-confetti';

export function PlayerBoard({ player, points, avatar }) {
  const randomNumber = () => Math.floor(Math.random() * 6 + 1);
  const [result1, setResult1] = useState(1);
  const [result2, setResult2] = useState(1);
  const [picking, setPicking] = useState(false);
  const [diceSumState, setDiceSumState] = useState(0);
  const [hasRolled, setHasRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setPicking(true);
    const newResult1 = randomNumber();
    const newResult2 = randomNumber();

    setTimeout(() => {
      setResult1(newResult1);
      setResult2(newResult2);
      setPicking(false);
      setHasRolled(true);
      setDiceSumState(prevSum => prevSum + newResult1 + newResult2);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div className={style.containerPlayer}>
      {/* <Confetti /> */}
      <Player player={player} avatar={avatar} diceSum={diceSumState} points={points} />
      <div className={style.diceConainer}>
        <Dice result={hasRolled ? result1 : 1} picking={picking} />
        <Dice result={hasRolled ? result2 : 1} picking={picking} />
      </div>
      <div className={style.containerButtons}>
        <Button onClick={rollDice}>Roll</Button>
        <Button>Hold</Button>
      </div>
    </div>
  );
}
