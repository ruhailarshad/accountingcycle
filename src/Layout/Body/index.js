import React from 'react';
import commonClasses from '../../Styles/CommonStyles.module.css';
import classes from './body.module.css';
import BaseRouter from '../../Routes';

function Body() {
    return (
        <div className={`${commonClasses['container-full-screen']} ${classes['body-container']} container-fluid`}>
            <BaseRouter />
        </div>
    );
}

export default Body
