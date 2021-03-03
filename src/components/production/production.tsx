import React from 'react';
import s from './production.module.css'
import testIMG from './../../img/zil-4331.webp'

export const Production = () => {
    return (
        <div className={s.production}>
            <div className={s.line}>
                <div className={s.column}>
                    <img src={testIMG} alt="64229-3400010" />
                    <p>Механизм рулевого управления <br/> 64229-3400010</p>
                </div>
                <div className={s.column}>
                    <img src={testIMG} alt="64229-3400010" />
                    <p>Механизм рулевого управления <br/> 64229-3400010-30</p>
                </div>
                <div className={s.column}>
                    <img src={testIMG} alt="64229-3400010" />
                    <p>Механизм рулевого управления <br/> 64221-3400010-10</p>
                </div>
            </div>

            <div className={s.line}>
                <div className={s.column}>
                    <img src={testIMG} alt="64221-3400010" />
                    <p>Механизм рулевого управления <br/> 64221-3400010</p>
                </div>
                <div className={s.column}>
                    <img src={testIMG} alt="4310-3400020" />
                    <p>Механизм рулевого управления <br/> 4310-3400020</p>
                </div>
                <div className={s.column}>
                    <img src={testIMG} alt="4310-3400020-01" />
                    <p>Механизм рулевого управления <br/> 4310-3400020-01</p>
                </div>
            </div>

            <div className={s.line}>
                <div className={s.column}>
                    <img src={testIMG} alt="4310-3400020-03" />
                    <p>Механизм рулевого управления <br/> 4310-3400020-03</p>
                </div>
                <div className={s.column}>
                    <img src={testIMG} alt="5320-3400020" />
                    <p>Механизм рулевого управления <br/> 5320-3400020</p>
                </div>
                <div className={s.column}>
                    <img src={testIMG} alt="4331-3400020-20" />
                    <p>Механизм рулевого управления <br/> 4331-3400020-20</p>
                </div>
            </div>

            <div className={s.line}>
                <div className={s.column}>
                    <img src={testIMG} alt="4331-3400020-02" />
                    <p>Механизм рулевого управления <br/> 4331-3400020-02</p>
                </div>
                <div className={s.column}>
                    <img src={testIMG} alt="5301-3400020" />
                    <p>Механизм рулевого управления <br/> 5301-3400020</p>
                </div>
                <div className={s.column}>
                    <img src={testIMG} alt="130-3400010" />
                    <p>Механизм рулевого управления <br/> 130-3400010</p>
                </div>
            </div>
        </div>
    )
}
