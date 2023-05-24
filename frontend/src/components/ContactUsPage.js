/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 10:40:24
 * @Description: description
 */

import { styled } from "@mui/material";
import ContactForm from "./contactpagecomponent/ContactForm";
import ImageDivContactUs from "./contactpagecomponent/ImageForContactUsPage";
import ThreeCard from "./contactpagecomponent/ThreeCard";
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
    height: `2684px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

function ContactUsPage(props) {
    return (
        <Desktop11 className={props.className}>
            <TitleBar1 />
            <TitleBar2 />
            <ImageDivContactUs/>
            <ThreeCard/>
            <ContactForm/>
            <AboutUsFooter/>
        </Desktop11>
    );
}

export default ContactUsPage;