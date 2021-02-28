import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css'
import logoImg from '../../img/logo.png'

export const Header = () => {
    return (
        <header>
            <div className={s.logoImage}>
                <img src={logoImg} alt="" />
            </div>
            <nav>
                <ul className={s.topmenu}>
                    <li>
                        <NavLink to="/Welcome">Главная</NavLink>
                    </li>
                    <li> <NavLink className={s.submenu_link} to="/Production">Продукция</NavLink>
                        <ul className={s.submenu}>
                            <li>
                                <NavLink to="/PriseList">Прайс лист</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink className={s.submenu_link} to="/Procecess">Тех&#160;процесс</NavLink>
                        <ul className={s.submenu}>
                            <li>
                                <NavLink to="/SandBlasting">Пескоструйная обработка</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Testing">Испытания на стенде</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/Delivery">Доставка</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.phonesInfo}>
                <p>
                    <span>+(375) 25 937 99 92</span> <br/>
                    <span>Пн-Сб 9:00 - 21:00</span>
                </p>
            </div>
        </header>

    )
}
