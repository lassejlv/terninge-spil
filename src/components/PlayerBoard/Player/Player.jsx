import style from './Player.module.scss'
export function Player({ diceSum, points, player, avatar, turn }) {
    return (
        <>
        <div className={style.turnContainer}>
             <h2>{turn}</h2>
        </div>
            <h3>{player}</h3>
            <img className={style.playerAvatar} src={avatar} />
            <h2>{diceSum}</h2>
            <h3>Round Points: {points}</h3>
        </>
    )
}