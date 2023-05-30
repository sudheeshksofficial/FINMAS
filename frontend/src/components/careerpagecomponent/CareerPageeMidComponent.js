import { StarOutline } from "@mui/icons-material";
import { Card, CardContent, styled } from "@mui/material";
import { Link } from "react-router-dom";

const MidDiv = styled('div')({
    height: 900,
    width: '100%',
    backgroundColor: `rgba(256, 0, 0, 1)`,
    position: 'absolute',
    top: 1000,
    paddingLeft: 100,
    paddingRight: 100,
    display: 'flex',
    flex: '1 0 auto',
    alignContent: 'flex-start',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch'
})

const CardHeader = styled('h2')({
    fontFamily: 'sans-serif',
    fontSize: '32px',
    fontWeight: 800
})

const CardLocation = styled('h4')({
    fontFamily: 'sans-serif',
    fontSize: '26px',
    fontWeight: 500,
    textTransform: 'capitalize'
})

const CardDescription = styled('p')({
    fontFamily: 'sans-serif',
    fontSize: '18px',
    fontWeight: 300
})

function CareerPageeMidComponent() {
    return (
        <MidDiv>
            <Card sx={{maxWidth: 350, background: `rgba(0, 256, 0, 1)`, borderRadius: '5px' }}>
                <CardContent>
                    <StarOutline style={{marginLeft: 250, marginTop: -20}}/>
                    <CardHeader style={{marginTop: -20}}>Tele Sales</CardHeader>
                    <CardLocation style={{marginTop: -10, textTransform: 'capitalize'}}>Chennai, Tamilnadu, India</CardLocation>
                    <CardDescription>Pitching personal loan product for needy customers</CardDescription> 
                </CardContent>
            </Card>            
        </MidDiv>
    );
}

export default CareerPageeMidComponent;