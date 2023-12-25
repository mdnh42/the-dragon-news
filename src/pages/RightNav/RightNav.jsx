import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import UZone from '../Shared/UZone/UZone';
import bg from '../../../src/assets/assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>

            <Button className='mb-2' variant='outline-primary'> <FaGoogle /> Login With Google</Button>
            <Button variant='outline-primary'> <FaGithub /> Login With Github</Button>
            <div>
                <h3>Find Us</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook></ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter></ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram></ListGroup.Item>
                    <ListGroup.Item><FaLinkedinIn></FaLinkedinIn></ListGroup.Item>
                </ListGroup>
            </div>
            <UZone></UZone>
            <div className='position-relative'>
                <div className=''>
                    <img style={{ width: '100%' }} src={bg} alt="" className='img-fluid' />
                </div>
                <div className='position-absolute text-center p-5' style={{ top: 200 }}>
                    <h5 className='text-light'>Lorem ipsum dolor sit amet.</h5>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, enim?</p>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, enim?</p>
                </div>
            </div>

        </div >
    );
};

export default RightNav;