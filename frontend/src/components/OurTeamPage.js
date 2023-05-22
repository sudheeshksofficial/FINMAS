import { styled } from "@mui/material";
import AboutUsFooter from "./frontpagecomponent/AboutUsFooter";
import TitleBar1 from "./frontpagecomponent/TitleBar1";
import TitleBar2 from "./frontpagecomponent/TitleBar2";


const Desktop11 = styled('div')({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: '100%',
    height: `1024px`,
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
            <AboutUsFooter/>
        </Desktop11>
    );
}


export default OurTeamPage;