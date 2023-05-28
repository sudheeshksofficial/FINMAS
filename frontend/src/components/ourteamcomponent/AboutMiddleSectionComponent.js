import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { OUR_TEAM_PAGE_SECOND_IMAGE } from "../../ConstantsImage";
import { CONTACT_US_URL } from "../../Constants_Personal_URLS";

const AboutImgDiv = styled('div')({

    position: 'absolute',
    height: 929,
    top: 675,
    width: '100%'
})

const LeftSideDiv = styled('div')({
    position: 'absolute',
    width: '50%',
    height: '100%'
})

const RightSideDiv = styled('div')({
    position: 'absolute',
    left: 735,
    width: '50%',
    height: '100%'
})

const RightSideInnerDiv = styled('div')({
    position: 'absolute',
    top: 50,
    left: 150,
    width: '65%'
})

const SecondImage = styled('img')({
    width: '100%',
    height: '100%',
    position: "absolute"
})

const KnowMoreButton = styled('div')({
    textAlign: `center`,
    justifyContent: 'center',
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    background: `linear-gradient(90deg, rgba(241,18,22,1) 0%, rgba(209,12,63,1) 35%, rgba(15,0,157,1) 100%)`,
    color: `rgba(256, 256, 256, 1)`,
    fontStyle: `normal`,
    fontFamily: `Noto Sans`,
    fontWeight: `400`,
    fontSize: `20px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    width: `220px`,
    height: '49px',
    position: `absolute`,
    paddingTop: '10px'
})

function AboutMiddleSectionComponent() {
    return (
        <AboutImgDiv>
            <LeftSideDiv>
                <SecondImage src={OUR_TEAM_PAGE_SECOND_IMAGE} loading='lazy' alt="OUR TEAM PAGE SECOND IMAGE" />
            </LeftSideDiv>
            <RightSideDiv>
                <RightSideInnerDiv>
                    <div style={{ fontFamily: 'sans-serif', fontWeight: 500, textTransform: 'uppercase', marginBottom: '8px' }}>About</div>
                    <h2 style={{ fontSize: '30px', lineHeight: '40px', marginBottom: '18px', fontFamily: 'sans-serif', fontWeight: 700, display: 'block' }}>We Provide Top Notch Advice For Your Business.</h2>
                    <p style={{ textAlign: 'justify', fontWeight: 500, marginTop: 0, marginBottom: '1rem', fontSize: '16px', fontFamily:'sans-serif', lineHeight: 1.7 }}>Finmas Financial Services Private Limited is a reputed financial sevice company deals with retail assets products like personal loans, Business loans and Doctors Loan. we have tie with all major banks and NBFC's.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 500, marginTop: 0, marginBottom: '1rem', fontSize: '16px', fontFamily:'sans-serif', lineHeight: 1.7 }}>Company was incroporated in 7th December 2021, Founder - MD&CEO of the company Vivekanandan M who worked as Area Head for personal loans product in HDFC bank & with the bank for more than a decade in Retail assets product. With over 20 years of experience in banking and FInance industry started up his own brand- FINMAS-THE FINANCE MASTER.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 500, marginTop: 0, marginBottom: '1rem', fontSize: '16px', fontFamily:'sans-serif', lineHeight: 1.7 }}>We’re constantly working to make our process even simpler and more streamlined for our customers. We’re developing proprietary algorithms to provide more incisive suggestions on the best product or bank to choose from. Join us on our exciting journey to revolutionize the financial services industry.</p>
                    <p style={{ textAlign: 'justify', fontWeight: 500, marginTop: 0, marginBottom: '1rem', fontSize: '16px', fontFamily:'sans-serif', lineHeight: 1.7 }}>India's economy is growing at a rate of over 9%, attracting western companies. However, local Indian firms have an advantage due to their familiarity with the domestic market and the importance of localisation.</p>
                    <Link to={CONTACT_US_URL}><KnowMoreButton>Discover More</KnowMoreButton></Link>
                </RightSideInnerDiv>
            </RightSideDiv>
        </AboutImgDiv>
    );
}

export default AboutMiddleSectionComponent;