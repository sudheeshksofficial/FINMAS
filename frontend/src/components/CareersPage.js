/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-29 11:53:04
 * @Description: description
 */


import styled from "@emotion/styled";
import CareerPageeMidComponent from "./careerpagecomponent/CareerPageeMidComponent";
import CareerPageFirstImageComponent from "./careerpagecomponent/CareerPageFirstImageComponent";
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
    height: `2924px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
  });

function CareersPage(props){
    return (
        <Desktop11 className={props.className}>
            <TitleBar1/>
            <TitleBar2/>
            <CareerPageFirstImageComponent/>
            <CareerPageeMidComponent/>
            <AboutUsFooter/>
        </Desktop11>
    );
}

export default CareersPage;