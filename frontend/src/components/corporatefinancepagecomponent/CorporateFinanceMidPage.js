import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BUSINESS_CONSULTING_URL, CORPORATE_FINANCE_URL, CORPORATE_TRUST_URL, FINANCIAL_ADVISOR_URL, INVESTMENT_CONSULTING_URL, NET_WORTH_URL, SERVICES_URL, STOCKS_URL, WEALTH_URL } from '../../Constants_Personal_URLS';
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { CORPORATE_FINANCE_PAGE_SECOND_IMAGE, FINANCIAL_ADVISOR_PAGE_SECOND_IMAGE } from "../../ConstantsImage";


const MidDiv = styled('div')({
    position: 'absolute',
    top: 800,
    width: '100%',
    height: 1300
})

const LeftDiv = styled('div')({
    position: 'absolute',
    top: 150,
    left: 50,
    width: '55%',
    height: 1000,
    paddingLeft: 100
})

const RightDiv = styled('div')({
    position: 'absolute',
    top: 150,
    left: 860,
    width: 610,
    height: 1000
})

const RightDivNavField = styled('div')({
    width: '400px',
    height: '70px',
    border: '1px solid blue',
    borderRadius: '5px',
    marginLeft: '70px',
    marginTop: '10px',
    marginBottom: '10px',
    paddingLeft: '30px',
    paddingTop: '25px',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    fontWeight: 900
})

function CorporateFinanceMidPageComponent() {

    var current = window.location.href;

    return (
        <MidDiv>
            <LeftDiv>
                <img src={CORPORATE_FINANCE_PAGE_SECOND_IMAGE} style={{ height: 500, width: '100%'}}/>
                <h2 style={{ fontSize: '36px', lineHeight: '40px', fontFamily: 'sans-serif', fontWeight: 700, marginBottom: '26px', marginTop: 40 }}>Financial Advisor</h2>
                <p style={{ lineHeight: 1.7, fontSize: '16px', fontWeight: 500, textAlign: 'justify', fontFamily: 'sans-serif', display: "block" }}>A Personal loan is an unsecured loan that can be used for a variety of purposes such as medical treatments, home renovation, traveel, wedding and any other urgent financial requirements. unlike secured loans, personal loans don't require any collateral or security. You can find personal loans through banks, credit unions and online lenders. The money you borrow must be repaid over time, typically with interest. Personal loans can be a convenient way to access funds quickly and can help you achieve your finance goals. A personal loan can be availed when an individual has an immediate requirement of funds, with minimal documentation, processing time with immediate disbursal to Customer bank account. It serves as a grea option for individual for meeting their immediate financial requirements. We, at Finmas Financial Services Pvt. Ltd., understand our customers and provide them with the perfect solutions for their requirements. Get in touch with us to know your personal loan eligibility and other terms and conditions.</p>
            </LeftDiv>
            <RightDiv>
                <Link to={FINANCIAL_ADVISOR_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: SERVICES_URL[0] === current ? `rgba(0, 0, 200, 1)` : ``, color: SERVICES_URL[0] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Financial Advisor
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField>
                </Link>
                <Link to={BUSINESS_CONSULTING_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: SERVICES_URL[1] === current ? `rgba(0, 0, 200, 1)` : ``, color: SERVICES_URL[1] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Business Consulting
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={CORPORATE_FINANCE_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: SERVICES_URL[2] === current ? `rgba(0, 0, 200, 1)` : ``, color: SERVICES_URL[2] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Corporate Finance
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={CORPORATE_TRUST_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: SERVICES_URL[3] === current ? `rgba(0, 0, 200, 1)` : ``, color: SERVICES_URL[3] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Corporate Trust Services
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={INVESTMENT_CONSULTING_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: SERVICES_URL[4] === current ? `rgba(0, 0, 200, 1)` : ``, color: SERVICES_URL[4] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Investment Consulting
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={NET_WORTH_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: SERVICES_URL[5] === current ? `rgba(0, 0, 200, 1)` : ``, color: SERVICES_URL[5] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Net Worth & Cash Flow Analysis
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={STOCKS_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: SERVICES_URL[6] === current ? `rgba(0, 0, 200, 1)` : ``, color: SERVICES_URL[6] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Stocks & Bonds
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={WEALTH_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: SERVICES_URL[7] === current ? `rgba(0, 0, 200, 1)` : ``, color: SERVICES_URL[7] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Wealth Management
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField>
                </Link>
            </RightDiv>
        </MidDiv>
    );
}

export default CorporateFinanceMidPageComponent;