import { styled } from "@mui/material";
import { OUR_TEAM_PAGE_FIRST_IMAGE } from "../../ConstantsImage";


const StartingImage = styled(`img`)({
    width: '100%',
    height: 470
})

const ImageDiv = styled('div')({
    position: "absolute",
    top: 175,
    width: '100%',
    height: 470
})

const TextInImageDiv = styled('div')({
    top: 195,
    left: 650,
    position: 'absolute'
})

function FirstImageOurTeamComponent(){
    return (
        <ImageDiv>
            <StartingImage src={OUR_TEAM_PAGE_FIRST_IMAGE} loading='lazy' alt="OUR TEAM PAGE FIRST IMAGE"/>
            <TextInImageDiv>
                <h1>About Us</h1>
            </TextInImageDiv>
        </ImageDiv>
    );
}

export default FirstImageOurTeamComponent;