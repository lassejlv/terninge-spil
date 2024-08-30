import { useState } from "react";
import style from './Modal.module.scss'

export const Modal = ({resultImage, winPlayer}) => {
    return (
        <>
        <h3>{winPlayer}</h3>
        <img className={styled.winImage} src={resultImage} />
        </>
    )
}