import { styled } from "@mui/material";
import PersonHoldingPhone from '../../assets/images/PersonHoldingPhone.jfif'

const OuterDiv = styled('div')({
    background: `rgba(0, 0, 0, 1)`,
    height: '450px',
    position: 'absolute',
    top: '180px',
    width: '100%',
})

const InnerDiv = styled('div')({
    height: '450px',
    position: 'absolute',
    top: '180px',
    width: '100%',
    textAlign: 'center'
})

const ImageContact = styled('img')({
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '450px',
    userSelect: 'none'
})

const StyledH2 = styled('h1')({
    fontSize: '46px',
    fontWeight: 700,
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    lineHeight: '56px',
    color: `rgba(256, 256, 256, 1)`
})

const StyledP = styled('p')({
    fontSize: '16px',
    fontWeight: 500,
    color: `rgba(256, 256, 256, 1)`
})


function ImageDivContactUs(){
    return (
        <OuterDiv>
            <ImageContact src={PersonHoldingPhone} loading='lazy' alt='PersonPhone'/>
            <InnerDiv>
                <StyledH2>Contact Us</StyledH2>
                <StyledP>Home | Contact</StyledP>
            </InnerDiv>
        </OuterDiv>
    );
}


export default ImageDivContactUs;