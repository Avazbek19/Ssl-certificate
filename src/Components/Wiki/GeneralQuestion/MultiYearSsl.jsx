import React, { useEffect } from 'react'
import { FaQuestionCircle } from "react-icons/fa";

export default function MultiYearSsl() {
    useEffect(() => {
        document.title = 'Многолетняя подписка SSL | SSL Wiki'
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
                <span className='current'>Многолетняя подписка SSL</span>
            </div>
            <div className="wiki-main">
                <h3>Многолетняя подписка SSL</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <FaQuestionCircle className='cert-txt-svg'/>
                    </span>
                    <span>Отличная новость для рынка SSL! Теперь большинство SSL-сертификатов доступны для 6-летних планов подписки. В целях безопасности ваш сертификат изначально будет выпущен с максимальным сроком действия 13 месяцев. До истечения срока действия мы свяжемся с вами, чтобы заменить ваш сертификат на другой сертификат с максимальным сроком действия. Вы можете перевыпустить свой сертификат в любое время и столько раз, сколько пожелаете. Больше не нужно терять дни или недели на сертификаты на один год, пытаясь приурочить их к новой покупке и повторной подаче.</span>
                </p>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Что такое многолетний план TLS/SSL?</h4>
                            <p>Чтобы помочь вашим клиентам воспользоваться преимуществами более короткого срока службы сертификатов и сделать управление сертификатами еще проще, GoGetSSL предлагает многолетний план сертификатов TLS/SSL. Этот новый тип многолетнего покрытия - экономичный и эффективный способ помочь вашим клиентам повысить уровень безопасности, сократив количество перерывов в работе сертификатов и хлопоты, связанные с управлением более коротким жизненным циклом сертификатов.</p>
                            <p>В то время как браузеры в обязательном порядке устанавливают годичный срок действия сертификата, многолетний план в сочетании с инструментами автоматизации экономит ваше время и деньги. Ваши клиенты могут зафиксировать более длительные сроки покрытия, предоставляемые многолетним планом, а ваши затраты снижаются по сравнению с более длительными сроками, которые вы продаете.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Как это работает?</h4>
                            <p>Приобретая сертификат TLS/SSL по многолетнему плану, ваш клиент получает первоначальный сертификат, действительный в течение одного года, и право на неограниченное количество перевыпусков сертификата в течение срока действия заказа - до шести лет. В течение всего срока действия многолетнего плана нам потребуется ежегодно проводить повторную проверку организаций и доменов клиентов.</p>
                            <p>Мы начнем отправлять уведомления о замене до истечения 30-21-14-7 дней. SSL будет заменен автоматически с использованием того же CSR до истечения 3 дней, если пользователи не заменят SSL самостоятельно. Перевыпущенный SSL будет отправлен на электронную почту.</p>
                            <p>Пример подписки на SSL</p>
                            <p>Теперь для всех многолетних SSL-сертификатов доступны четыре различные даты.</p>
                            <ul className='pri-policy-lists'>
                                <li>Начало подписки дата, когда был выпущен первый SSL</li>
                                <li>Окончание подписки дата окончания подписки и необходимости создания новых заказов</li>
                                <li>Действителен с дата, когда текущий активный SSL был выдан на</li>
                                <li>Действует до дата, когда SSL необходимо заменить, чтобы получить новый SSL еще на 13 месяцев</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Почему партнеры должны предлагать многолетний план TLS?</h4>
                            <p>Если сочетать многолетний план с автоматизацией, ваши клиенты смогут свести к минимуму риск человеческих ошибок при управлении более коротким жизненным циклом сертификатов. Благодаря автоматизации вы можете автоматически предоставлять и переустанавливать сертификаты, а в большинстве сред - заменять CSR. Кроме того, клиенты могут легко адаптироваться к любым возможным сокращениям срока службы сертификатов, которые будут введены отраслью в будущем.</p>
                            <p>Продление сертификата больше не требует дополнительных периодов заказа, добавляемых к новому сертификату, поскольку больше нет потерянного периода покупки. Клиент может получить новый сертификат с того дня, когда он ему нужен, до того дня, когда он хочет, чтобы срок действия сертификата истек, в пределах периода обслуживания. В соответствии с базовыми требованиями форума CA/Browser Forum для поддержания соответствия необходимо проводить повторную валидацию сертификата через определенные промежутки времени.</p>
                            <p>Многолетний план поможет вашим клиентам эффективно использовать преимущества безопасности, связанные с сокращением срока действия сертификатов, и обеспечит их лояльность к вашему бренду на долгие годы. Хотя подтверждение сертификата должно обновляться ежегодно, сертификаты можно заменять ежедневно, чтобы повысить уровень безопасности любой организации.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Преимущества многолетнего плана для вас и ваших клиентов</h4>
                            <p>Минимизация риска компрометации сертификатов;</p>
                            <p>Минимизирует риск использования слабых ключей (пример SHA1);</p>
                            <p>Обеспечивает ежегодное подтверждение личности для предотвращения возможного мошенничества и подделки;</p>
                            <p>Упрощенное управление сертификатами с помощью автоматизации;</p>
                            <p>Использование многолетнего плана обеспечивает большую гибкость в расчетах с клиентами и позволяет получить больший доход наперед, а также привлечь клиентов на более длительный срок;</p>
                            <p>Повысьте среднюю цену продажи (ASP) по сделкам с сертификатами, продавая их на более длительный срок.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>5</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Точки опоры для продвижения многолетнего плана</h4>
                            <p>Оптимизация: Избавьтесь от необходимости ежегодно выставлять счета, воспользовавшись многолетним планом.</p>
                            <p>Настраиваемый: Защитите свой участок, обеспечив покрытие на длительное время.</p>
                            <p>Безопасность: Многолетний план позволяет использовать передовую практику сокращения жизненного цикла сертификатов TLS, минимизируя риск взлома сертификатов и регулярно заменяя слабые ключи, что повышает уровень безопасности ваших веб-страниц.</p>
                            <p>Защита на будущее: Используя опции многолетнего плана, вы также защищаете себя от дальнейшего сокращения жизненного цикла сертификата, навязанного индустрией.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}