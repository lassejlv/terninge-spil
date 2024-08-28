import style from '../Dice/Dice.module.scss';
import { Button } from '../Button/Button';
import { useEffect, useState } from 'react';

// images
import one from '../../assets/terninger/one.svg';
import second from '../../assets/terninger/second.svg';
import third from '../../assets/terninger/third.svg';
import fourth from '../../assets/terninger/fourth.svg';
import fifth from '../../assets/terninger/fifth.svg';
import sixth from '../../assets/terninger/sixth.svg';

const allImages = [one, second, third, fourth, fifth, sixth];

const RandomDiceAnimation = () => {
  const [randomImage, setRandomImage] = useState(one);

  useEffect(() => {
    setInterval(() => {
      const randomImage = allImages[Math.floor(Math.random() * allImages.length)];
      setRandomImage(randomImage);
    }, 200);
  }, [randomImage]);


  return (
    <img src={randomImage} alt="randomImage" className={`${style.diceImage} ${style.spinDice}`} />
  )
}


export function Dice() {
  const [result, setResult] = useState(null);
  const [picking, setPicking] = useState(false);

  const randomNumber = () => Math.floor(Math.random() * 6 + 1);

  useEffect(() => {
    if (picking) {

      console.log('picking');
    }
  }, [picking]);

  return (
    <>

      {picking ? (
        <>
          {/* animate the im */}
          <RandomDiceAnimation />
        </>
      ) : (
        <>
          {result === 1 ? (
            <img src={one} alt="one" className={style.diceImage} />
          ) : result === 2 ? (
            <img src={second} alt="second" className={style.diceImage} />
          ) : result === 3 ? (
            <img src={third} alt="third" className={style.diceImage} />
          ) : result === 4 ? (
            <img src={fourth} alt="fourth" className={style.diceImage} />
          ) : result === 5 ? (
            <img src={fifth} alt="fifth" className={style.diceImage} />
          ) : result === 6 ? (
            <img src={sixth} alt="sixth" className={style.diceImage} />
          ) : null}
        </>
      )}

      <Button
        onClick={() => {
          setResult(randomNumber);
          setPicking(true);

          setTimeout(() => {
            setPicking(false);
          }, 1000);

          console.log(result);
        }}
      >
        Roll the Dice
      </Button>
    </>
  );
}
