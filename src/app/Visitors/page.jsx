'use client'
import React, { useEffect, useState } from 'react'
import BgAnim from '../components/BgAnim'
import axios from 'axios'
import MyLoader from '../components/MyLoader'
import AdminVisitor from '../components/AdminVisitor'
import Link from 'next/link'
import { useUser } from '../context/UserContext'

const Page = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    // const API = 'http://localhost:5000';
    const API = 'https://node-portfolio-back-end-eight.vercel.app';
    const { isAdminLoged, setIsAdminLoged } = useUser();

    const getVisitor = async () => {
        try {
            setLoader(true);
            const res = await axios.get(`${API}/get_visitors`);
            console.log("Response data:", res.data);
            if (Array.isArray(res.data.data) && res.data.data.length > 0) {
                setData(res.data.data[0].visits);
            } else {
                setData([]);
            }
        } catch (error) {
            console.error("Error fetching visitors:", error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        getVisitor();
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        setIsAdminLoged(false);
    }
    return (
        !isAdminLoged ?
            <AdminVisitor />
            :
            <div className='w-full h-full absolute top-0 left-0 z-50 bg-myBlack flex flex-col items-start justify-start md:p-10 p-5 lg:pt-10 gap-5 text-white overflow-auto main'>
                {loader && <div className="w-full h-full flex items-center justify-center">
                    <MyLoader />
                </div>
                }
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-full p-4 mb-10 rounded-lg shadow-my flex flex-col sm:flex-row sm:items-center"
                    >
                        {/* Left: metadata grid */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div>
                                <span className="font-semibold text-myGreen">IP:</span> {item.ip}
                            </div>
                            <div>
                                <span className="font-semibold text-myGreen">Browser:</span> {item.browser}
                            </div>
                            <div>
                                <span className="font-semibold text-myGreen">OS:</span> {item.os}
                            </div>
                            <div>
                                <span className="font-semibold text-myGreen">Device:</span> {item.device}
                            </div>
                            <div>
                                <span className="font-semibold text-myGreen">City:</span> {item.city}
                            </div>
                            <div>
                                <span className="font-semibold text-myGreen">Country:</span> {item.country}
                            </div>
                            <div className="sm:col-span-2">
                                <span className="font-semibold text-myGreen">User Agent:</span>
                                <div className="truncate whitespace-normal break-words">{item.userAgent}</div>
                            </div>
                            <div className="sm:col-span-2">
                                <span className="font-semibold text-myGreen">Visited At:</span>
                                {new Date(item.visitedAt).toLocaleString('en-GB', {
                                    timeZone: 'Africa/Cairo',
                                })}
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={handleLogout} className="fixed md:bottom-[120px] bottom-[100px] md:right-10 right-5 w-[50px] h-[50px] rounded-md bg-myBlack flex items-center justify-center shadow-sm shadow-myGreen cursor-pointer">
                    <img src="/svg/logout-3-svgrepo-com.svg" alt="logout" className='w-[20px] flex items-center justify-center' />
                </button>
                <Link href={"/"} className="fixed md:bottom-10 bottom-10 md:right-10 right-5 w-[50px] h-[50px] rounded-md bg-myBlack flex items-center justify-center shadow-sm shadow-myGreen cursor-pointer">
                    <img src="/svg/web-svgrepo-com.svg" alt="up" className='w-[20px] flex items-center justify-center' />
                </Link>
            </div>
    )
}

export default Page;
