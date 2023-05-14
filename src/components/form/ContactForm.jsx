import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import MyInput from '../input/MyInput';
import Button from '../Button';
import toast  from 'react-hot-toast';

const ContactForm = () => {
    const form = useRef(); 

    const sendEmail = (e:any) => {
        e.preventDefault();
        const toastId = toast.loading('Loading...');

        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
        .then((result) => {
            toast.dismiss(toastId);
            toast.success('The message has been sent');
        }, (error) => {
            toast.dismiss(toastId);
            toast.error('Unknown error');
        });
    };

    return ( 
        <form ref={form} onSubmit={sendEmail} className='mt-6 w-full h-fit flex flex-col gap-6'>
            <MyInput label="name" type="text" name="user_name"/>
            <MyInput label="email" type="email" name="user_email"/>
            <MyInput label="message" type="textarea" name="message"/>
            <Button type='submit' title="Send"/>
        </form>
    );
}
 
export default ContactForm;