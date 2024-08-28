import style from './PlayerBoard.module.scss'
import { Player } from '../PlayerBoard/Player/Player'

export function PlayerBoard({diceSum, point, player}){
    return(
        <>
        <Player player={player}></Player>
        <h2>{diceSum}</h2>
        <h3>Round Points: {point}</h3>
        </>
    )
}