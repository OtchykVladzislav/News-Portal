import React from 'react'
import classes from './MyNavBar.module.css'
import { Link } from 'react-router-dom'

const MyNavBar = () => {
    return(
        <div className={classes.MyNavBar}>
            <h1>Крч говно из жопы</h1>
            <div className={classes.Link}>
                <Link to="/about" className={classes.link}>О сайте</Link>
                <Link to="/posts" className={classes.link}>Посты</Link>
            </div>
        </div>
    )
}

export default MyNavBar;