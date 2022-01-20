import React, { Children } from 'react';
import classes from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) =>{

    const rootclass = [classes.Background]

    if(visible){
        rootclass.push(classes.active)
    }

    return <div className={rootclass.join(' ')} onClick={() => setVisible(false)}>
                <div className={classes.MyModal} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
           </div>

}

export default MyModal;