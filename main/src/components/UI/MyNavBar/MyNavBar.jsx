import React from 'react'
import classes from './MyNavBar.module.css'
import { Link } from 'react-router-dom'

const MyNavBar = () => {
    return(
        <div className={classes.MyNavBar}>
            <h1><i className='fab fa-react'></i>Hallests Portal<i className='fab fa-react'></i></h1>
            <div className={classes.Link}>
                <Link to="/" className={classes.link}>Главная</Link>
                <Link to="/posts" className={classes.link}>Посты</Link>
                <Link to="/rates" className={classes.link}>Курсы</Link>
                <Link to="/about" className={classes.link}>Об авторе</Link>
            </div>
        </div>
    )
}

export default MyNavBar;