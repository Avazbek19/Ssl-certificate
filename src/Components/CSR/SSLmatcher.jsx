import React, { useEffect, useState } from 'react'

export default function SSLmatcher() {
    const [compareType, setCompareType] = useState('key');

    const handleRadioChange = (event) => {
        setCompareType(event.target.value);
    };

    useEffect(() => {
        document.title = 'Инструмент для сопоставления SSL-сертификатов'
    }, [])
    return (
        <div className='certificates'>
            <h3 className='csr-title'>Инструмент сопоставления SSL</h3>
            <div className="csr-main">
                <div>
                    <svg className='matcher-svg' viewBox='0 0 32 32'>
                        <path
                            d="M19.401.628a.53.53 0 0 0-.344-.238 15.99 15.99 0 0 0-6.105 0 .53.53 0 0 0-.345.238.53.53 0 0 0-.064.425l1.362 5.14a.53.53 0 0 0 .594.387 9.677 9.677 0 0 1 2.978 0h.08a.53.53 0 0 0 .53-.392l1.378-5.135a.53.53 0 0 0-.064-.425zm-6.454 5.835l-1.38-5.141a.53.53 0 0 0-.264-.329.53.53 0 0 0-.418-.037 15.73 15.73 0 0 0-5.3 3.053.53.53 0 0 0-.18.381.53.53 0 0 0 .132.388l3.762 3.763a.53.53 0 0 0 .377.154.53.53 0 0 0 .334-.117 9.348 9.348 0 0 1 2.571-1.485.53.53 0 0 0 .366-.63zM8.554 9.316L4.788 5.55a.53.53 0 0 0-.391-.152.53.53 0 0 0-.388.152 15.73 15.73 0 0 0-3.051 5.302.53.53 0 0 0 .037.419.53.53 0 0 0 .328.266l5.142 1.378a.61.61 0 0 0 .138 0 .53.53 0 0 0 .492-.34 9.35 9.35 0 0 1 1.49-2.571.53.53 0 0 0-.031-.69zm-1.972 8.171A9.352 9.352 0 0 1 6.463 16a9.348 9.348 0 0 1 .106-1.505.53.53 0 0 0-.386-.593l-5.135-1.38a.53.53 0 0 0-.658.408 15.848 15.848 0 0 0 0 6.105.53.53 0 0 0 .53.425.61.61 0 0 0 .139 0l5.135-1.379a.53.53 0 0 0 .386-.593zm2.004 4.505a9.35 9.35 0 0 1-1.47-2.59.53.53 0 0 0-.63-.324l-5.142 1.378a.53.53 0 0 0-.329.265.53.53 0 0 0-.036.417A15.73 15.73 0 0 0 4.03 26.44a.53.53 0 0 0 .382.18.556.556 0 0 0 .376-.155l3.763-3.762a.53.53 0 0 0 .032-.71zm3.995 2.915a9.35 9.35 0 0 1-2.571-1.49.53.53 0 0 0-.69.033l-3.763 3.762a.53.53 0 0 0-.152.393.53.53 0 0 0 .138.414 15.73 15.73 0 0 0 5.299 3.05.596.596 0 0 0 .17 0 .53.53 0 0 0 .25-.063.53.53 0 0 0 .264-.329l1.379-5.14a.53.53 0 0 0-.324-.632zm6.884 6.043l-1.378-5.136a.53.53 0 0 0-.594-.388 9.677 9.677 0 0 1-2.978 0 .53.53 0 0 0-.594.388l-1.378 5.136a.53.53 0 0 0 .064.418.53.53 0 0 0 .345.239 15.848 15.848 0 0 0 6.105 0 .53.53 0 0 0 .344-.239.53.53 0 0 0 .064-.418zm7.007-3.731l-3.763-3.765a.53.53 0 0 0-.71-.036 9.347 9.347 0 0 1-2.57 1.49.53.53 0 0 0-.324.63l1.335 5.11a.53.53 0 0 0 .265.327.53.53 0 0 0 .25.064.596.596 0 0 0 .17 0 15.73 15.73 0 0 0 5.299-3.052.53.53 0 0 0 .18-.382.53.53 0 0 0-.132-.386zm4.542-6.477a.53.53 0 0 0-.33-.265l-5.14-1.378a.53.53 0 0 0-.63.323 9.35 9.35 0 0 1-1.49 2.57.53.53 0 0 0 .048.731l3.763 3.763a.556.556 0 0 0 .377.154.53.53 0 0 0 .381-.18 15.73 15.73 0 0 0 3.053-5.3.53.53 0 0 0-.032-.418zm.583-7.78a.53.53 0 0 0-.657-.41l-5.135 1.38a.53.53 0 0 0-.388.592 9.571 9.571 0 0 1 0 2.98.53.53 0 0 0 .388.592l5.135 1.38a.61.61 0 0 0 .138 0 .53.53 0 0 0 .529-.426 15.697 15.697 0 0 0 .3-3.05 15.696 15.696 0 0 0-.308-3.037zm-.551-2.085a15.73 15.73 0 0 0-3.053-5.299.53.53 0 0 0-.381-.18.497.497 0 0 0-.387.132l-3.763 3.763a.53.53 0 0 0-.038.71 9.35 9.35 0 0 1 1.49 2.556.53.53 0 0 0 .493.338.61.61 0 0 0 .138 0l5.135-1.379a.53.53 0 0 0 .329-.263.53.53 0 0 0 .037-.376zm-4.578-6.871A15.73 15.73 0 0 0 21.167.952a.53.53 0 0 0-.419.036.53.53 0 0 0-.264.329l-1.38 5.142a.53.53 0 0 0 .304.634 9.35 9.35 0 0 1 2.57 1.491.53.53 0 0 0 .333.116.53.53 0 0 0 .377-.154l3.763-3.763a.53.53 0 0 0 .154-.393.53.53 0 0 0-.138-.384z">
                        </path>
                        <path fill="currentColor"
                            d="M15.515 7.607a.284.284 0 0 0-.212-.073 8.539 8.539 0 0 0-3.137.887.284.284 0 0 0-.143.172.284.284 0 0 0 .03.227l1.447 2.445a.284.284 0 0 0 .36.112 5.167 5.167 0 0 1 1.532-.433l.04-.01a.282.282 0 0 0 .215-.28l-.037-2.84a.282.282 0 0 0-.095-.207zm-2.469 3.935L11.59 9.101a.284.284 0 0 0-.184-.13.282.282 0 0 0-.22.042 8.4 8.4 0 0 0-2.28 2.337.284.284 0 0 0-.038.225.282.282 0 0 0 .125.177l2.48 1.387a.284.284 0 0 0 .217.026.284.284 0 0 0 .154-.11 4.992 4.992 0 0 1 1.106-1.136.284.284 0 0 0 .096-.377zm-1.844 2.104l-2.481-1.387a.284.284 0 0 0-.225-.022.284.284 0 0 0-.176.134 8.4 8.4 0 0 0-.8 3.168.284.284 0 0 0 .08.209.284.284 0 0 0 .208.09l2.841-.039a.327.327 0 0 0 .07-.02.284.284 0 0 0 .206-.246 4.992 4.992 0 0 1 .391-1.538.284.284 0 0 0-.115-.35zm.174 4.486a4.994 4.994 0 0 1-.276-.749 4.992 4.992 0 0 1-.165-.789.284.284 0 0 0-.284-.248l-2.84.038a.284.284 0 0 0-.278.305 8.463 8.463 0 0 0 .886 3.137.284.284 0 0 0 .334.141.32.32 0 0 0 .072-.02l2.437-1.453a.282.282 0 0 0 .114-.362zm1.683 2.025a4.992 4.992 0 0 1-1.13-1.12.284.284 0 0 0-.37-.075l-2.442 1.456a.284.284 0 0 0-.132.184.282.282 0 0 0 .042.22 8.4 8.4 0 0 0 2.339 2.28.284.284 0 0 0 .223.038.297.297 0 0 0 .17-.134l1.387-2.48a.284.284 0 0 0-.087-.37zm2.477.917a4.992 4.992 0 0 1-1.538-.392.282.282 0 0 0-.35.116l-1.384 2.48a.284.284 0 0 0-.021.225.282.282 0 0 0 .13.192 8.4 8.4 0 0 0 3.168.798.319.319 0 0 0 .086-.024.284.284 0 0 0 .119-.069.284.284 0 0 0 .088-.208l-.038-2.841a.284.284 0 0 0-.257-.277zm4.415 2.105l-1.454-2.439a.282.282 0 0 0-.36-.112 5.167 5.167 0 0 1-1.532.433.284.284 0 0 0-.248.284l.038 2.837a.284.284 0 0 0 .093.209.284.284 0 0 0 .212.072 8.463 8.463 0 0 0 3.137-.888.284.284 0 0 0 .143-.172.284.284 0 0 0-.029-.224zm3.06-2.934l-2.481-1.389a.284.284 0 0 0-.369.084 4.992 4.992 0 0 1-1.106 1.138.284.284 0 0 0-.074.372l1.427 2.432a.284.284 0 0 0 .185.13.284.284 0 0 0 .137-.003.319.319 0 0 0 .087-.026 8.4 8.4 0 0 0 2.28-2.337.284.284 0 0 0 .038-.223.282.282 0 0 0-.125-.18zm1.394-3.989a.284.284 0 0 0-.208-.088l-2.843.038a.284.284 0 0 0-.277.257 4.992 4.992 0 0 1-.391 1.539.284.284 0 0 0 .13.369l2.48 1.386a.297.297 0 0 0 .216.024.284.284 0 0 0 .17-.149 8.4 8.4 0 0 0 .798-3.166.282.282 0 0 0-.077-.21zm-.832-4.083a.284.284 0 0 0-.396-.114l-2.44 1.454a.282.282 0 0 0-.112.36 5.111 5.111 0 0 1 .432 1.532.284.284 0 0 0 .286.248l2.838-.038a.325.325 0 0 0 .072-.02.282.282 0 0 0 .21-.295 8.383 8.383 0 0 0-.29-1.61 8.382 8.382 0 0 0-.6-1.517zm-.585-.991a8.4 8.4 0 0 0-2.34-2.28.284.284 0 0 0-.22-.037.266.266 0 0 0-.18.124l-1.389 2.481a.284.284 0 0 0 .085.37 4.992 4.992 0 0 1 1.137 1.097.284.284 0 0 0 .302.103.325.325 0 0 0 .07-.021l2.44-1.454a.284.284 0 0 0 .13-.184.284.284 0 0 0-.035-.2zm-3.351-2.867a8.4 8.4 0 0 0-3.168-.798.284.284 0 0 0-.208.08.284.284 0 0 0-.09.207l.038 2.84a.284.284 0 0 0 .249.284 4.992 4.992 0 0 1 1.536.392.282.282 0 0 0 .189.01.284.284 0 0 0 .171-.132l1.387-2.48a.284.284 0 0 0 .023-.225.284.284 0 0 0-.129-.178z">
                        </path>
                    </svg>
                </div>
                <div>
                    <p>Инструмент SSL Matcher Tool опубликован, чтобы помочь определить возможные проблемы при управлении или установке SSL. В случае управления несколькими серверами или сертификатами очень легко несовместить правильный закрытый ключ с сертификатом SSL. Вы можете проверить, соответствует ли ваш SSL сертификату CSR (Certificate Signing Request) или закрытому ключу.</p>
                    <p>Мы не сохраняем информацию, которую вы предоставляете в рамках SSL Matching. Инструмент работает "на лету" и в режиме онлайн. Настоятельно рекомендуется проверять все на вашем сервере с помощью команд OpenSSL.</p>
                </div>
            </div>
            <form action="" className='csr-checker'>
                <fieldset className='selectors'>
                    <div>
                        <input type="radio" id='key_cert' name='compare_type' value='key' checked={compareType === 'key'} onChange={handleRadioChange}/>
                        <label htmlFor="key_cert">Проверьте, совпадают ли сертификат и закрытый ключ</label>
                        <div className="check"></div>
                    </div>
                    <div>
                        <input type="radio" id='csr_cert' name='compare_type' value='csr' checked={compareType === 'csr'} onChange={handleRadioChange}/>
                        <label htmlFor="csr_cert">Проверьте, совпадают ли сертификат и закрытый ключ</label>
                        <div className="check"></div>
                    </div>
                </fieldset>
                <div>
                    <p>Введите свой сертификат:</p>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <p>Введите свой CSR:</p>
                    <textarea name="" id=""></textarea>
                </div>
            </form>
        </div>
    )
}