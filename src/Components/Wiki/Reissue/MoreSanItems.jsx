import React, { useEffect } from 'react'
import { IoMdRefresh } from "react-icons/io";

export default function MoreSanItems() {
    useEffect(() => {
        document.title = 'Купить Другие предметы SAN'
    })
    return (
        <>
            <div className="wiki-path">
                <a href="/">Главная</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <a href='/wiki'>Wiki</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <a href='/wiki/ssl-reissue-renewal'>Перевыпуск и возобновление SSL</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Купить Другие предметы SAN</span>
            </div>
            <div className="wiki-main">
                <h3>Купить Другие предметы SAN</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <IoMdRefresh className='cert-txt-svg' />
                    </span>
                    <span>В многодоменные SSL-сертификаты можно добавить до 250 элементов SAN. Пожалуйста, воспользуйтесь нашим встроенным сервисом для добавления элементов SAN и перевыпуска SSL-сертификата:</span>
                </p>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Как добавить дополнительные элементы SAN</h4>
                    <p>Купить/изменить элементы SAN можно только для "активных/выпущенных" SSL-сертификатов. Изменение заказа в процессе его обработки невозможно.</p>
                    <ul className='pri-policy-lists'>
                        <li>Перейдите в раздел "SSL-сертификаты";</li>
                        <li>Откройте детали вашего заказа;</li>
                        <li>Нажмите кнопку "Купить еще SAN";</li>
                        <li>Выберите количество предметов SAN для покупки;</li>
                        <li>Проведите оплату и вернитесь к деталям заказа</li>
                        <li>Нажмите кнопку "Перевыпустить SSL";</li>
                        <li>Отправьте CSR и введите новые названия элементов SAN;</li>
                        <li>Переоформить заказ;</li>
                        <li>Вы получите новые файлы, когда SSL будет перевыпущен. Используйте их для переустановки SSL на вашем сервере.</li>
                    </ul>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}