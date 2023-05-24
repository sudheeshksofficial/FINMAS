/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 09:43:18
 * @Description: description
 */




import React, { useState } from 'react';
import { styled } from '@mui/material/styles';




function Rectangle1(props) {

    const [hover, sethover] = useState(false);

    const Property1Default = styled('div')({
        display: `flex`,
        position: `relative`,
        isolation: `isolate`,
        flexDirection: `row`,
        width: '100%',
        height: `49px`,
        justifyContent: `flex-start`,
        alignItems: `flex-start`,
        padding: `0px`,
        boxSizing: `border-box`,
    });

    const Rectangle11 = styled('div')({
        background: hover ? `linear-gradient(90deg, rgba(15,0,157,1) 0%, rgba(209,12,63,1) 35%, rgba(241,18,22,1) 100%)` : `linear-gradient(90deg, rgba(241,18,22,1) 0%, rgba(209,12,63,1) 35%, rgba(15,0,157,1) 100%)`,
        width: `1462px`,
        height: `49px`,
        position: `absolute`,
        left: `0px`,
        top: `0px`,
    });

    const mouseEnter = () => {
        sethover(true);
    };

    const mouseLeave = () => {
        sethover(false);
    };

    return (
        <Property1Default className={props.className}>
            <Rectangle11
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            />
        </Property1Default>
    );
}

export default Rectangle1;
