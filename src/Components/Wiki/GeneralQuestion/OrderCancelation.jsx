import React, { useEffect } from 'react'
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function OrderCancelation() {
    useEffect(() => {
        document.title = 'Правила отмены и возврата заказа | SSL Wiki'
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
                <a href='/wiki/general'>Общие вопросы</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Правила отмены заказа и возврата денег</span>
            </div>
            <div className="wiki-main">
                <h3>Правила отмены заказа и возврата денег</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <MdOutlineBusinessCenter className='cert-txt-svg'/>
                    </span>
                    <span>Мы продаем и предоставляем продукцию, которая должна удовлетворить большинство покупателей на 100%, однако, мы можем предложить полный возврат, если по какой-то причине вы не довольны или не удовлетворены обслуживанием. Мы возвращаем деньги в любых случаях, неважно, если вы купили не тот товар или передумали.</span>
                </p>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Правила возврата и отмены платежей SSL</h4>
                    <ul className='pri-policy-lists'>
                        <li>Вы получите полный возврат денег за любой заказ, оформленный в течение 30 дней</li>
                        <li>Единственное исключение - фальшивые данные, предоставленные в процессе проверки, ИЛИ SSL аннулирован центром сертификации из-за атаки Man-in-the-middle или любого другого преступного/незаконного использования SSL.</li>
                        <li>Обратите внимание, что после того, как вы запросили возврат, заказ будет отменен без возможности его восстановления. Например, заказ просрочен на 6 месяцев, вы нажали кнопку "Отменить заказ". В этом случае заказ получит новый статус "Просрочен" и возврат средств будет невозможен. Это означает, что вы потеряете SSL со всеми оставшимися днями.</li>
                        <li>Отменить процесс перевыпуска невозможно, единственный способ - завершить перевыпуск, чтобы начать другой процесс перевыпуска.</li>
                    </ul>
                </div>
                <p>По умолчанию все возвращенные средства возвращаются на баланс аккаунта и могут быть использованы для любых будущих покупок. Однако мы можем вывести средства на первоначальный источник (PayPal, Skrill, Webmoney или банковский счет) по вашему запросу через тикет поддержки.</p>
                <p>Запрос на отмену может отправить только владелец аккаунта. Возврат средств через PayPal/Skrill осуществляется в течение 12-24 часов. Банковский возврат может занять 1-5 рабочих дней, в зависимости от правил вашего банка и страны.</p>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Как запросить возврат средств за SSL</h4>
                    <ul className='ordered-list'>
                        <li>Вход в клиентскую зону: https://my.gogetssl.uz</li>
                        <li>Перейдите в раздел "Управление SSL", найдите свой SSL-сертификат и нажмите кнопку "Сведения".</li>
                        <li>Нажмите на кнопку "Отменить заказ".</li>
                        <li>Укажите причину отмены и нажмите кнопку "Отменить заказ".</li>
                        <li>Вы получите электронное письмо с информацией о возврате средств после того, как наши менеджеры рассмотрят запрос</li>
                    </ul>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}