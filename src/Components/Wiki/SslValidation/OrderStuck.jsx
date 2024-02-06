import React, { useEffect } from 'react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function OrderStuck() {
    useEffect(() => {
        document.title = 'Заказ застрял на ручной или брендовой проверке | SSL Wiki'
    }, [])
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
                <a href='/wiki/validation'>Валидация</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Заказ застрял при ручной проверке</span>
            </div>
            <div className="wiki-main">
                <h3>Заказ застрял при ручной проверке</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <IoCheckmarkDoneCircle  className='cert-txt-svg'/>
                    </span>
                    <span>Менеджеры сертификационных центров Sectigo и DigiCert требуют пересмотреть все заказы вручную, если заказ был помечен для ручного рассмотрения/проверки. Обычно рассмотрение заказов занимает около 1-2 рабочих дней. Убедитесь, что ваш сайт находится в сети и работает, пока они проводят ручную проверку, так как они могут отклонить SSL, если сайт не загружен. Существует несколько причин, по которым заказ может быть "заморожен" для ручной проверки.</span>
                </p>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Наиболее распространенные причины, по которым приходится обращаться за ручной или фирменной валидацией</h4>
                    <ul className='pri-policy-lists'>
                        <li>Некоторые страны могут быть проверены вручную, например, Южная Корея, Северная Корея, Судан, Афганистан, Иран, Ирак;</li>
                        <li>Запрещенная страна. Заказ сделан из таких стран, как Афганистан (AF), Кот-д'Ивуар (CI), Куба (CU), Эритрея (ER), Гвинея (GN), Ирак (IQ), Иран (IR), Корейская Народно-Демократическая Республика (KP), Либерия (LR), Мьянма (MM), Руанда (RW), Судан (SD), Сьерра-Леоне (SL), Южный Судан (SS), Сирийская Арабская Республика (SY), Зимбабве (ZW).</li>
                        <li>Доменное имя включает в себя название известного бренда, например, facebook-app.com, sony-shop.net, dellshop.com;</li>
                        <li>Доменное имя имеет схожее название бренда, например, ваш домен "sibmama.com", но система проверки может считать его как "sIBMama" и отметить бренд "IBM". Менеджеры проверяют такие случаи вручную;</li>
                        <li>В доменном имени есть "стоп-слова", например, "pay, online, secure, booking, shop, bank, transfer, money, e-payment, payment, protection, violence, terrorists, and others", в этом случае проверка также будет проводиться вручную;</li>
                        <li>Доменное имя находится в черном списке или имеет плохую репутацию;</li>
                    </ul>
                </div>
                <p className='ssl-validation-txt'>&#10004; Что я могу сделать, чтобы ускорить процесс?</p>
                <p>Вы можете попробовать связаться с менеджерами Sectigo и DigiCert напрямую через чат и попытаться обсудить ситуацию с вашим заказом.</p>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}