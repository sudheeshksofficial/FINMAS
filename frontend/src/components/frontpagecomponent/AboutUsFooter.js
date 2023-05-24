/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 12:42:00
 * @Description: description
 */



import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { ABOUT_US_TEXT, ADMIN_FINMAS_MAIL, PHONE_NUMBER, WEBSITE } from "../../Constants";
import { AGRICULTURE_LOAN_URL, AUTO_LOAN_URL, BUSINESS_CONSULTING_URL, BUSINESS_LOAN_URL, CORPORATE_FINANCE_URL, CORPORATE_TRUST_URL, CREDIT_CARD_URL, EDUCATION_LOAN_URL, FINANCIAL_ADVISOR_URL, GOLD_LOAN_URL, HOME_LOAN_URL, INSURANCE_URL, INVESTMENT_CONSULTING_URL, MORTGAGE_LOAN_URL, NET_WORTH_URL, PERSONAL_LOAN_URL, PROPERTY_LOAN_URL, STOCKS_URL, TRADING_URL, WEALTH_URL } from "../../Constants_Personal_URLS";
import finmas_logo_bg from "../../assets/images/finmas_logo_min_removebg.png";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import FooterIcons from "./FooterIcons";
import man_laptop from '../../assets/images/ManLaptop.jfif';

const OuterBox = styled('div')({
    background: `rgba(0, 0, 0, 1)`,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '800px'
})
const Box = styled('div')({
    //padding: "80px 60px",
    //background: `rgba(0, 0, 0, 1)`,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '800px'
});


const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    maxWidth: '2000px',
    marginLeft: '60px',
    marginTop: '80px'
})

const Column = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
})

const Row = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
    gridGap: '50px'
})

const FooterLink = styled('p')({
    color: `rgba(256, 256, 256, 1)`,
    marginBottom: '20px',
    fontSize: '18px',
    textDecoration: `none`,
})

const FooterLinkImg = styled('img')({
    height: '18px',
    marginRight: `20px`
})


const Heading = styled('p')({
    fontSize: '24px',
    color: `rgba(256, 256, 256, 1)`,
    marginBottom: '40px',
    fontWeight: `bold`,
    fontFamily: 'sans-serif'
})

const Paragraph = styled('p')({
    fontSize: '17px',
    color: `rgba(256, 256, 256, 1)`,
    textDecoration: 'none',
    marginBottom: '20px',
    fontFamily: 'sans-serif'
})



const BottomDiv = styled('div')({
    fontSize: '12px',
    color: `rgba(256, 256, 256, 1)`,
    fontFamily: `sans-serif`,
    textDecoration: `none`
})

const BottomText = styled(`div`)({
    fontSize: '12px',
    color: `rgba(256, 256, 256, 1)`,
    fontFamily: `sans-serif`,
    textDecoration: `none`
})

const FooterImg = styled(`img`)({
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '800px',
    opacity: 0.15,
    userSelect: 'none'
})

function AboutUsFooter() {
    return (
        <OuterBox>
            <FooterImg src={man_laptop} alt='man-laptop' draggable='false' />
            <Box>
                <Container>
                    <Row>
                        <Column>
                            <Heading>
                                About Us
                            </Heading>
                            <Paragraph>
                                {ABOUT_US_TEXT}
                            </Paragraph>
                        </Column>
                        <Column>
                            <Heading>Our Products</Heading>
                            <Link to={PERSONAL_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Personal Loan
                                </FooterLink>
                            </Link>
                            <Link to={BUSINESS_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Business Loan
                                </FooterLink>
                            </Link>
                            <Link to={MORTGAGE_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Mortgage Loan
                                </FooterLink>
                            </Link>
                            <Link to={HOME_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Home Loan
                                </FooterLink>
                            </Link>
                            <Link to={AUTO_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Auto Loan
                                </FooterLink>
                            </Link>
                            <Link to={INSURANCE_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Insurance
                                </FooterLink>
                            </Link>
                            <Link to={TRADING_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Trading & Investment
                                </FooterLink>
                            </Link>
                            <Link to={CREDIT_CARD_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Credit cards
                                </FooterLink>
                            </Link>
                            <Link to={GOLD_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Gold Loan
                                </FooterLink>
                            </Link>
                            <Link to={AGRICULTURE_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Agriculture Loan
                                </FooterLink>
                            </Link>
                            <Link to={EDUCATION_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Education Loan
                                </FooterLink>
                            </Link>
                            <Link to={PROPERTY_LOAN_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Property Loan
                                </FooterLink>
                            </Link>
                        </Column>
                        <Column>
                            <Heading>Our Services</Heading>
                            <Link to={FINANCIAL_ADVISOR_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Financial Advisor
                                </FooterLink>
                            </Link>
                            <Link to={BUSINESS_CONSULTING_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Business Consulting
                                </FooterLink>
                            </Link>
                            <Link to={CORPORATE_FINANCE_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Corporate Finance
                                </FooterLink>
                            </Link>
                            <Link to={CORPORATE_TRUST_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Corporate Trust Services
                                </FooterLink>
                            </Link>
                            <Link to={INVESTMENT_CONSULTING_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Investment Consulting
                                </FooterLink>
                            </Link>
                            <Link to={NET_WORTH_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Net Worth & cash flow analysis
                                </FooterLink>
                            </Link>
                            <Link to={STOCKS_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Stocks & Bonds
                                </FooterLink>
                            </Link>
                            <Link to={WEALTH_URL} style={{ textDecoration: 'none' }}>
                                <FooterLink>
                                    <FooterLinkImg src={finmas_logo_bg} alt="FINMAS-1" />
                                    Wealth Management
                                </FooterLink>
                            </Link>
                        </Column>
                        <Column>
                            <Heading>Contact Info</Heading>
                            <Paragraph style={{ display: `flex`, flexDirection: `row`, width: 300 }}>
                                <PlaceIcon />
                                <div style={{ marginLeft: `10px` }}>
                                    FINMAS Financial Services Pvt Ltd No.1 
                                    Tharai Towers,
                                    <br></br>
                                    Loganathan nagar 3rd street,
                                    <br></br>
                                    Choolaimedu Chennai - 600094.
                                </div>
                            </Paragraph>
                            <Paragraph style={{ display: `flex`, flexDirection: `row` }}>
                                <PhoneIcon />
                                <div style={{ marginLeft: `10px` }}>
                                    {PHONE_NUMBER}
                                </div>
                            </Paragraph>
                            <Paragraph style={{ display: `flex`, flexDirection: `row` }}>
                                <MailIcon />
                                <div style={{ marginLeft: `10px` }}>
                                    {ADMIN_FINMAS_MAIL}
                                </div>
                            </Paragraph>
                            <Paragraph style={{ display: `flex`, flexDirection: `row` }}>
                                <LanguageIcon />
                                <div style={{ marginLeft: `10px` }}>
                                    {WEBSITE}
                                </div>
                            </Paragraph>
                        </Column>
                    </Row>
                    <hr style={{ backgroundColor: `rgba(122, 122, 122)`, color: `rgba(122, 122, 122)` }} />
                </Container>
                <BottomDiv>
                    <BottomText>
                        Copyrights © 2021 FINMAS Financial Services Pvt Ltd. All Rights Reserved. Designed by VNSMVK.
                    </BottomText>
                    <FooterIcons />
                </BottomDiv>
            </Box>
        </OuterBox>
    );
}

export default AboutUsFooter;