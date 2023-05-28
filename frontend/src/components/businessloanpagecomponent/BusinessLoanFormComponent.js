import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AGRICULTURE_LOAN_URL, AUTO_LOAN_URL, BUSINESS_LOAN_URL, CREDIT_CARD_URL, EDUCATION_LOAN_URL, GOLD_LOAN_URL, HOME_LOAN_URL, INSURANCE_URL, LOCAL_HOST_URL, MORTGAGE_LOAN_URL, PERSONAL_LOAN_URL, PRODUCTS_URL, PROPERTY_LOAN_URL, TRADING_URL } from '../../Constants_Personal_URLS';
import { styled } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";


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
    height: 1000
})

const RightDiv = styled('div')({
    position: 'absolute',
    top: 150,
    left: 860,
    width: 610,
    height: 1000
})

const FormOuterDiv = styled('div')({
    position: 'absolute',
    width: '100%',
    height: 645
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

function BusinessLoanFormComponent() {

    var current = window.location.href;

    

    const [name, setName] = useState('')
    const [companyname, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [businesstype, setBusinessType] = useState('')
    const [monthlysales, setMonthlySales] = useState('')
    const [vintage, setVintage] = useState('')
    const [amount, setAmount] = useState('')
    const [message, setMessage] = useState('')

    const onHandleEvent = (event) => {
        event.preventDefault();
        alert(name);
        setName('');
        setCompanyName('');
        setPhone('');
        setBusinessType('');
        setMonthlySales('');
        setVintage('');
        setAmount('');
        setMessage('');
    }

    return (
        <MidDiv>
            <LeftDiv>
                <h2 style={{ fontSize: '36px', lineHeight: '40px', fontFamily: 'sans-serif', fontWeight: 700, marginBottom: '26px' }}>Business Loan</h2>
                <p style={{ lineHeight: 1.7, fontSize: '16px', fontWeight: 500, textAlign: 'justify', fontFamily: 'sans-serif', display: "block" }}>Commercial loans will help you to structure your business to match today's fast-paced world. We help develop your business to the next level by providing secure financing options with flexible repayment tenure along with competitive interest rates.</p>
                <p style={{ lineHeight: 1.7, fontSize: '16px', fontWeight: 500, textAlign: 'justify', fontFamily: 'sans-serif', display: "block" }}>Faster approvals mean you get your funds faster, allowing you to carry forward your business. A timely loan can help you open up your horizons, accelerate your day-to-day operations, and eventually contribute to your profit ratio.</p>
                <FormOuterDiv>
                    <h2 style={{ paddingLeft: 125, lineHeight: '40px', fontFamily: 'sans-serif', fontWeight: 700, fontSize: '36px' }}> We are here to help you better</h2>
                    <form onSubmit={onHandleEvent} style={{ width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 10 }}>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '17px' }}>Name *
                                <input type='text' style={{ display: 'inline-block', width: '20em', background: 'rgba(200, 200, 200, 1)', border: 0, position: 'relative', paddingLeft: '10px', top: '.5em', borderRadius: '5px', color: 'white', height: 50 }} placeholder='Please Enter your name' value={name} onChange={(e) => { setName(e.target.value) }} />
                            </label>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '17px' }}>Company Name *
                                <input type='text' style={{ display: 'inline-block', width: '21em', background: 'rgba(200, 200, 200, 1)', border: 0, position: 'relative', paddingLeft: '10px', top: '.5em', borderRadius: '5px', color: 'white', height: 50 }} placeholder='Please Enter your companyname' value={companyname} onChange={(e) => { setCompanyName(e.target.value) }} />
                            </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 10 }}>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '17px' }}>Email *
                                <input type='text' style={{ display: 'inline-block', width: '20em', background: 'rgba(200, 200, 200, 1)', border: 0, position: 'relative', paddingLeft: '10px', top: '.5em', borderRadius: '5px', color: 'white', height: 50 }} placeholder='Please Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '17px' }}>Phone *
                                <input type='text' style={{ display: 'inline-block', width: '21em', background: 'rgba(200, 200, 200, 1)', border: 0, position: 'relative', paddingLeft: '10px', top: '.5em', borderRadius: '5px', color: 'white', height: 50 }} placeholder='Please Enter your mobile no' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                            </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 10 }}>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '17px' }}>Type Of Business *
                                <input type='text' style={{ display: 'inline-block', width: '20em', background: 'rgba(200, 200, 200, 1)', border: 0, position: 'relative', paddingLeft: '10px', top: '.5em', borderRadius: '5px', color: 'white', height: 50 }} placeholder='Type of Business' value={businesstype} onChange={(e) => { setBusinessType(e.target.value) }} />
                            </label>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '17px' }}>Monthly Sales *
                                <input type='text' style={{ display: 'inline-block', width: '21em', background: 'rgba(200, 200, 200, 1)', border: 0, position: 'relative', paddingLeft: '10px', top: '.5em', borderRadius: '5px', color: 'white', height: 50 }} placeholder='Monthly Sales' value={monthlysales} onChange={(e) => { setMonthlySales(e.target.value) }} />
                            </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 10 }}>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '17px' }}>Business Vintage *
                                <input type='text' style={{ display: 'inline-block', width: '20em', background: 'rgba(200, 200, 200, 1)', border: 0, position: 'relative', paddingLeft: '10px', top: '.5em', borderRadius: '5px', color: 'white', height: 50 }} placeholder='Business Vintage' value={vintage} onChange={(e) => { setVintage(e.target.value) }} />
                            </label>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '17px' }}>Required Loan Amount *
                                <input type='text' style={{ display: 'inline-block', width: '21em', background: 'rgba(200, 200, 200, 1)', border: 0, position: 'relative', paddingLeft: '10px', top: '.5em', borderRadius: '5px', color: 'white', height: 50 }} placeholder='Required Loan Amount' value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                            </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 2 }}>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '15px' }}>Message *
                                <textarea rows={4} cols={103} style={{ display: 'inline-block', position: 'relative', paddingLeft: '10px', top: '.5em', background: 'rgba(200, 200, 200, 1)', border: 0, color: 'white', borderRadius: '5px' }} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
                            </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em' }}>
                                <input type='submit' value='SEND MESSAGE' style={{ display: 'inline-block', width: '12em', height: '3em', position: 'relative', top: '1.5em', background: 'rgba(0, 180, 0, 1)', border: 0, color: 'white', borderRadius: 10, marginLeft: '2px' }} />
                            </label>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                            <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '2.5em' }}>
                                * These Fields are Required
                            </label>
                        </div>
                    </form>
                </FormOuterDiv>
            </LeftDiv>
            <RightDiv>
                <Link to={PERSONAL_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[0] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[0] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Personal loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField>
                </Link>
                <Link to={BUSINESS_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[1] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[1] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Business loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={MORTGAGE_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[2] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[2] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Mortgage loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={HOME_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[3] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[3] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Home loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={AUTO_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[4] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[4] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Auto loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={INSURANCE_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[5] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[5] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Insurance
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={TRADING_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[6] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[6] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Trading & Investment
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField></Link>
                <Link to={CREDIT_CARD_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[7] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[7] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Credit cards
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField>
                </Link>
                <Link to={GOLD_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[8] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[8] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Gold loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField>
                </Link>
                <Link to={AGRICULTURE_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[9] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[9] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Agriculture loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField>
                </Link>
                <Link to={EDUCATION_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[10] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[10] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Education loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField>
                </Link>
                <Link to={PROPERTY_LOAN_URL} style={{textDecoration: 'none', color: 'inherit'}}><RightDivNavField style={{ background: PRODUCTS_URL[11] === current ? `rgba(0, 0, 200, 1)` : ``, color: PRODUCTS_URL[11] === current ? `rgba(256, 256, 256, 1)` : `` }}>
                    Property loan
                    <ArrowForwardIosIcon style={{ fontSize: '17px', position: 'absolute', right: 170, marginTop: '5px' }} />
                </RightDivNavField>
                </Link>
            </RightDiv>
        </MidDiv>
    );
}

export default BusinessLoanFormComponent;