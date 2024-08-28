import style from './PlayerBoard.module.scss'
import { Player } from './Player/Player'
import { Dice } from '../Dice/Dice'
import { Button } from '../Button/Button'

export function PlayerBoard({player, diceSum, points}) {

    
    return (
        <>
            <div className={style.containerPlayer}>
                <Player player={player} diceSum={diceSum} points={points} ></Player>
                <Dice></Dice>
                <div className={style.containerButtons}>
                    <Button></Button>
                    <Button></Button>
                </div>
            </div>
        </>
    )
}