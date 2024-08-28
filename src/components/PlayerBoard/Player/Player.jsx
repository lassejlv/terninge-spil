export function Player({ diceSum, points, player }) {
    return (
        <>
            <h3>{player}</h3>
            <h2>{diceSum}</h2>
            <h3>Round Points: {points}</h3>
        </>
    )
}