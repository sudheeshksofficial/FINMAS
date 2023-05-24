/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 10:39:17
 * @Description: description
 */



import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from '@emotion/styled';
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from '../../Constants';


const Group2 = styled('div')({
    position: `absolute`,
    display: `flex`,
    isolation: `isolate`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `200px`,
    height: `31px`,
    right: 30,
    top: 750,
    alignItems: 'stretch',
    color: 'rgba(255, 255, 255, 1)',
    columnGap: '10px'
});

function FooterIcons() {
    return (
        <Group2>
            <a href={FACEBOOK_URL}><FacebookIcon style={{fontSize : '32px'}} /></a>
            <a href={TWITTER_URL}><TwitterIcon style={{fontSize : '32px'}} /></a>
            <a href={LINKEDIN_URL}><LinkedInIcon style={{fontSize : '32px'}} /></a>
            <a href={INSTAGRAM_URL}><InstagramIcon style={{fontSize : '32px'}} /></a>
        </Group2>
    );
}

export default FooterIcons;