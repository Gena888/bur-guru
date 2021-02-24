import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <div>header- logo</div>
            <nav>
                <div>
                    <div>
                        <NavLink to="/Welcome">Главная</NavLink>
                    </div>
                    <div>
                        <div>
                            <NavLink to="/Production">Продукция</NavLink>
                        </div>
                        <div>
                            <NavLink to="/PriseList">Прайс лист</NavLink>
                        </div>
                    </div>
                    <div>
                        <div>
                            <NavLink to="/Procecess">Технологический процесс</NavLink>
                        </div>
                        <div>
                            <NavLink to="/SandBlasting">Пескоструйная обработка</NavLink>
                        </div>
                        <div>
                            <NavLink to="/Testing">Испытания на стенде</NavLink>
                        </div>
                    </div>
                    <div>
                        <NavLink to="/Delivery">Доставка</NavLink>
                    </div>
                </div>
            </nav>
            <div>header phones</div>
        </div>

    )
}
