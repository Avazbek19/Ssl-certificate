import React, { useEffect } from 'react'

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
                        <svg className='cert-txt-svg' viewBox="0 0 32 28">
                            <path
                                d="M31.898 17.039a1.405 1.405 0 0 0 0-1.996l-1.049-1.048a1.406 1.406 0 0 1-.307-1.544l.572-1.364a1.42 1.42 0 0 0-.75-1.85l-1.468-.615a1.417 1.417 0 0 1-.86-1.305V5.731c0-.776-.632-1.415-1.416-1.415h-1.476c-.571 0-1.091-.35-1.304-.879l-.555-1.364a1.413 1.413 0 0 0-1.842-.776l-1.475.597a1.423 1.423 0 0 1-1.535-.307L17.307.46a1.405 1.405 0 0 0-1.995 0l-1.04 1.05c-.41.408-1.015.528-1.544.306l-1.364-.571a1.42 1.42 0 0 0-1.85.75l-.615 1.467c-.222.52-.733.861-1.305.861H6.008c-.776 0-1.415.631-1.415 1.416v1.475c0 .571-.35 1.092-.879 1.305l-1.364.554a1.413 1.413 0 0 0-.776 1.842l.597 1.475a1.423 1.423 0 0 1-.307 1.535L.738 15.052a1.405 1.405 0 0 0 0 1.995l1.05 1.04c.408.41.528 1.016.306 1.544l-.571 1.365a1.42 1.42 0 0 0 .75 1.85l1.467.614c.52.222.861.734.861 1.305v1.586c0 .776.631 1.416 1.416 1.416h1.475c.571 0 1.092.35 1.305.878l.554 1.373a1.413 1.413 0 0 0 1.842.776l1.475-.597a1.423 1.423 0 0 1 1.535.307l1.126 1.126a1.405 1.405 0 0 0 1.995 0l1.05-1.05a1.406 1.406 0 0 1 1.543-.306l1.364.571a1.42 1.42 0 0 0 1.85-.75l.615-1.467c.221-.52.733-.861 1.304-.861h1.587c.776 0 1.415-.631 1.415-1.416v-1.475c0-.572.35-1.092.879-1.305l1.364-.554a1.413 1.413 0 0 0 .776-1.842l-.597-1.475a1.423 1.423 0 0 1 .307-1.535l1.117-1.126zm-15.58 10.6c-6.404 0-11.597-5.194-11.597-11.598S9.914 4.444 16.318 4.444 27.916 9.637 27.916 16.04 22.722 27.64 16.318 27.64z">
                            </path>
                            <path
                                d="M16.318 7.752c-4.58 0-8.289 3.71-8.289 8.29s3.71 8.288 8.29 8.288 8.288-3.71 8.288-8.289-3.71-8.289-8.289-8.289zm-1.228 14.13l-5.406-5.406 2.345-2.345 3.061 3.061 5.262-5.261 2.345 2.345-7.607 7.607z">
                            </path>
                        </svg>
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