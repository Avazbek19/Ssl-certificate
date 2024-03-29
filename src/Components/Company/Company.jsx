import React from 'react'
import { CiLock } from 'react-icons/ci'
import { FaHandshake } from 'react-icons/fa'
import { Helmet } from 'react-helmet';


export default function Company() {
    return (
        <>
            <Helmet>
                <meta name="description" content="SSL Certificate.uz - надежные SSL-сертификаты для вашего веб-сайта. Узнайте больше о безопасности онлайн и защитите свой сайт прямо сейчас!" />
                <meta name='keywords' content='Starlab Ssl, starlab ssl, ssl sertificate, сертификаты ssl'/>
                <meta property="og:description" content="SSL Certificate.uz - надежные SSL-сертификаты для вашего веб-сайта. Узнайте больше о безопасности онлайн и защитите свой сайт прямо сейчас!" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Обзор о SSL Certificate.uz" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Обзор о SSL Certificate.uz</title>
            </Helmet>
            <div className='certificates'>
                <div className='cert-txt'>
                    <h1 title='about this page'>О нашей компании SSL</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <CiLock className='cert-txt-svg' />
                        </span>
                        <span>GoGetSSL® является одним из крупнейших поставщиков SSL-сертификатов в мире и принадлежит компании Digicert Ireland Limited. Наша цель - сделать использование Всемирной паутины безопасным и защищенным с помощью различных услуг, которые мы предоставляем, таких как SSL-сертификаты, средства защиты от вредоносного ПО и сканеры, печати сайта и коды LEI. В настоящее время мы предоставляем сертификаты доменной, бизнес и расширенной валидации, Wildcard, мультидоменные (SAN), сертификаты с подписью кода и S/MIME.</span>
                    </p>
                    <p>С 2018 года мы продаем сертификаты GoGetSSL® под собственным брендом по всему миру. Мы имеем большие объемы и получаем значительные скидки от поставщиков, что дает нам возможность передавать скидки вам и предлагать самые низкие цены из возможных.</p>
                    <p>Мы продали более 1 700 000 SSL-сертификатов 98 500 клиентам и 9 000+ реселлерам по всему миру. Мы благодарны всем, кто выбрал нашу компанию, и будем продолжать улучшать качество наших услуг.</p>
                    <div className="info-block">
                        <div>
                            <span>1,700,000+</span>
                            <span>Выданные сертификаты</span>
                        </div>
                        <div>
                            <span>101,500+</span>
                            <span>Клиенты</span>
                        </div>
                        <div>
                            <span>9,000+</span>
                            <span>Партнеры по всему миру</span>
                        </div>
                    </div>
                    <h2 className='be-partner'>
                        <a className='be-partner-1'>
                            <FaHandshake />
                            <span>Наши основные партнеры</span>
                        </a>
                        <a className='be-partner-2'>
                            <span>Наши основные партнеры</span>
                        </a>
                    </h2>
                    <div className='company-extra'>
                        <div>
                            <p>RapidLEI</p>
                        </div>
                        <div>
                            <h3>Стратегический партнер RapidLEI</h3>
                            <p>Миссия SSL-сертификатов от RapidSSL - предоставить вам SSL-сертификат как можно быстрее, поэтому все процессы полностью автоматизированы. Никакой бумажной волокиты, все, что вам нужно для получения SSL, - это подтвердить владение доменом по электронной почте. RapidSSL принадлежит и управляется компанией GeoTrust. Получите дополнительную информацию на сайте <a href="https://www.rapidssl.com/" target='_blank'>www.rapidssl.com</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}