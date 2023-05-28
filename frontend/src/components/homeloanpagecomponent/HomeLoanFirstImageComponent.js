import { styled } from "@mui/material";
import { HOME_LOAN_PAGE_FIRST_IMAGE } from "../../ConstantsImage";

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

function HomeLoanFirstImageComponent() {
    return (
        <FirstImageDiv>
            <FirstImage src={HOME_LOAN_PAGE_FIRST_IMAGE} loading='lazy' alt='HOME_LOAN_PAGE_IMAGE' draggable='false' />
            <h1 style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', left: 605, top: 260, color: 'rgba(256, 256, 256, 1)', fontFamily: 'sans-serif', fontWeight: '800'}}>Personal Loan</h1>
        </FirstImageDiv>
    );
}

export default HomeLoanFirstImageComponent;