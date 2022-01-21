import React from 'react'
import classes from './MyLoader.module.css'
import logo from '../../../img/logo192.png'

const MyLoader = () =>{
    return (
        <div className={classes.MyLoader}>
            <img src={logo} className={classes.Loader} alt="logo" />
        </div>
    )
}

export default MyLoader;