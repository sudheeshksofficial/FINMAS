/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-26 09:51:38
 * @Description: description
 */




import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { ADMIN_FINMAS_MAIL, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL, WELCOME_TO_FINMAS_TEXT } from '../../Constants';
import { styled } from '@mui/material';
import Rectangle1 from './Rectangle1/Rectangle1';




const Rectangle11 = styled(Rectangle1)(({ theme }) => ({
    width: `1462px`,
    height: `49px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
}));

const AdminFinmasIn = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Noto Sans`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0.28px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `980px`,
    top: `18px`,
});

const Group1 = styled('div')({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    paddingLeft: `25px`,
    paddingTop: `8px`,
    boxSizing: `border-box`,
    width: `31px`,
    height: `28px`,
    left: `922px`,
    top: `10px`,
});

const WelcomeToFinmasFinan = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(253, 248, 248, 1)`,
    fontStyle: `normal`,
    fontFamily: `Noto Sans`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `22px`,
    top: `14px`,
});

const Group2 = styled('div')({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `180px`,
    height: `31px`,
    left: `1246px`,
    top: `11px`,
    alignItems: 'stretch',
    color: 'rgba(255, 255, 255, 1)'
});

function TitleBar1(props) {


    return (
        <div>
            <Rectangle11 className='rectangle 1'/>
            <a href={'mailto:'+ADMIN_FINMAS_MAIL}>
                <AdminFinmasIn>{ADMIN_FINMAS_MAIL}</AdminFinmasIn>
                <Group1>
                    <MailIcon />
                </Group1>
            </a>
            <WelcomeToFinmasFinan>
                {WELCOME_TO_FINMAS_TEXT}
            </WelcomeToFinmasFinan>
            <Group2 className='Group2'>
                <a href={FACEBOOK_URL}><FacebookIcon /></a>
                <a href={LINKEDIN_URL}><LinkedInIcon /></a>
                <a href={TWITTER_URL}><TwitterIcon /></a>
                <a href={INSTAGRAM_URL}><InstagramIcon /></a>
            </Group2>
        </div>
    );
}


export default TitleBar1;