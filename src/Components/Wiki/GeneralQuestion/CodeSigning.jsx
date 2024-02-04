import React, { useEffect } from 'react'

export default function CodeSigning() {
    useEffect(() => {
        document.title = 'Новые стандарты подписания кода | SSL Wiki'
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
                <span className='current'>Подписание кодов Новые отраслевые стандарты 2023</span>
            </div>
            <div className="wiki-main">
                <h3>Подписание кодов Новые отраслевые стандарты 2023</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <svg className='cert-txt-svg' viewBox="0 0 32 28">
                            <path
                                d="M18.65 25.839v-3.95c0-.144-.072-.36-.215-.431a.653.653 0 0 0-.504-.216h-3.877a.653.653 0 0 0-.504.216c-.143.072-.216.287-.216.43v3.95c0 .217.073.36.216.504s.288.144.504.144h3.877c.216 0 .36 0 .504-.144s.216-.287.216-.503zm5.242-13.788c0-1.149-.43-2.298-1.149-3.303-.79-1.078-1.723-1.867-2.872-2.442-1.078-.503-2.227-.79-3.447-.79-3.376 0-5.889 1.436-7.612 4.38-.216.288-.144.575.144.862l2.728 2.011a.548.548 0 0 0 .36.144c.216 0 .36-.073.503-.288a11.32 11.32 0 0 1 1.796-1.867 3.064 3.064 0 0 1 1.724-.503c.646 0 1.292.216 1.795.575s.79.79.79 1.221c0 .503-.143.934-.43 1.221-.287.36-.718.647-1.436.934-.79.36-1.652 1.006-2.37 1.724-.719.79-1.078 1.652-1.078 2.585v.79c0 .144.072.36.216.431a.653.653 0 0 0 .503.216h3.878c.216 0 .36-.072.503-.216.144-.072.216-.287.216-.43 0-.288.144-.575.43-1.006s.648-.79 1.079-1.077c.43-.216.79-.431 1.005-.575.287-.144.574-.36.934-.718.36-.287.718-.647.934-.934.216-.36.431-.79.575-1.293s.216-1.005.287-1.652zM31.72 16c0 2.872-.647 5.53-2.083 7.9-1.365 2.44-3.303 4.308-5.745 5.744-2.37 1.436-5.027 2.154-7.899 2.154-2.801 0-5.458-.718-7.9-2.154S3.714 26.341 2.35 23.9C1.056 21.53.339 18.872.266 16s.574-5.53 2.083-7.9c1.508-2.44 3.447-4.308 5.745-5.744S13.049.202 15.993.202c3.016 0 5.674.718 7.9 2.154C26.19 3.792 28.13 5.659 29.636 8.1c1.58 2.37 2.227 5.027 2.083 7.899z">
                            </path>
                        </svg>
                    </span>
                    <span>Начиная с 1 июня 2023 года в 00:00 UTC отраслевые стандарты будут требовать, чтобы закрытые ключи для сертификатов подписи кода OV хранились на оборудовании, сертифицированном по стандартам FIPS 140 Level 2, Common Criteria EAL 4+ или эквивалентным. Это изменение усиливает защиту закрытых ключей сертификатов подписания кода и приводит ее в соответствие с защитой закрытых ключей сертификатов подписания кода EV (Extended Validation).</span>
                </p>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Генерация продуктов Sectigo OV и EV Code Signing</h4>
                            <p>Есть два варианта:</p>
                            <p>1. Заявитель сертификата выбирает, чтобы компания Sectigo установила сертификат на подходящее оборудование (например, токен) и отправила его ему.</p>
                            <p>2. Заявитель сертификата имеет подходящее оборудование, генерирует на нем ключи в неэкспортируемой форме, запрос на подписание сертификата (CSR) и заверение ключа, а также включает CSR и заверение ключа в запрос на сертификат. Аттестация ключа, представляющая собой файл, генерируемый HSM, содержит необходимое доказательство того, что закрытый ключ был сгенерирован на подходящем оборудовании.</p>
                            <p>В настоящее время следующие аппаратные модули поддерживаются сервисом Sectigo Key-Attestation Service для проверки производимых ими криптографических данных:</p>
                            <p>Luna Network Attached HSM, версия 7.x</p>
                            <p>Серия YubiKey 5 FIPS</p>
                            <p>Если HSM предоставляется компанией Sectigo CA, то токен + стоимость доставки оплачиваются дополнительно.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Генерация продуктов DigiCert и GoGetSSL OV и EV Code Signing</h4>
                            <p>Как и в случае с EV-подписанием кода, сертификаты OV-подписания кода имеют три варианта обеспечения для токенов и HSM:</p>
                            <p>Используйте предварительно сконфигурированный аппаратный токен, предоставленный DigiCert</p>
                            <p>Используйте свой собственный поддерживаемый аппаратный токен. <br /> У вас должен быть один из одобренных аппаратных токенов, перечисленных в поле выше: <br />SafeNet eToken 5110 FIPS (только ECC) <br /> SafeNet eToken 5110 CC (RSA 4096 и ECC) <br />    SafeNet eToken 5110+ FIPS</p>
                            <p>Аппаратные токены и устройства HSM должны соответствовать стандартам FIPS 140 Level 2, Common Criteria EAL 4+ или эквивалентным.</p>
                            <p>Если аппаратный токен предоставляется DigiCert CA, то токен + стоимость доставки оплачиваются дополнительно.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Подписание кода с помощью аппаратного токена или HSM</h4>
                            <p>Чтобы использовать сертификат подписания кода на основе токена, вам нужен доступ к аппаратному токену или HSM и учетные данные для использования хранящегося на нем сертификата. Для подписи кода на основе токена вам нужно подключить аппаратный токен к компьютеру и ввести пароль, чтобы подписать код с помощью сертификата подписи кода на токене.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Перевыпуск сертификатов</h4>
                            <p>Если вам нужно перевыпустить сертификат подписи кода после 1 июня 2023 года, вы должны установить перевыпущенный сертификат на поддерживаемый аппаратный токен или HSM. Если у вас нет токена, вы можете приобрести его у CA в это время.</p>
                            <p>Примечание: Чтобы оставаться в соответствии с требованиями, вам не нужно перевыпускать сертификаты подписи кода, выпущенные до 1 июня 2023 года. На эти сертификаты новые требования не распространяются, если вы их не перевыпускаете.</p>
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