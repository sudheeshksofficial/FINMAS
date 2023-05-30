import { styled } from "@mui/material";
import { CAREERS_PAGE_FIRST_IMAGE } from "../../ConstantsImage";

const FirstImage = styled('img')({
    width: '100%',
    height: '100%',
    position: "absolute",
    top: 0,
    userSelect: 'none'
})

const FirstImageDiv = styled('div')({
    width: '100%',
    height: 600,
    position: "absolute",
    top: 180
})

function CareerPageFirstImageComponent() {
    return (
        <FirstImageDiv>
            <FirstImage src={CAREERS_PAGE_FIRST_IMAGE} loading='lazy' alt='BUSINESS_LOAN_PAGE_IMAGE' draggable='false' />
            <h1 style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', left: 605, top: 260, color: 'rgba(256, 256, 256, 1)', fontFamily: 'sans-serif', fontWeight: '800'}}>Careers</h1>
        </FirstImageDiv>
    );
}

export default CareerPageFirstImageComponent;