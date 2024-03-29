import React from 'react'
import { LiaCertificateSolid } from "react-icons/lia";
import Privacytable from './Privacytable'
import PrivacyRights from './PrivacyRights'
import PrivacyVendors from './PrivacyVendors'
import { Google1, Google2, Paypal } from './GooglePaypal'
import { Helmet } from 'react-helmet';

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <meta name="description" content="Политика конфиденциальности компании EnVers Group, обзор GDRP" />
                <meta name='keywords' content='политика конфиденциальности, конфиденциальность, компания EnVers Group, GDPR, GDRP' />
                <meta property="og:description" content="Политика конфиденциальности компании EnVers Group, обзор GDRP" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Политика конфиденциальности" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Политика конфиденциальности</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='about this page'>Политика конфиденциальности</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <LiaCertificateSolid className='cert-txt-svg' />
                        </span>
                        <span><b>Дата вступления в силу: 15 октября 2020 г.</b> <br /> Digicert Ireland Limited, номер VAT/TAX: IE3500071PH, юридический адрес: Block 21, Beckett Way, Park West Business Park, D12 C9YE Dublin 12, Ireland ("мы", "мы", "наш" или "Компания") в качестве Контроллера данных управляет веб-сайтом www.gogetssl.com ("Сервис"). Настоящая "Политика конфиденциальности" информирует вас о нашей политике в отношении обработки (сбора, хранения, использования, раскрытия, стирания и т.д.) Личных данных, когда вы посещаете наш сайт и/или используете, использовали или выразили желание использовать любую из наших Услуг, или если вы каким-либо образом связаны с этими Услугами, а также о выборе, который вы имеете в отношении этих данных. Мы используем ваши Персональные данные для предоставления и улучшения Услуг, выполнения контракта и юридических обязательств, субъектом которых мы являемся.</span>
                    </p>
                    <p>При использовании Сервиса ваши Персональные данные обрабатываются в соответствии с настоящей Политикой конфиденциальности. Если в настоящей Политике конфиденциальности не определено иное, термины, используемые в настоящей Политике конфиденциальности, имеют те же значения, что и в наших Положениях и условиях.</p>
                    <p>Если Пользователь не согласен с Политикой конфиденциальности или отдельными ее положениями, Пользователь не обязан предоставлять Персональные данные Компании. В случаях, когда Пользователь не предоставляет Компании Персональные данные, необходимые для исполнения договора или оказания Услуг, а также для исполнения юридических обязательств Компании, предусмотренных нормативными актами, Компания имеет законные основания отказать Пользователю в оказании Услуг полностью или частично.</p>
                    <p>Если предоставленные Пользователем Персональные данные изменились или обрабатываемая Компанией информация о Пользователе является неточной или ошибочной, Пользователь вправе потребовать изменить, уточнить или исправить эту информацию. Компания не несет ответственности за неточные или неполные данные, предоставленные Пользователем.</p>
                    <h4 className='term-title'>Определения</h4>
                    <p>Персональные данные</p>
                    <p>Персональные данные - это данные о живом человеке (физическом лице), который может быть идентифицирован или идентифицируется на основании этих данных (или на основании этих данных и другой информации, которая находится в нашем распоряжении или может оказаться в нашем распоряжении). Определение должно иметь те же значения, что и в статье 4(1) GDPR.</p>
                    <p>Третья сторона</p>
                    <p>Третья сторона означает физическое или юридическое лицо, государственный орган, агентство или орган, не являющийся субъектом данных, контролером, обработчиком и лицами, которые под прямым руководством контролера или обработчика уполномочены обрабатывать Персональные данные. Определение имеет то же значение, что и в статье 4 (10) GDPR.</p>
                    <p>Данные об использовании</p>
                    <p>Данные об использовании - это данные, собираемые автоматически либо в процессе использования Сервиса, либо из инфраструктуры самого Сервиса (информация, которую отправляет ваш браузер при посещении нашей веб-страницы или при доступе к Сервису с помощью мобильного устройства, например, адрес протокола Интернета вашего компьютера (напр. IP-адрес), тип браузера, версия браузера, страницы нашего Сервиса, которые вы посещаете, время и дата вашего посещения, продолжительность посещения страницы, уникальные идентификаторы устройств и другие диагностические данные, продолжительность посещения страницы, тип используемого вами мобильного устройства, уникальный идентификатор вашего мобильного устройства, IP-адрес вашего мобильного устройства, операционная система вашего мобильного устройства, тип используемого вами мобильного интернет-браузера, уникальные идентификаторы устройств и другие диагностические данные).</p>
                    <p>Cookies</p>
                    <p>Файлы cookie - это небольшие фрагменты данных, хранящиеся на устройстве пользователя.</p>
                    <p>GDPR</p>
                    <p>Постановление (ЕС) 2016/679 Европейского парламента и Совета от 27 апреля 2016 года о защите физических лиц в отношении обработки персональных данных и о свободном перемещении таких данных, а также об отмене Директивы 95/46/EC (Общее положение о защите данных).</p>
                    <p>Контроллер данных</p>
                    <p>Контролер данных - это лицо, которое (самостоятельно или совместно с другими лицами) определяет цели и порядок обработки любых личных данных. В целях настоящей Политики конфиденциальности мы являемся Контролером ваших данных. Определение имеет то же значение, что и в статье 4(7) GDPR.</p>
                    <p>Обработчик данных (или поставщики услуг, или субподрядчики)</p>
                    <p>Обработчик данных (или поставщик услуг, или субподрядчик) означает любое лицо (не являющееся сотрудником Контроллера данных), которое обрабатывает Личные данные от имени Контроллера данных. Мы можем пользоваться услугами различных Поставщиков услуг для более эффективной обработки ваших Персональных данных. Определение имеет то же значение, что и в статье 4(8) GDPR.</p>
                    <p>Субъект данных</p>
                    <p>Субъект данных - любой живой человек (физическое лицо), являющийся субъектом персональных данных.</p>
                    <p>Пользователь</p>
                    <p>Пользователь - это физическое лицо, использующее наш Сервис. Пользователь соответствует Субъекту данных, который является субъектом Персональных данных.</p>
                    <h4 className='term-title'>Сбор и использование информации</h4>
                    <p>Мы собираем несколько различных типов информации для различных целей, чтобы предоставить и улучшить наши услуги для вас, выполнить контракт и юридические обязательства, которые мы несем.</p>
                    <p>Типы собираемых данных - Персональные данные</p>
                    <p>При использовании нашего Сервиса мы можем попросить вас предоставить нам определенные типы личных данных, то есть персонально идентифицируемую информацию, которая может быть использована для связи или идентификации вас ("Личные данные"). Персональные данные могут включать, но не ограничиваться ими:</p>
                    <ul className='pri-policy-lists'>
                        <li>
                            <span>Идентификационные данные - имя, фамилия, идентификационный код, дата рождения;</span>
                        </li>
                        <li>
                            <span>Контактные данные - номер телефона, адрес электронной почты, адрес проживания (адрес, штат, провинция, почтовый индекс, город, страна), язык переписки;</span>
                        </li>
                        <li>
                            <span>Входящая и исходящая электронная корреспонденция - переписка с пользователями;</span>
                        </li>
                        <li>
                            <span>Идентификатор транзакции (не номер кредитной карты)</span>
                        </li>
                        <li>
                            <span>Cookies</span>
                        </li>
                        <li>
                            <span>Данные об использовании</span>
                        </li>
                    </ul>
                    <p>Purposes and legal basis of your Personal Data processing</p>
                    <p>Существуют различные цели обработки Личных данных, и каждое действие по обработке должно опираться на одну из правовых основ. Компания обрабатывает ваши Персональные данные, опираясь на следующие правовые основания:</p>
                    <ul className='pri-policy-lists'>
                        <li>
                            <span>Обработка персональных данных, необходимых для оказания услуг и выполнения договора</span>
                        </li>
                        <li>
                            <span>Мы обрабатываем Личные данные на этой правовой основе, если это необходимо для выполнения Услуг или договора, заключенного с вами, или для принятия мер, необходимых до подписания договора по вашему запросу.</span>
                        </li>
                        <li>
                            <span>Обработка персональных данных, которая необходима для выполнения юридических обязательств Компании</span>
                        </li>
                        <li>
                            <span>В некоторых случаях нам необходимо обрабатывать ваши Персональные данные, поскольку мы обязаны это делать в соответствии с нормативными актами. Если обработка Личных данных требуется в соответствии с нормативными актами, ни мы, ни вы не можем повлиять на обработку таких Личных данных.</span>
                        </li>
                        <li>
                            <span>Обработка данных, основанная на законных интересах компании</span>
                        </li>
                        <li>
                            <span>Законный интерес означает, что нам не нужно напрямую обрабатывать ваши личные данные для выполнения договорных или юридических обязательств, но обработка все равно необходима. Обработка может быть необходима для развития наших услуг и продуктов, чтобы сделать их лучше для вас; для защиты нашей веб-страницы от атак; для принятия деловых решений путем сбора статистики. Поскольку в соответствии с законными интересами мы не обязаны обрабатывать ваши персональные данные по закону или для выполнения наших договорных обязательств, но мы также не требуем вашего разрешения на обработку - мы предоставляем вам право запросить объяснения, а также представить возражения, если вы считаете, что обработка ваших персональных данных для целей, указанных в таблице ниже, нарушает ваши права.</span>
                        </li>
                        <li>
                            <span>Обработка персональных данных на основании вашего согласия</span>
                        </li>
                        <li>
                            <span>Если мы получили ваше согласие, мы можем использовать ваши Личные данные, чтобы связаться с вами с помощью информационных рассылок, маркетинговых или рекламных материалов и другой информации, которая может представлять для вас интерес. Вы всегда имеете право отозвать свое согласие (каждое в отдельности, а также все вместе), данное нам: вы можете отказаться от получения любых или всех этих сообщений от нас, следуя ссылке для отказа от подписки или инструкциям, указанным в любом электронном письме, которое мы отправляем, или связавшись с нами по адресу: avazjumoqulov@gmail.com.</span>
                        </li>
                        <li>
                            <span>Если вы отзовете свое согласие, мы прекратим обработку ваших данных в целях, для которых было дано согласие. Отзыв согласия не влияет на законность обработки, основанной на согласии до его отзыва. </span>
                        </li>
                    </ul>
                    <p>В приведенной ниже таблице вы найдете несколько примеров того, для каких целей и на каком законном основании мы обрабатываем ваши персональные данные.</p>
                    <Privacytable />
                    <h4 className='term-title'>Данные об использовании</h4>
                    <p>Мы также можем собирать информацию, которую ваш браузер отправляет при каждом посещении нашего Сервиса или при доступе к Сервису с помощью мобильного устройства ("Данные об использовании").</p>
                    <p>Данные об использовании могут включать такую информацию, как адрес протокола Интернета вашего компьютера (например, IP-адрес), тип браузера, версия браузера, страницы нашего Сервиса, которые вы посещаете, время и дата вашего посещения, время, проведенное на этих страницах, уникальные идентификаторы устройств и другие диагностические данные.</p>
                    <p>Когда вы получаете доступ к Сервису с помощью мобильного устройства или через него, эти Данные об использовании могут включать такую информацию, как тип используемого вами мобильного устройства, уникальный идентификатор вашего мобильного устройства, IP-адрес вашего мобильного устройства, операционная система вашего мобильного устройства, тип используемого вами мобильного интернет-браузера, уникальные идентификаторы устройства и другие диагностические данные.</p>
                    <h4 className='term-title'>Отслеживание данных Cookies</h4>
                    <p>Мы используем Cookies и аналогичные технологии отслеживания, чтобы отслеживать активность на нашем Сервисе и хранить определенную информацию.</p>
                    <p>Cookies - это файлы с небольшим объемом данных, которые могут включать анонимный уникальный идентификатор. Cookies отправляются в ваш браузер с веб-сайта и сохраняются на вашем устройстве. Также используются технологии отслеживания: маяки, теги и скрипты для сбора и отслеживания информации, а также для улучшения и анализа нашего Сервиса. Вы можете настроить свой браузер так, чтобы он отказывался от всех Cookies или указывал, когда отправляются Cookies. Однако, если вы не принимаете Cookies, вы не сможете пользоваться некоторыми разделами нашего Сервиса.</p>
                    <h4 className='term-title'>Примеры используемых нами файлов cookie:</h4>
                    <ul className='pri-policy-lists'>
                        <li>
                            <span>Сессионные файлы cookie. Мы используем сеансовые Cookies для работы нашего Сервиса.</span>
                        </li>
                        <li>
                            <span>Cookies для предпочтений. Мы используем файлы Preference Cookies для запоминания ваших предпочтений и различных настроек.</span>
                        </li>
                        <li>
                            <span>Cookies безопасности. Мы используем Cookies безопасности в целях безопасности.</span>
                        </li>
                    </ul>
                    <h4 className='term-title'>Сохранение данных</h4>
                    <p>Компания будет хранить ваши Личные данные только до тех пор, пока это необходимо для целей, изложенных в настоящей Политике конфиденциальности. Мы будем хранить и использовать ваши Личные данные в той мере, в какой это необходимо для выполнения наших юридических обязательств (например, если мы обязаны хранить ваши данные для соблюдения действующего законодательства), разрешения споров и обеспечения соблюдения наших юридических соглашений и политик.</p>
                    <p>Компания также сохраняет данные об использовании для целей внутреннего анализа. Данные об использовании обычно хранятся в течение более короткого периода времени, за исключением случаев, когда эти данные используются для укрепления безопасности или улучшения функциональности нашего Сервиса, или когда мы по закону обязаны хранить эти данные в течение более длительного периода времени.</p>
                    <h4 className='term-title'>Передача данных</h4>
                    <p>Ваша информация, включая Личные данные, может быть передана на компьютеры, расположенные за пределами вашего штата, провинции, страны или другой правительственной юрисдикции, где законы о защите данных могут отличаться от законов вашей юрисдикции.</p>
                    <p>Персональные данные обрабатываются на территории Европейского союза / Европейской экономической зоны (ЕС / ЕЭЗ). Однако, если Персональные данные передаются за пределы ЕС/ЕЭЗ, Компания обязуется принять все необходимые меры безопасности для обеспечения такого же уровня безопасности Персональных данных, как и в ЕС/ЕЭЗ, и соответствующие гарантии в соответствии с положениями Статьи 46 GDPR. Компания передает Персональные данные только при наличии законных оснований и соответствующих гарантий: (i) договор с получателем включает стандартные положения ЕС о защите данных или другие согласованные правила, кодексы поведения, сертификации, утвержденные в соответствии с GDPR, или (ii) получатель находится в стране, которая обеспечивает адекватный уровень защиты Персональных данных в соответствии с решением Комиссии ЕС. По запросу Пользователь может получить более подробную информацию о передаче Персональных данных в страны, не входящие в ЕС/ЕЭЗ.</p>
                    <p>Компания предпримет все необходимые меры для обеспечения безопасной обработки ваших персональных данных в соответствии с настоящей Политикой конфиденциальности, и никакая передача ваших персональных данных не будет осуществляться в организацию или страну, если не будет обеспечен надлежащий контроль, включая безопасность ваших персональных данных и другой личной информации.</p>
                    <h4 className='term-title'>Раскрытие данных</h4>
                    <p>Когда Компания получает и передает ваши Персональные данные Обработчикам данных, которые обрабатывают Персональные данные по поручению Компании, Компания принимает все необходимые меры для обеспечения обработки Персональных данных Обработчиками данных в соответствии с договором или нормативными актами и документированными инструкциями Компании.</p>
                    <p>Когда Компания получает и передает ваши Персональные данные Третьим лицам (независимым Контролерам данных), Третьи лица, как независимые Контролеры данных, обрабатывают Персональные данные в соответствии со своими политиками конфиденциальности, которые доступны на сайте соответствующего поставщика услуг.</p>
                    <p>Компания также обязана передавать Личные данные государственным или местным государственным учреждениям в случаях, предусмотренных нормативными актами (например, Комиссии рынка финансов и капитала, Центру защиты прав потребителей, Службе государственных доходов, Отделу финансовой разведки Латвии, Службе государственной безопасности, Государственной полиции и другим правоохранительным органам и учреждениям финансовых расследований), судам, учреждениям внесудебного разрешения споров, администраторам процессов неплатежеспособности, присяжным судебным исполнителям и т. д.).</p>
                    <h4 className='term-title'>Раскрытие информации для правоохранительных органов</h4>
                    <p>При определенных обстоятельствах Компания может быть обязана раскрыть ваши Персональные данные, если это требуется по закону или в ответ на обоснованные запросы государственных органов (например, суда или правительственного агентства).</p>
                    <h4 className='term-title'>Требования законодательства</h4>
                    <p>Компания может раскрыть ваши Личные данные в добросовестном убеждении, что такие действия необходимы для:</p>
                    <ul className='pri-policy-lists'>
                        <li>
                            <span>Для выполнения юридических обязательств</span>
                        </li>
                        <li>
                            <span>Для защиты и охраны прав или собственности компании</span>
                        </li>
                        <li>
                            <span>Для предотвращения или расследования возможных правонарушений в связи с Сервисом</span>
                        </li>
                        <li>
                            <span>Для защиты личной безопасности пользователей Сервиса или общественности</span>
                        </li>
                        <li>
                            <span>Для защиты от юридической ответственности</span>
                        </li>
                    </ul>
                    <h4 className='term-title'>Безопасность данных</h4>
                    <p>Безопасность ваших данных очень важна для нас, но помните, что ни один способ передачи данных через Интернет или способ электронного хранения не является на 100% безопасным. Хотя мы стараемся использовать коммерчески приемлемые средства для защиты ваших личных данных, мы не можем гарантировать их абсолютную безопасность.</p>
                    <p>Тем не менее, Компания установила необходимые правовые, организационные, физические и технические меры безопасности для защиты ваших Персональных данных. Вот некоторые примеры используемых нами мер:</p>
                    <ul className='pri-policy-lists'>
                        <li>
                            <span>Физические меры - бумажные документы, содержащие Персональные данные, хранятся в закрытых помещениях и шкафах, доступ к которым имеют только определенные сотрудники для выполнения своих должностных обязанностей; помещения для обработки данных и IT-системы достаточно защищены от огня, перегрева, воды, нестабильности тока и отключения электроэнергии.</span>
                        </li>
                        <li>
                            <span>Технические меры - все рабочие компьютеры сотрудников защищены парольными заставками, когда сотрудник уходит; обеспечено, что IT-система не принимает новые попытки входа и блокирует имя пользователя, если превышено определенное количество попыток доступа; обеспечено, что особо уязвимые системы (например, ноутбуки, смартфоны) достаточно защищены (с помощью шифрования или других средств).</span>
                        </li>
                        <li>
                            <span>Организационные средства - всем Пользователям ИТ-системы назначаются роли и профили; обеспечивается удаление прав доступа при увольнении сотрудника из Компании; обеспечивается отсутствие доступа из помещений общего пользования в помещения, где обрабатываются Персональные данные.</span>
                        </li>
                        <li>
                            <span>В случае использования нами внешних компаний для оказания услуг, включающих обработку данных, мы заключаем с такими поставщиками услуг соглашения о защите данных, обязывающие их: a) принимать соответствующие меры для обеспечения конфиденциальности и безопасности персональных и ii) обрабатывать Персональные данные в соответствии с действующими законодательными требованиями.</span>
                        </li>
                    </ul>
                    <h4 className='term-title'>Ваши права</h4>
                    <PrivacyRights />
                    <h4 className='term-title'>Поставщики услуг (субподрядчики)</h4>
                    <p>Мы можем нанимать сторонние компании и частных лиц для оказания услуг ("Поставщики услуг"), предоставления услуг от нашего имени, выполнения связанных с услугами услуг или оказания нам помощи в анализе использования наших услуг.</p>
                    <p>Эти третьи лица имеют доступ к вашим Личным данным только для выполнения этих задач от нашего имени и обязуются не раскрывать и не использовать их для каких-либо других целей.</p>
                    <h4 className='term-title'>Поставщики - центры сертификации (субподрядчики)</h4>
                    <p>Мы используем сторонних поставщиков услуг для обработки/выдачи SSL-сертификатов, инструментов соответствия PCI, доменов и других услуг. Для обеспечения выполнения Услуг и контракта нам разрешено передавать вашу личную информацию и данные о заказах сторонним поставщикам Услуг.</p>
                    <PrivacyVendors />
                    <h4 className='term-title'>Аналитика (субподрядчик)</h4>
                    <p>Мы можем использовать сторонних поставщиков услуг для мониторинга и анализа использования нашего Сервиса.</p>
                    <Google1 />
                    <h4 className='term-title'>Поведенческий ремаркетинг (субподрядчик)</h4>
                    <p>Comapny использует услуги ремаркетинга для размещения рекламы на сайтах третьих лиц после того, как вы посетили наш Сервис. Мы и наши сторонние поставщики используют Cookies для информирования, оптимизации и подачи рекламы на основе ваших прошлых посещений нашего Сервиса.</p>
                    <Google2 />
                    <h4 className='term-title'>Платежи (субподрядчики)</h4>
                    <p>Мы можем предоставлять платные продукты и/или услуги в рамках Сервиса. В этом случае мы используем услуги третьих лиц для обработки платежей (например, платежные процессоры). Мы не храним и не собираем данные вашей платежной карты. Эта информация передается непосредственно нашим сторонним платежным процессорам, чье использование вашей личной информации регулируется их политикой конфиденциальности. Эти платежные процессоры придерживаются стандартов, установленных PCI-DSS, управляемых Советом по стандартам безопасности PCI, который является совместной инициативой таких брендов, как Visa, Mastercard, American Express и Discover. Требования PCI-DSS помогают обеспечить безопасную обработку платежной информации. Мы работаем со следующими платежными процессорами:</p>
                    <Paypal />
                    <h4 className='term-title'>Ссылки на другие сайты</h4>
                    <p>Наш Сервис может содержать ссылки на другие сайты, которые не управляются нами. Если вы нажмете на ссылку третьей стороны, вы будете направлены на сайт этой третьей стороны. Мы настоятельно рекомендуем вам ознакомиться с политикой конфиденциальности каждого сайта, который вы посещаете. Мы не контролируем и не несем ответственности за содержание, политику конфиденциальности или практику использования сайтов или услуг третьих лиц.</p>
                    <h4 className='term-title'>Конфиденциальность детей</h4>
                    <p>Наш сервис не предназначен для лиц младше 13 лет ("Дети"). Мы сознательно не собираем персональные данные лиц, не достигших 13-летнего возраста. Если вы являетесь родителем или опекуном и вам известно, что ваши дети предоставили нам Персональные данные, пожалуйста, свяжитесь с нами. Если нам станет известно, что мы собирали Личные данные детей без подтверждения согласия родителей, мы примем меры для удаления такой информации с наших серверов.</p>
                    <h4 className='term-title'>Изменения в Политике конфиденциальности</h4>
                    <p>Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы будем уведомлять вас о любых изменениях, публикуя новую Политику конфиденциальности на этой странице. Мы сообщим вам об этом по электронной почте и/или в заметном уведомлении на нашем Сервисе до того, как изменения вступят в силу, и обновим "дату вступления в силу" в верхней части данной Политики конфиденциальности. Советуем вам периодически просматривать настоящую Политику конфиденциальности на предмет изменений. Изменения в Политике конфиденциальности вступают в силу с момента их публикации на этой странице.</p>
                    <h4 className='term-title'>Свяжитесь с нами</h4>
                    <p>Если у вас возникли вопросы по данной Политике конфиденциальности, пожалуйста, свяжитесь с нами:</p>
                    <ul className='pri-policy-lists'>
                        <li>
                            <span>По электронной почте: privacy@gogetssl.com</span>
                        </li>
                        <li>
                            <span>Использование билетов поддержки через https://my.gogetssl.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}