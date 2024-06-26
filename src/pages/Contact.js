import React, { useState } from 'react'
import { BsEnvelope } from 'react-icons/bs';
import {db} from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
const Contact = () => {
    const [fromEmail, setFromEmail] = useState("");
    const [message, setMessage] = useState("");
    const [contact, setContact] = useState()
    const [name, setName] = useState("");
    const submitHandler= async (e)=> {

        e.preventDefault();
        if (!name || name.length === 0){
            alert("Please enter the name.")
            return;
        }
        if (!fromEmail || fromEmail.length === 0) {
            alert("Please enter the email");
            return;
        }

        if (message.length === 0) {
            alert("Please enter the information for us");
            return;
        }
        if (contact.length === 0) {
            alert("Please enter the contact detail.");
            return;
        }
        
        try {
            await addDoc(collection(db, 'contacts'), {
                name: name,
                email: fromEmail,
                message: message,
                mobile: contact,
                timestamp: serverTimestamp()
              });
            alert('Message has been submitted!');
            setName('');
            setFromEmail('');
            setMessage('');
            setContact('');
          } catch (error) {
            alert('Error submitting the message: ', error.message);
          }        
    }
  return (
    <div className='w-full h-full p-24'>
        <form onSubmit={submitHandler} method='POST' className='flex flex-col max-w-[1260px] w-full mx-auto mt-36'>
            <div className='pb-2'>
                <div className='flex flex-col justify-start items-start'>
                    <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='NAME' name="name" className='p-2 w-full text-gray-400 border-b border-gray-400 bg-inherit'/>
                    <input type='email' placeholder='EMAIL' name="email" onChange={(e)=> setFromEmail(e.target.value)} value={fromEmail} className='my-8 p-2 w-full text-gray-400 border-b border-gray-400 bg-inherit'/>
                    <input type='text' placeholder='Mobile Number' name="contact" onChange={(e)=> setContact(e.target.value)} value={contact} min={10} max={11} className='my-8 p-2 w-full text-gray-400 border-b border-gray-400 bg-inherit'/>
                    <textarea name='message' rows={10} placeholder='MESSAGE' onChange={(e)=> setMessage(e.target.value)} value={message} className='mt-8 p-2 w-full text-gray-400 border-b border-gray-400 bg-inherit'/>
                    <button className='px-4 py-3 my-8 mx-auto text-xl flex items-center text-gray-400 border border-gray-400 rounded-lg hover:text-inherit hover:border-[#d6ac67]'>
                        Get in touch
                    </button>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                  <iframe title="utkarsh jain address" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14666.843112273915!2d77.4299909!3d23.2172086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c438e6d1e6faf%3A0x5bd4989c06205fe5!2sUtkarsh%20Jain%20Architects!5e0!3m2!1sen!2sin!4v1717484119048!5m2!1sen!2sin"  height="400" style={{border:0, margin: "0 auto", width: "100%"}} allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>
                  <div className="flex flex-col justify-start items-end">
                   <p className="text-6xl md:text-8xl font-bold py-12 uppercase text-right">
                      Let's talk!
                    </p>
                    <a href="mailto:utkarshjainarchitect.com" className="flex items-center">
                        <p className="text-2xl pr-4">utkarshjainarchitect.com</p>
                        <BsEnvelope size={22}/>
                    </a>
                </div>
                </div>
                
            </div>
        </form>
    </div>
  )
}

export default Contact