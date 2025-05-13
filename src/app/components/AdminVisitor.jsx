import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MyLoader from './MyLoader';
import { useUser } from '../context/UserContext';

const AdminVisitor = () => {
    const [passInput, setpassInput] = useState('')
    const [Error, setError] = useState('');
    const [loader, setloader] = useState(false);
    const { isAdminLoged, setIsAdminLoged } = useUser();
    // const API = "http://localhost:5000"
    const API = 'https://node-portfolio-back-end-eight.vercel.app';
    const onSubmit = async (e) => {
        e.preventDefault();
        if (passInput === '') {
            setError("password can't be empty");
            return;
        }
        try {
            setloader(true);
            const res = await axios.post(`${API}/adminLogin`, { password: passInput });
            if (res.data.isAdmin) {
                console.log(res.data);
                setError('');
                setIsAdminLoged(true);
            } else {
                setError("Incorrect password");
            }
        } catch (error) {
            console.error("Error API request:", error);
        } finally {
            setloader(false);

        }
    }
   
  useEffect(() => {
    const timer = setTimeout(() => {
        setError('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [Error]);
    return (
        <div className='w-full h-full bg-myBlack absolute top-0 left-0 z-50 flex items-center justify-center'>
            <form className="md:py-20 py-10 md:px-10 p-5 flex flex-col items-center justify-center gap-10 max-w-[80%] shadow-my rounded-xl">
                <h2 className='text-xl font-bold uppercase text-white '>login</h2>
                <input onChange={(e) => setpassInput(e.target.value)} value={passInput} type="password" placeholder='Enter Admin password' className='md:px-5 px-3 md:py-3 py-2 bg-transparent placeholder:text-white border border-white focus:border-myGreen rounded-md text-md font-semibold text-myGreen focus:outline-none outline-none' />
                {
                    loader ?
                        <MyLoader />
                        :
                        <button onClick={onSubmit} className='bg-myGreen px-6 py-2 font-bold uppercase rounded-lg'>login</button>
                }
                {Error && <p className='text-red-500 text-sm'>{Error}</p>}
                <p className='flex gap-2 text-white uppercase font-bold'>back to <Link href={"/"} className='text-myGreen underline'>Home</Link></p>
            </form>
        </div>
    )
}

export default AdminVisitor