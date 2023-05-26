/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-25 21:56:35
 * @Description: description
 */

import { styled } from "@mui/material";
import AboutUsFooter from "./frontpagecomponent/AboutUsFooter";
import TitleBar1 from "./frontpagecomponent/TitleBar1";
import TitleBar2 from "./frontpagecomponent/TitleBar2";
import AboutMiddleSectionComponent from "./ourteamcomponent/AboutMiddleSectionComponent";
import FirstImageOurTeamComponent from "./ourteamcomponent/FirstImageOurTeam.Component";


const Desktop11 = styled('div')({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: '100%',
    height: `2423px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

function OurTeamPage(props) {
    return (
        <Desktop11 className={props.className}>
            <TitleBar1 />
            <TitleBar2 />
            <FirstImageOurTeamComponent/>
            <AboutMiddleSectionComponent/>
            <AboutUsFooter/>
        </Desktop11>
    );
}


export default OurTeamPage;