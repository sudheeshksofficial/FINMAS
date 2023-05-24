/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 12:18:11
 * @Description: description
 */




import { styled } from "@mui/material";
import { useState } from "react";
import Img2 from '../../assets/images/Middle_Image_FirstPage.jpg'

const OuterDiv = styled('div')({
    height: '600px',
    top: 1150,
    position: "absolute"
})

const ImageDiv = styled('img')({
    height: '600px',
    width: '550px',
    left: 80,
    position: 'absolute'
})

const FormDiv = styled('div')({
    background: `rgba(30, 80, 186, 1)`,
    height: '600px',
    width: '780px',
    left: 630,
    position: "absolute",
})

const FormInnerDiv = styled('div')({
    height: '600px',
    left: 680,
    top: 50,
    position: "absolute"
})

function ContactForm() {


    const [name, setName] = useState('')

    const [lastname, setLastName] = useState('')

    const [email, setEmail] = useState('')

    const [message, setMessage] = useState('')

    const [phone, setPhone] = useState('')

    const onHandleEvent = (event) => {
        event.preventDefault();
        alert(name);
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    return (
        <OuterDiv>
            <ImageDiv src={Img2} loading='lazy' alt="Form Image" />
            <FormDiv>
            </FormDiv>
            <FormInnerDiv>
                <form onSubmit={onHandleEvent} style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 10, color: 'white' }}>
                        <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '15px'}}>Firstname *
                            <input type='text' style={{ display: 'inline-block', width: '20em', position: 'relative', top: '.5em', background: 'rgba(0, 0, 256, 1)', border: 0, color:'white' }} placeholder='Please Enter your firstname' value={name} onChange={(e) => {setName(e.target.value)}}/>
                        </label>
                        <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '15px' }}>Lastname *
                            <input type='text' style={{ display: 'inline-block', width: '21em', position: 'relative', top: '.5em', background: 'rgba(0, 0, 256, 1)', border: 0, color:'white' }} placeholder='Please Enter your lastname' value={lastname} onChange={(e) => {setLastName(e.target.value)}}/>
                        </label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 10, color: 'white' }}>
                        <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '15px' }}>Email *
                            <input type='text' style={{ display: 'inline-block', width: '20em', position: 'relative', top: '.5em', background: 'rgba(0, 0, 256, 1)', border: 0, color:'white' }} placeholder='Please Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '15px' }}>Phone *
                            <input type='text' style={{ display: 'inline-block', width: '21em', position: 'relative', top: '.5em', background: 'rgba(0, 0, 256, 1)', border: 0, color:'white' }} placeholder='Please Enter your phoneNo' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white' }}>
                        <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', marginRight: '.5em', paddingTop: '1.5em', fontFamily: 'sans-serif', fontWeight: 400, fontSize: '15px' }}>Message *
                            <textarea rows={8} cols={92} style={{ display: 'inline-block', position: 'relative', top: '.5em', background: 'rgba(0, 0, 256, 1)', border: 0, color:'white' }} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                        </label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', color: 'white' }}>
                        <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '1.5em' }}>
                            <input type='submit' value='SEND MESSAGE' style={{ display: 'inline-block', width: '43em', height: '3em', position: 'relative', top: '1.5em', background: 'rgba(0, 180, 0, 1)', border: 0, color: 'white', borderRadius: 10 }}/>
                        </label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', color: 'white' }}>
                        <label style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', width: '6em', marginRight: '.5em', paddingTop: '2.5em' }}>
                            * These Fields are Required
                        </label>
                    </div>
                </form>
            </FormInnerDiv>
        </OuterDiv>
    );
}


export default ContactForm;