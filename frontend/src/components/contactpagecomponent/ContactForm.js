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
    background: `rgba(0, 0, 256, 1)`,
    height: '600px',
    width: '800px',
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
    }

    return (
        <OuterDiv>
            <ImageDiv src={Img2} loading='lazy' alt="Form Image" />
            <FormDiv>
            </FormDiv>
            <FormInnerDiv>
                <form style={{ width: '100%' }}>
                    <div className="controls">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="form_name">Firstname *</label>
                                    <input id="form_name" type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder='Please enter your firstname' required='required' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="form_name">Lastname *</label>
                                    <input id="form_name" type='text' name='name' value={lastname} onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder='Please enter your firstname' required='required' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </FormInnerDiv>
        </OuterDiv>
    );
}


export default ContactForm;