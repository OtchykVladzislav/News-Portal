import React from 'react';
import classes from './MyBlock.module.css'

const MyBlock = ({children, ...props}) => {
    return(
        <div {...props} className={classes.MyBlock}>
            {children}
        </div>
    )
}

export default MyBlock;