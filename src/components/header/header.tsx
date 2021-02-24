import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css'

export const Header = () => {
    return (
        <div>
            <div>header- logo</div>
            <nav>
                <ul className={s.topmenu}>
                    <li>
                        <NavLink to="/Welcome">Главная</NavLink>
                    </li>
                    <li> <NavLink to="/Production">Продукция</NavLink>
                        <ul className={s.submenu}>
                            <li>
                                <NavLink to="/PriseList">Прайс лист</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/Procecess">Технологический процесс</NavLink>
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
            <div>header phones</div>
        </div>

    )
}
