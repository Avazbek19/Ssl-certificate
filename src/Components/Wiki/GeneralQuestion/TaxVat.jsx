import React, { useEffect } from 'react'

export default function TaxVat() {
    useEffect(() => {
        document.title = 'Правила налогообложения/НДС | SSL Wiki'
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
                <span className='current'>Правила налогообложения/НДС</span>
            </div>
            <div className="wiki-main">
                <h3>Правила налогообложения/НДС</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <svg className='cert-txt-svg' viewBox="0 0 32 28">
                            <path
                                d="M19.98352 19.12144c0 .30824-.1128.57526-.33783.80017-.22528.22553-.49218.33808-.80042.33808h-5.69041c-.30844 0-.57508-.11255-.80036-.33808-.22522-.22485-.33784-.49186-.33784-.80017v-2.84511H.0667v8.53576c0 .7823.27848 1.45199.83574 2.00913.55714.5572 1.22707.8358 2.00956.8358h26.1762c.7823 0 1.45218-.2786 2.00938-.8358.55739-.55714.83574-1.22683.83574-2.00913v-8.53576H19.98352v2.8451z" />
                            <path
                                d="M13.72364 16.27633h4.55278v2.2762h-4.55278zM31.0975 5.73112c-.55713-.55726-1.22707-.83573-2.00936-.83573h-6.2597V2.05003c0-.47424-.16586-.87722-.4979-1.2092-.33167-.3318-.73496-.49784-1.20901-.49784H10.87866c-.47411 0-.87716.16605-1.2092.49784s-.4979.7349-.4979 1.2092v2.84536H2.91198c-.78242 0-1.45236.27847-2.00956.83573-.55726.5572-.83574 1.22677-.83574 2.00925v6.82866h31.86656V7.74037c0-.78248-.2783-1.45205-.83574-2.00925zM20.55244 4.8954H11.4477V2.61906h9.10474V4.8954z">
                            </path>
                        </svg>
                    </span>
                    <span>Мы являемся компанией Латвийской Республики (LV), работающей в соответствии с правилами Европейского Союза (ЕС), и уважаем уплату налогов, если мы обязаны это делать. За каждую покупку через нашу компанию вы получите стандартный счет-фактуру ЕС со всеми реквизитами.</span>
                </p>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Все клиенты за пределами ЕС и России (0%)</h4>
                    <p>Для частных лиц, индивидуальных предпринимателей, организаций и государственных учреждений, находящихся за пределами Европы и Российской Федерации, НДС/ТАКС не взимается.</p>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Клиенты из ЕС с действительным номером НДС</h4>
                    <ul className='pri-policy-lists'>
                        <li>0% НДС (обратный сбор)</li>
                        <li>21% НДС для Латвийской Республики</li>
                    </ul>
                    <h4 className='term-title'>Клиенты из стран Европейского Союза без действительного номера НДС</h4>
                    <p>Мы взимаем местный НДС со всех заказов, если вы являетесь физическим лицом, индивидуальным предпринимателем или коммерческой компанией без действующего номера НДС.</p>
                    <ul className='pri-policy-lists'>
                        <li>Австрия (AT) - 20%</li>
                        <li>Мальта (MT) - 18%</li>
                        <li>Польша (PL) - 23%</li>
                        <li>Румыния (RO) - 19%</li>
                        <li>Словения (SI) - 22%</li>
                        <li>Болгария (BG) - 20%</li>
                        <li>Кипр (CY) - 19%</li>
                        <li>Дания (DK) - 25%</li>
                        <li>Финляндия (FI) - 24%</li>
                        <li>Германия (DE) - 19%</li>
                        <li>Ирландия (IE) - 23%</li>
                        <li>Латвия (LV) - 21%</li>
                        <li>Люксембуг (LU) - 17%</li>
                        <li>Швеция (SE) - 25%</li>
                        <li>Венгрия (HU) - 27%</li>
                        <li>Нидерланды (NL) - 21%</li>
                        <li>Португалия (PT) - 23%</li>
                        <li>Словакия (SK) - 20%</li>
                        <li>Бельгия (BE) - 21%</li>
                        <li>Хорватия (HR) - 25%</li>
                        <li>Чешская Республика (CZ) - 21%</li>
                        <li>Эстония (EE) - 20%</li>
                        <li>Франция (FR) - 20%</li>
                        <li>Греция (EL) - 24%</li>
                        <li>Италия (IT) - 22%</li>
                        <li>Литва (LT) - 21%</li>
                        <li>Испания (ES) - 21%</li>
                        <li>Объединенный Королевство - 20%</li>
                    </ul>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Российская Федерация (16,67%)</h4>
                    <p>НДС 16,67% применяется ко всем заказам из Российской Федерации с 1 января 2019 года в соответствии с цифровыми услугами, указанными в статье 174.2 Налогового кодекса РФ.</p>
                    <p>Мы зарегистрировались в качестве налогоплательщика Российской Федерации и получили номера ИНН и КПП, чтобы соответствовать новому закону. Более подробную информацию вы можете найти на официальном сайте Федеральной налоговой службы.</p>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}