/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-25 13:40:44
 * @Description: description
 */


import Finmas1Image from '../../assets/images/finmas_logo.jpg';
import { Grow, styled } from '@mui/material';
import { CAREERS_TEXT, CLIENTS_TEXT, CONTACT_TEXT, HOME_TEXT, MEMBER_TEXT, OUR_TEAM_TEXT, PRODUCTS_TEXT, SERVICES_TEXT } from '../../Constants';
import { Link } from 'react-router-dom';
import { AGRICULTURE_LOAN_URL, AUTO_LOAN_URL, BECOME_PARTNER_URL, BUSINESS_CONSULTING_URL, BUSINESS_LOAN_URL, CAREERS_URL, CLIENTS_URL, CONTACT_US_URL, CORPORATE_FINANCE_URL, CORPORATE_TRUST_URL, CREDIT_CARD_URL, EDUCATION_LOAN_URL, FINANCIAL_ADVISOR_URL, GOLD_LOAN_URL, HOME_LOAN_URL, HOME_URL, INSURANCE_URL, INVESTMENT_CONSULTING_URL, LOCAL_HOST_URL, MORTGAGE_LOAN_URL, NET_WORTH_URL, OUR_TEAM_URL, PERSONAL_LOAN_URL, PROPERTY_LOAN_URL, STOCKS_URL, TRADING_URL, WEALTH_URL } from '../../Constants_Personal_URLS';
import { useEffect, useRef, useState } from 'react';
import Rectangle1min from './Rectangle1/Rectangle1min';



function TitleBar2() {

    var current = window.location.href;

    const [homeHover, setHomeHover] = useState(false)
    const [teamHover, setTeamHOver] = useState(false)
    const [productHover, setProductHover] = useState(false)
    const [serviceHover, setServiceHover] = useState(false)
    const [careerHover, setCareerHover] = useState(false)
    const [clientsHover, setClientsHover] = useState(false)
    const [contactHover, setContactHover] = useState(false)

    const PRODUCTS_URL = [
        LOCAL_HOST_URL + PERSONAL_LOAN_URL, 
        LOCAL_HOST_URL + BUSINESS_LOAN_URL,
        LOCAL_HOST_URL + MORTGAGE_LOAN_URL,
        LOCAL_HOST_URL + HOME_LOAN_URL,
        LOCAL_HOST_URL + AUTO_LOAN_URL,
        LOCAL_HOST_URL + INSURANCE_URL,
        LOCAL_HOST_URL + CREDIT_CARD_URL,
        LOCAL_HOST_URL + GOLD_LOAN_URL,
        LOCAL_HOST_URL + AGRICULTURE_LOAN_URL,
        LOCAL_HOST_URL + EDUCATION_LOAN_URL,
        LOCAL_HOST_URL + PROPERTY_LOAN_URL 
    ]

    const SERVICES_URL = [
        LOCAL_HOST_URL + FINANCIAL_ADVISOR_URL,
        LOCAL_HOST_URL + BUSINESS_CONSULTING_URL,
        LOCAL_HOST_URL + CORPORATE_FINANCE_URL,
        LOCAL_HOST_URL + CORPORATE_TRUST_URL,
        LOCAL_HOST_URL + INVESTMENT_CONSULTING_URL,
        LOCAL_HOST_URL + NET_WORTH_URL,
        LOCAL_HOST_URL + STOCKS_URL,
        LOCAL_HOST_URL + WEALTH_URL
    ]


    const Home = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current === LOCAL_HOST_URL + HOME_URL || homeHover) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
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
        color: (current === LOCAL_HOST_URL + OUR_TEAM_URL || teamHover) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
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
        color: ( PRODUCTS_URL.indexOf(current)>-1 || productHover) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
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
        cursor: 'pointer'
    });

    const Services = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: ( SERVICES_URL.indexOf(current)>-1 || serviceHover) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
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
        cursor: 'pointer'
    });

    const Careers = styled('div')({
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: (current === LOCAL_HOST_URL + CAREERS_URL || careerHover) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
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
        color: (current === LOCAL_HOST_URL + CLIENTS_URL || clientsHover) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
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
        color: (current === LOCAL_HOST_URL + CONTACT_US_URL || contactHover) ? `rgba(0, 0, 256, 1)` : `rgba(0, 0, 0, 1)`,
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

    const ProductsHoverDiv = styled('div')({
        display: (productHover) ? 'block' : 'none',
        position: 'absolute',
        width: '200px',
        boxShadow: '0px 4px 7px -3px rgba(0,0,0,.09)',
        boxSizing: 'border-box',
        zIndex: 1,
        lineHeight: 1.7,
        //marginTop: 29
    })

    const ProductsHoverDivLink = styled('div')({
        display: (productHover) ? 'inline-block' : 'none',
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        background: `linear-gradient(90deg, rgba(241,18,22,1) 0%, rgba(209,12,63,1) 35%, rgba(15,0,157,1) 100%)`,
        color: 'rgba(256, 256, 256, 1)',
        fontStyle: `normal`,
        fontFamily: `sans-seriff`,
        fontWeight: `400`,
        fontSize: `18px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `350px`,
        height: '42.9px',
        position: 'relative',
        paddingLeft: 25,
        paddingTop: 3
    })


    const ServicesHoverDiv = styled('div')({
        display: (serviceHover) ? 'block' : 'none',
        position: 'absolute',
        width: '200px',
        boxShadow: '0px 4px 7px -3px rgba(0,0,0,.09)',
        boxSizing: 'border-box',
        zIndex: 1,
        lineHeight: 1.7,
        //marginTop: 29
    })

    const ServicesHoverDivLink = styled('div')({
        display: (serviceHover) ? 'inline-block' : 'none',
        textAlign: `left`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        background: `linear-gradient(90deg, rgba(241,18,22,1) 0%, rgba(209,12,63,1) 35%, rgba(15,0,157,1) 100%)`,
        color: 'rgba(256, 256, 256, 1)',
        fontStyle: `normal`,
        fontFamily: `sans-seriff`,
        fontWeight: `400`,
        fontSize: `18px`,
        letterSpacing: `0px`,
        textDecoration: `none`,
        textTransform: `none`,
        width: `350px`,
        height: '42px',
        position: 'relative',
        paddingLeft: 25,
        paddingTop: 3
    })



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
                <Home onMouseEnter={() => setHomeHover(true)} onMouseLeave={() => setHomeHover(false)}>
                    {HOME_TEXT}
                </Home>
            </Link>
            <Link to={OUR_TEAM_URL}>
                <OurTeam onMouseEnter={() => setTeamHOver(true)} onMouseLeave={() => setTeamHOver(false)}>{OUR_TEAM_TEXT}</OurTeam>
            </Link>
            <Products onMouseEnter={() => setProductHover(true)} onMouseLeave={() => setProductHover(false)}>
                {PRODUCTS_TEXT}
                <ProductsHoverDiv>
                    <div style={{ marginTop: 30, cursor: 'default' }} />
                    <Link to={PERSONAL_LOAN_URL}><ProductsHoverDivLink>Personal Loan</ProductsHoverDivLink></Link>
                    <Link to={BUSINESS_LOAN_URL}><ProductsHoverDivLink>Business Loan</ProductsHoverDivLink></Link>
                    <Link to={MORTGAGE_LOAN_URL}><ProductsHoverDivLink>Mortgage Loan</ProductsHoverDivLink></Link>
                    <Link to={HOME_LOAN_URL}><ProductsHoverDivLink>Home Loan</ProductsHoverDivLink></Link>
                    <Link to={AUTO_LOAN_URL}><ProductsHoverDivLink>Auto Loan</ProductsHoverDivLink></Link>
                    <Link to={INSURANCE_URL}><ProductsHoverDivLink>Insurance</ProductsHoverDivLink></Link>
                    <Link to={TRADING_URL}><ProductsHoverDivLink>Trading and Investment</ProductsHoverDivLink></Link>
                    <Link to={CREDIT_CARD_URL}><ProductsHoverDivLink>Credit Cards</ProductsHoverDivLink></Link>
                    <Link to={GOLD_LOAN_URL}><ProductsHoverDivLink>Gold Loan</ProductsHoverDivLink></Link>
                    <Link to={AGRICULTURE_LOAN_URL}><ProductsHoverDivLink>Agriculture Loan</ProductsHoverDivLink></Link>
                    <Link to={EDUCATION_LOAN_URL}><ProductsHoverDivLink>Education Loan</ProductsHoverDivLink></Link>
                    <Link to={PROPERTY_LOAN_URL}><ProductsHoverDivLink>Property Loan</ProductsHoverDivLink></Link>
                </ProductsHoverDiv>
            </Products>
            <Services onMouseEnter={() => setServiceHover(true)} onMouseLeave={() => setServiceHover(false)}>
                {SERVICES_TEXT}
                <ServicesHoverDiv>
                    <div style={{ marginTop: 30, cursor: 'default' }} />
                    <Link to={FINANCIAL_ADVISOR_URL}><ServicesHoverDivLink>Financial Advisor</ServicesHoverDivLink></Link>
                    <Link to={BUSINESS_CONSULTING_URL}><ServicesHoverDivLink>Business Consulting</ServicesHoverDivLink></Link>
                    <Link to={CORPORATE_FINANCE_URL}><ServicesHoverDivLink>Corporate Finance</ServicesHoverDivLink></Link>
                    <Link to={CORPORATE_TRUST_URL}><ServicesHoverDivLink>Corporate Trust Services</ServicesHoverDivLink></Link>
                    <Link to={INVESTMENT_CONSULTING_URL}><ServicesHoverDivLink>Investment Consulting</ServicesHoverDivLink></Link>
                    <Link to={NET_WORTH_URL}><ServicesHoverDivLink>Net Worth And Cash Flow Analysis</ServicesHoverDivLink></Link>
                    <Link to={STOCKS_URL}><ServicesHoverDivLink>Stocks And Bonds</ServicesHoverDivLink></Link>
                    <Link to={WEALTH_URL}><ServicesHoverDivLink>Wealth Management</ServicesHoverDivLink></Link>
                </ServicesHoverDiv>
            </Services>
            <Link to={CAREERS_URL}>
                <Careers onMouseEnter={() => setCareerHover(true)} onMouseLeave={() => setCareerHover(false)}>{CAREERS_TEXT}</Careers>
            </Link>
            <Link to={CLIENTS_URL}>
                <Clients onMouseEnter={() => setClientsHover(true)} onMouseLeave={() => setClientsHover(false)}>{CLIENTS_TEXT}</Clients>
            </Link>
            <Link to={CONTACT_US_URL}>
                <ContactUs onMouseEnter={() => setContactHover(true)} onMouseLeave={() => setContactHover(false)}>{CONTACT_TEXT}</ContactUs>
            </Link>
            <Link to={BECOME_PARTNER_URL}>
                <BecomeAMember>{MEMBER_TEXT}</BecomeAMember>
            </Link>
        </div>

    );
}

export default TitleBar2;