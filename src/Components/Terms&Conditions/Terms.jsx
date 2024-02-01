import React, { useEffect } from 'react'

export default function Terms() {
    useEffect(()=>{
        document.title = 'Условия и положения | GoGetSSL®'
    },[])
    return (
        <div className='certificates'>
            <h3 className='terms-title'>Условия и положения. Условия заказа</h3>
            <p className='terms-info'>
                <span>
                    <svg viewBox="0 0 30 32">
                        <path
                            d="M18.248 7.124h4.075v4.754l2.066-3.208V5.981a.621.621 0 0 0-.182-.438l-5.27-5.27a.62.62 0 0 0-.437-.18H2.207C1.182.092.347.925.347 1.951v28.096c0 1.026.834 1.86 1.86 1.86h20.322c1.025 0 1.86-.834 1.86-1.86v-7.977l-2.066 3.16v4.61H2.414V2.158h15.068v4.198c0 .424.343.768.767.768z">
                        </path>
                        <path
                            d="M26.696 14.873l-.854-.558a.301.301 0 0 0-.417.088l-4.597 7.034-.884-.577 4.597-7.035a.301.301 0 0 0-.088-.417l-.853-.558a.301.301 0 0 0-.417.087l-6.884 10.534a.302.302 0 0 0-.048.15l-.18 3.655a.3.3 0 0 0 .435.285l3.276-1.633a.3.3 0 0 0 .118-.105l6.883-10.533a.3.3 0 0 0-.087-.417zM29.516 10.557L26.42 8.534a.301.301 0 0 0-.417.087l-2.088 3.195a.301.301 0 0 0 .088.418l3.096 2.023c.139.09.326.051.417-.088l2.087-3.195a.301.301 0 0 0-.087-.417zM5.422 6.718h5.909a.758.758 0 0 0 0-1.515H5.422a.758.758 0 0 0 0 1.515zM16.633 9.748a.758.758 0 0 0-.757-.758H5.422a.758.758 0 0 0 0 1.515h10.454c.418 0 .757-.339.757-.757zM5.422 14.293h5.909a.758.758 0 0 0 0-1.515H5.422a.758.758 0 0 0 0 1.515zM5.422 18.08h5.909a.758.758 0 0 0 0-1.515H5.422a.758.758 0 0 0 0 1.515zM5.743 27.87c-.147.19.119.46.268.267.47-.608.86-1.263 1.184-1.954.202.127.468.102.686.016.315-.124.581-.363.835-.58.15-.128.325-.34.533-.36.158-.015.373.113.531.14.414.07.898-.05 1.298-.148.38-.094.824-.242 1.048-.586.133-.205-.195-.395-.327-.19-.18.274-.616.36-.911.433-.346.086-.748.17-1.105.11-.27-.047-.487-.21-.764-.086-.37.165-.653.512-.98.746-.147.105-.314.206-.497.22a.244.244 0 0 1-.188-.068c.04-.093.08-.187.118-.282.37-.917.536-1.848.708-2.814.087-.49.232-1.264-.472-1.311-.621-.042-1.158.855-1.357 1.327-.177.423-.197.914-.184 1.365.009.281.11.573.185.864-.597.096-1.123.698-1.03 1.295.09.588.825.284 1.1.067.277-.22.367-.495.37-.792.056.092.102.201.15.304-.32.718-.722 1.4-1.199 2.017zm.664-2.144c-.056.25-.372.496-.621.52-.196.017-.077-.332-.038-.41.122-.246.423-.406.676-.475.012.123.01.245-.017.365zm.316-.734c-.064-.3-.154-.603-.177-.877-.045-.528.05-1.082.311-1.544.164-.289.498-.731.852-.77.316-.033.123.736.095.89-.084.477-.145.95-.262 1.422-.11.437-.249.87-.415 1.295-.088-.22-.203-.36-.404-.416z">
                        </path>
                    </svg>
                </span>
                <span>
                    Настоящие Условия заказа заключаются между Digicert Ireland Limited, латвийской компанией или другой аффилированной компанией, указанной в Соглашении ("GoGetSSL") и Клиентом. Условия заказа регулируются и являются частью Генерального соглашения об услугах, доступного по адресу https://www.digicert.com/master-services-agreement ("Соглашение"). Принимая настоящие Условия заказа, Клиент также принимает условия Соглашения, частью которого являются настоящие Условия заказа. "Клиент" означает вас и любое юридическое, коммерческое или физическое лицо, от имени которого вы получаете доступ к Услугам или используете их.
                </span>
            </p>
            <h4 className='term-title'>1. Услуги</h4>
            <p className='term-info'>GoGetSSL предлагает цифровые сертификаты и сопутствующие услуги (далее "Услуги") через Портал.</p>
            <h4 className='term-title'>2. Закупки</h4>
            <p className='term-info'>Цены и сроки предоставления Услуг для каждой покупки Клиентом Услуг у GoGetSSL указаны в указанном месте заказа на сайте https://www.gogetssl.com/, время от времени обновляются (каждый из них - "Прайс-лист") и отражаются в Учетной записи Клиента на Портале. Несмотря на предыдущее предложение, если Клиент получает индивидуальное предложение на Услуги, цены на такую покупку будут соответствовать ценам, указанным в предложении, которое представляет собой Прайс-лист для целей настоящих Условий заказа. Прайс-лист и Учетная запись Клиента на Портале определяют право Клиента на приобретенные Услуги в течение каждого указанного периода, включая максимальное право Клиента. Если Клиент превысит свое право на Услуги, он будет обязан выплатить компании GoGetSSL плату за использование. Плата за использование" рассчитывается как превышение использования услуг Клиентом над правом, умноженное на сумму, применимую к этому превышению.</p>
            <h4 className='term-title'>3. Политика и руководство по конфиденциальности</h4>
            <p className='term-info'>Политика конфиденциальности, применимая к Услугам, изложена по адресу https://www.gogetssl.uz/privacy-policy.</p>
            <h4 className='term-title'>4. Условия подписки</h4>
            <p className='term-info'>Если клиент приобретает у GoGetSSL Услуги, предоставляемые другим поставщиком, клиент понимает, что использование таких Услуг может регулироваться дополнительными условиями поставщика. Если клиент перепродает такие Услуги, он заключает письменное соглашение с каждым конечным клиентом, которое обязывает его соблюдать применимые условия и положения Поставщика. Под "Продавцом" понимаются организации, которые лицензируют Услуги GoGetSSL для перепродажи, включая, без ограничения, компанию Sectigo Limited. Без ограничения вышеизложенного, условия использования Sectigo Limited находятся по адресу https://sectigo.com/legal/, с периодическими обновлениями.</p>
            <h4 className='term-title'>5. Разное</h4>
            <p className='term-info'>Положения настоящих Условий заказа, включая Соглашение, заменяют собой все предыдущие и современные обсуждения или соглашения по предмету настоящего документа. Настоящие Условия заказа могут быть изменены только в письменном виде, подписанном обеими сторонами и содержащем прямую ссылку на настоящие условия. В случае противоречия между условиями настоящих Условий заказа и условиями Соглашения, условия настоящих Условий заказа имеют преимущественную силу. Термины с заглавной буквы, используемые, но не определенные в настоящем документе, имеют значение, данное им в Соглашении.</p>
        </div>
    )
}