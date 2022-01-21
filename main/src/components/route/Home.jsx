import React from 'react'
import '../../styles/Main.css'

const Home = () =>{
    return(
        <div className="main">
            <div className='text'><strong>Декларативный</strong> Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. React будет своевременно их обновлять, когда данные изменяются.
            Декларативные представления сделают код более предсказуемым и упростят отладку.</div>
            <div className='text'><strong>Основан на компонентах</strong>Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы.Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах, можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM.</div>
            <div className='text'><strong>Научитесь однажды — пишите где угодно</strong>Нам не нужно ничего знать про остальную часть вашего технологического стека, поэтому вы можете разрабатывать новую функциональность на React, не изменяя существующий код.
            React также может работать на сервере, используя Node.js и на мобильных платформах, используя React Native.</div>
        </div>
)}

export default Home;