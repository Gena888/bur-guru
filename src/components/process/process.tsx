import React from 'react';
import s from './process.module.css'

export const Procecess = () => {
    return (
        <section className={s.procecess}>
            <article>
                <h4>Полная разборка</h4>
                <p>Производится полная разборка и удаление всех РТИ уплотнителей, манжет и тд.</p>
            </article>
            <article>
                <h4>Мойка</h4>
                <p>Мойка механизма производится в специальной гидромоечной машине в разобранном виде. <br />
                    Клапана управления подвергаются ультразвуковой мойке.</p>
            </article>
            <article>
                <div>
                    <h4>Пескоструйная обработка</h4>
                    <p>Корпуса, боковые, верхние и задние крышки подвергаются пескоструйной очистке.</p>
                </div>
                <div>
                    <img src="" alt="befor" />
                    <img src="" alt="arrow" />
                    <img src="" alt="after" />
                </div>
            </article>
            <article>
                <h4>Дефектовка</h4>
                <p>После пескоструйной очистки, мойки - детали поступают на пост выброковки, не подлежащие ремонту детали бракуются, клапана управления до поступления на сборку проходят испытания на специальном стенде. </p>
            </article>
            <article>
                <h4>Восстановление отдельных деталей</h4>
                <p>Основные детали механизма подвергаются определенному ремонту, восстановлению резьбы, шейки вала сошки, ремонт винтовой пары путём подбора шариков большего ремонтного размера.
                    Восстановление корпуса, посадочных отверстий под манжету и тд.</p>
            </article>
            <article>
                <div>
                    <h4>Метизы и РТИ</h4>
                    <p>Метизы проходят гальваническую обработку.
                    Используются более современные и более качественные комплектующие и резинотехнические изделия. Так же производятся замены некоторых деталей на фторопластовые изделия, что значительно позволяет увеличить ресурс механизмов.
                    Предусмотрено использование резинотехнических изделий для механизмов предназначенных для северных регионов.</p>
                </div>
                <div>
                    <img src="" alt="metiz-1" />
                    <img src="" alt="metiz-2" />
                    <img src="" alt="metiz-3" />
                    <img src="" alt="metiz-4" />
                    <img src="" alt="metiz-5" />
                </div>
            </article>
            <article>
                <h4>Испытание механизма</h4>
                <p>Испытание проводится на специальном стенде при определённой температуре.</p>
            </article>
            <article>
                <h4>Мойка</h4>
                <p>Производится мойка(все отверстия герметично закрываются). После мойки производится обезжиривание.</p>
            </article>
            <article>
                <div>
                    <h4>Покраска </h4>
                    <p>Покраска осуществляется в термокамере с использованием эмали с антикоррозийными добавками.</p>
                </div>
                <div>
                    <img src="" alt="painting-1"/>
                    <img src="" alt="painting-2"/>
                </div>
            </article>
        </section>
    )
}
