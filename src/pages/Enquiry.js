import React, {useEffect, useState} from 'react'
import {db} from '../firebase';
import { getDocs, collection } from 'firebase/firestore';

const Enquiry = () => {
  const [enquiries, setEnquiry] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'contacts'));
            const queryData = querySnapshot.docs.map(doc=> ({
              id: doc.id,
              ...doc.data()
            }));
            setEnquiry(queryData);
          } catch (error) {
              console.error("Error fetching enquiry: ", error);
          }
    }
    fetchData();
  }, []);
  return (
    <div className='w-full h-full p-24'>
        <h1 className='text-center underline'>Enquiry Details</h1>
        {enquiries.length === 0 ? (<p>No Enquiry Found</p>) : (<ul>
            {enquiries.map(enquiry=>(
                <li key={enquiry.id}>
                    <p>Name: {enquiry.name}</p>
                    <p>Email: {enquiry.email}</p>
                    <p>Mobile Number: {enquiry.mobile}</p>
                    <p>Message: {enquiry.message}</p>
                    <p>Timestamp: {enquiry.timestamp?.toDate().toString()}</p>
                    <hr/>
                </li>                
            ))}
        </ul>)}
    </div>
  )
}

export default Enquiry