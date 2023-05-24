/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 10:39:30
 * @Description: description
 */



import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import MidImgF from '../../assets/images/Middle_Image_FirstPage.jpg'
import { CONTACT_TEXT, FRONT_PAGE_MID_CATCHY_TEXT, FRONT_PAGE_MID_HEAD_TEXT, FRONT_PAGE_MID_SUB_TEXT, KNOW_MORE_FIRST_PAGE } from "../../Constants";
import { CONTACT_US_URL, OUR_TEAM_URL } from "../../Constants_Personal_URLS";
import Rectangle1Button from "./Rectangle1/Rectangle1Button";

const Rectangle27 = styled('div')({
    backgroundColor: `rgba(217, 217, 217, 1)`,
    width: `1462px`,
    height: `600px`,
    position: `absolute`,
    left: `0px`,
    top: `149px`,
});

const MidImg = styled('img')({
    height: `600px`,
    position: `absolute`,
});

const MidHeadTxt = styled('div')({
    position: "absolute",
    left: '1000px',
    top: '20px',
    fontStyle: `normal`,
    fontFamily: `sans-serif`,
    fontWeight: `400`,
    fontSize: `20px`,
    letterSpacing: `1px`,
    wordSpacing: `2px`
});

const MidSubHeadTxt = styled('div')({
    position: "absolute",
    left: '1000px',
    top: '80px',
    fontStyle: `normal`,
    fontFamily: `sans-serif`,
    fontWeight: `bold`,
    fontSize: `40px`,
    letterSpacing: `1px`,
    wordSpacing: `2px`
});

const MidCatchyPoint = styled('div')({
    position: "absolute",
    left: '1000px',
    top: '230px',
    fontStyle: `normal`,
    fontFamily: `sans-serif`,
    fontWeight: `400`,
    fontSize: `20px`,
    letterSpacing: `1px`,
    wordSpacing: `2px`
});

const KnowMoreWrap = styled(Rectangle1Button)({
    width: `152px`,
    height: `49px`,
    position: `absolute`,
    left: `1000px`,
    top: `380px`,
})

const KnowMoreButton = styled('div')({
    position: "absolute",
    left: '1030px',
    top: '394px',
    height: '60px',
    width: '150px',
    fontStyle: `normal`,
    fontFamily: `sans-serif`,
    fontSize: '20px',
    color: `rgba(256, 256, 256, 1)`
})

const ContactUsWrap = styled(Rectangle1Button)({
    width: `152px`,
    height: `49px`,
    position: `absolute`,
    left: `1240px`,
    top: `380px`,
})

const ContactUsButton = styled('div')({
    position: "absolute",
    left: '1270px',
    top: '394px',
    height: '60px',
    width: '150px',
    fontStyle: `normal`,
    fontFamily: `sans-serif`,
    fontSize: '20px',
    color: `rgba(256, 256, 256, 1)`
})

function MiddleImage() {
    return (
        <Rectangle27>
            <MidImg src={MidImgF} loading="lazy" alt={"Mid Img"} draggable='false' />
            <MidHeadTxt>{FRONT_PAGE_MID_HEAD_TEXT}</MidHeadTxt>
            <MidSubHeadTxt>{FRONT_PAGE_MID_SUB_TEXT}</MidSubHeadTxt>
            <MidCatchyPoint>{FRONT_PAGE_MID_CATCHY_TEXT}</MidCatchyPoint>
            <KnowMoreWrap />
            <ContactUsWrap />
            <Link to={OUR_TEAM_URL}>
                <KnowMoreButton>{KNOW_MORE_FIRST_PAGE}</KnowMoreButton>
            </Link>
            <Link to={CONTACT_US_URL}>
                <ContactUsButton>{CONTACT_TEXT}</ContactUsButton>
            </Link>
        </Rectangle27>
    )
}

export default MiddleImage;