/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 13:41:40
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 13:51:41
 * @Description: description
 */


import React from 'react';
import { styled } from '@mui/material/styles';




function Rectangle1Link(props) {


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
        background: `linear-gradient(90deg, rgba(241,18,22,1) 0%, rgba(209,12,63,1) 35%, rgba(15,0,157,1) 100%)`,
        width: `200px`,
        height: `120px`,
        position: `absolute`,
        left: `0px`,
        top: `0px`,
    });

    return (
        <Property1Default className={props.className}>
            <Rectangle11/>
        </Property1Default>
    );
}

export default Rectangle1Link;