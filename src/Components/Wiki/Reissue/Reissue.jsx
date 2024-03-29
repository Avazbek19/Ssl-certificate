import React, { useEffect } from 'react'
import WikiCategories from '../WikiCategories'

export default function Reissue() {
    useEffect(() => {
        document.title = 'Перевыпуск и продление SSL | SSL Wiki'
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
                <span className='current'>Перевыпуск и возобновление SSL</span>
            </div>
            <div className="wiki-main">
                <h3>Перевыпуск и возобновление SSL</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <svg className='cert-txt-svg' viewBox="0 0 32 31">
                            <path
                                d="M22.039 29.383c-1.681.81-3.549 1.307-5.479 1.494v-4.856c1.12-.062 2.18-.311 3.113-.747l2.366 4.11zM4.856 14.38H.062C.685 6.411 7.284.123 15.377.123c4.794 0 9.214 2.241 12.14 5.914l4.42-2.552v14.63l-12.7-7.284 4.11-2.366c-1.993-2.241-4.919-3.548-7.97-3.548-5.478 0-9.898 4.108-10.52 9.462zm19.05 7.471l4.172 2.366a15.158 15.158 0 0 1-3.985 3.984l-2.428-4.109a12.722 12.722 0 0 0 2.241-2.24zm-9.711 4.171v4.856c-1.93-.187-3.798-.685-5.417-1.494l2.366-4.109c.934.436 1.992.685 3.05.747zm-5.105-1.93l-2.428 4.11c-1.557-1.06-2.864-2.429-3.985-3.985l4.171-2.366c.623.81 1.37 1.556 2.242 2.241zm-3.424-4.295l-4.11 2.365C.748 20.481.25 18.675.063 16.683h4.794c.125 1.12.374 2.179.81 3.113z">
                            </path>
                        </svg>
                    </span>
                    <span>В этом разделе рассказывается о том, как перевыпускать различные сертификаты SSL, Code Signing и PAC. Как правильно продлить сертификат и какое время лучше всего выбрать для продления до истечения срока действия. Как приобрести дополнительные элементы SAN для вашего многодоменного SSL-сертификата.</span>
                </p>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <a href="/wiki/ssl-reissue-renewal/how-to-reissue-ssl">Переоформление SSL / Изменение доменного имени</a>
                            <p>Мы предоставляем неограниченное количество бесплатных переизданий для любого SSL, приобретенного в нашем магазине. Переоформление требуется, если вы потеряли закрытый ключ, сменили сервер или по любой другой причине...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <a href="/wiki/ssl-reissue-renewal/ssl-renewal-process">Как обновить SSL</a>
                            <p>Как обновить SSLaПроцесс обновления почти такой же, как и при оформлении нового заказа. Вам нужно будет предоставить новый или оригинальный CSR-код, пройти процесс верификации и переустановить новые файлы на сервере...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <a href="/wiki/ssl-reissue-renewal/buy-more-san-items">Купить Другие предметы SAN</a>
                            <p>Процесс продления почти такой же, как и при оформлении нового заказа. Вам нужно будет предоставить новый или оригинальный CSR-код, пройти процедуру верификации и переустановить новые файлы на сервере...</p>
                        </div>
                    </li>
                </ul>
            </div>
            <WikiCategories />
        </>
    )
}