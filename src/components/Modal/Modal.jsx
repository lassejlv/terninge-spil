import { useState } from "react";
import style from '.src/components/Modal/Modal.module.scss'

export const Modal = ({ resultImage, winPlayer}) => {
   
    return (
        <>
        <div 
        className={style.resultContainer}>
            <section className={style.result}>
                <h3>{winPlayer}</h3>
                <img className={style.winImage} src={resultImage} />
            </section>
        </div>
        </>
        )
    }
