/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 10:39:49
 * @Description: description
 */


import Finmas1Image from '../../assets/images/finmas_logo.jpg';
import { Grow, styled } from '@mui/material';
import { CAREERS_TEXT, CLIENTS_TEXT, CONTACT_TEXT, HOME_TEXT, MEMBER_TEXT, OUR_TEAM_TEXT, PRODUCTS_TEXT, SERVICES_TEXT } from '../../Constants';
import { Link } from 'react-router-dom';
import { BECOME_PARTNER_URL, CAREERS_URL, CLIENTS_URL, CONTACT_US_URL, HOME_URL, LOCAL_HOST_URL, OUR_TEAM_URL, PRODUCTS_URL, SERVICES_URL } from '../../Constants_Personal_URLS';
import { useEffect, useRef, useState } from 'react';
import Rectangle1min from './Rectangle1/Rectangle1min';



function TitleBar2() {

    var current = window.location.href;
    

    const Home = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current===LOCAL_HOST_URL+HOME_URL) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `60px`,
        position: `absolute`,
        left: `405px`,
        top: `86px`,
    });

    const OurTeam = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current===LOCAL_HOST_URL+OUR_TEAM_URL) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `102px`,
        position: `absolute`,
        left: `487px`,
        top: `86px`,
    });

    const Products = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current===LOCAL_HOST_URL+PRODUCTS_URL) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        position: `absolute`,
        left: `611px`,
        top: `86px`,
    });

    const Services = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current===LOCAL_HOST_URL+SERVICES_URL) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `89px`,
        position: `absolute`,
        left: `738px`,
        top: `86px`,
    });

    const Careers = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current===LOCAL_HOST_URL+CAREERS_URL) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `84px`,
        position: `absolute`,
        left: `849px`,
        top: `86px`,
    });

    const Clients = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current===LOCAL_HOST_URL+CLIENTS_URL) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `79px`,
        position: `absolute`,
        left: `955px`,
        top: `86px`,
    });

    const ContactUs = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current===LOCAL_HOST_URL+CONTACT_US_URL) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        position: `absolute`,
        left: `1056px`,
        top: `86px`,
    });

    const BecomeAMemberDiv = styled(Rectangle1min)({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: `rgba(0, 0, 0, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `220px`,
        position: `absolute`,
        left: `1215px`,
        top: `80px`,
    }
    );

    const BecomeAMember = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: `rgba(256, 256, 256, 1)`,
        fontStyle: `normal`,
        fontFamily: `Noto Sans`,
        fontWeight: `400`,
        fontSize: `20px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `220px`,
        position: `absolute`,
        left: `1228px`,
        top: `86px`,
    }
    );

    const [state, setState] = useState({
        showFirst: true,
        showSecond: false
    });

    const timeoutRef = useRef(null);

    function resetTimeOut() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeOut();
        timeoutRef.current = setTimeout(
            () => setState({
                showFirst: !state.showFirst,
                showSecond: !state.showSecond
            }), 2000
        );
        return () => {
            resetTimeOut();
        }
    });

    const Finmas1 = styled('img')({
        height: `80px`,
        width: `209.29px`,
        objectFit: `cover`,
        position: `absolute`,
        left: `67px`,
        top: `59px`,
        color: `black`,
        opacity: state.showFirst ? 1 : 0
    });

    const Finmas2 = styled('img')({
        height: `80px`,
        width: `209.29px`,
        objectFit: `cover`,
        position: `absolute`,
        left: `67px`,
        top: `59px`,
        color: `black`,
        opacity: state.showFirst ? 0 : 1
    });



    return (
        <div>
            <BecomeAMemberDiv></BecomeAMemberDiv>
            <Grow in={state.showFirst} style={{ transformOrigin: '0 0 0' }}{...(state.showFirst ? { timeout: 1000 } : {})}>
                <Link to={HOME_URL}>
                    <Finmas1 className='Finmas1' src={Finmas1Image} loading="lazy" alt={'FINMAS 1'} />
                </Link>
            </Grow>
            <Grow in={state.showFirst} style={{ transformOrigin: '0 0 0' }}{...(state.showFirst ? { timeout: 1000 } : {})}>
                <Link to={HOME_URL}>
                    <Finmas2 className='Finmas2' src={Finmas1Image} loading="lazy" alt={'FINMAS 1'} />
                </Link>
            </Grow>
            <Link to={HOME_URL}>
                <Home>
                    {HOME_TEXT}
                </Home>
            </Link>
            <Link to={OUR_TEAM_URL}>
                <OurTeam>{OUR_TEAM_TEXT}</OurTeam>
            </Link>
            <Link to={PRODUCTS_URL}>
                <Products>{PRODUCTS_TEXT}</Products>
            </Link>
            <Link to={SERVICES_URL}>
                <Services>{SERVICES_TEXT}</Services>
            </Link>
            <Link to={CAREERS_URL}>
                <Careers>{CAREERS_TEXT}</Careers>
            </Link>
            <Link to={CLIENTS_URL}>
                <Clients>{CLIENTS_TEXT}</Clients>
            </Link>
            <Link to={CONTACT_US_URL}>
                <ContactUs>{CONTACT_TEXT}</ContactUs>
            </Link>
            <Link to={BECOME_PARTNER_URL}>
                <BecomeAMember>{MEMBER_TEXT}</BecomeAMember>
            </Link>
        </div>

    );
}

export default TitleBar2;