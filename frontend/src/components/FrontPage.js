/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 10:40:31
 * @Description: description
 */

import TitleBar1 from "./frontpagecomponent/TitleBar1";
import { Paper, styled } from '@mui/material';
import TitleBar2 from "./frontpagecomponent/TitleBar2";
import MiddleImage from "./frontpagecomponent/MiddleImage";
import AboutUsFooter from "./frontpagecomponent/AboutUsFooter";

const Desktop11 = styled('div')({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: '100%',
    height: `1724px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

function FrontPage(props) {
    console.log(window.document.body.offsetHeight);
    console.log(1 + 1);
    return (
        <Desktop11 className={props.className}>
            <Paper style={{ maxHeight: 100, overflow: 'auto' }}>
                <TitleBar1 />
                <TitleBar2 />
                <MiddleImage />
                <AboutUsFooter />
            </Paper>
        </Desktop11>
    );
}


export default FrontPage;