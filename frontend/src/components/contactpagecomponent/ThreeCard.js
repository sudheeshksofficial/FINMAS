/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-26 10:42:14
 * @Description: description
 */




import { Card, CardContent, CardMedia, styled } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { PHONE_NUMBER, ADMIN_FINMAS_MAIL, ADDRESS_ALONE_TEXT } from "../../Constants";


const MidCard = styled('div')({
    //padding: "80px 60px",
    position: 'absolute',
    top: 620,
    width: '2000px',
    height: '400px',
});

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '2000px',
    marginLeft: '180px',
    marginTop: '80px'
})



const Row = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: '50px'
})

const StyledH2 = styled('h2')({
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: '20px',
    marginLeft: '80px',
    marginTop: '30px'
})

const StyledP = styled('p')({
    fontWeight: `400`,
    fontFamily: `sans-serif`,
    fontSize: `16px`,
    marginLeft: `60px`,
    marginBottom: '50px',
    marginTop: '30px'
})



function ThreeCard() {
    return (
        <MidCard>
            <Container>
                <Row>
                    <Card style={{ background: `rgba(240, 240, 230, 1)` }}>
                        <CardMedia style={{ marginLeft: '140px', marginTop: '50px' }}>
                            <PhoneIcon style={{ height: '50px', width: '50px' }} />
                        </CardMedia>
                        <CardContent>
                            <StyledH2>Phone Number</StyledH2>
                            <StyledP style={{marginLeft: '-0.79px'}}>{PHONE_NUMBER}</StyledP>
                        </CardContent>
                    </Card>
                    <Card style={{ background: `rgba(240, 240, 230, 1)` }}>
                        <CardMedia style={{ marginLeft: '140px', marginTop: '50px' }}>
                            <MailIcon style={{ height: '50px', width: '50px' }} />
                        </CardMedia>
                        <CardContent>
                            <StyledH2 >Email Address</StyledH2>
                            <a href={'mailto:'+ADMIN_FINMAS_MAIL} style={{textDecoration: 'none'}}><StyledP style={{marginLeft: '61px', color: 'rgba(256, 256, 256, 1)'}}>{ADMIN_FINMAS_MAIL}</StyledP></a>
                        </CardContent>
                    </Card>
                    <Card style={{ background: `rgba(240, 240, 230, 1)` }}>
                        <CardMedia style={{ marginLeft: '140px', marginTop: '50px' }}>
                            <LocationOnIcon style={{ height: '50px', width: '50px' }} />
                        </CardMedia>
                        <CardContent>
                            <StyledH2 style={{marginLeft: '110px'}}>Address</StyledH2>
                            <StyledP style={{marginLeft: '35px', width: '250px'}}>{ADDRESS_ALONE_TEXT}<br></br><br></br>Next to Arumbakkam Metro Station.</StyledP>
                        </CardContent>
                    </Card>
                </Row>
            </Container>
        </MidCard>
    );
}

export default ThreeCard;