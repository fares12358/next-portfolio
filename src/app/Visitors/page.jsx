'use client'
import React, { useEffect, useState } from 'react'
import BgAnim from '../components/BgAnim'
import axios from 'axios'

const Page = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    // const API = 'http://localhost:5000';
    const API = 'https://node-portfolio-back-end-eight.vercel.app';

    const getVisitor = async () => {
        try {
            setLoader(true);
            const res = await axios.get(`${API}/get_visitors`);
            console.log("Response data:", res.data);

            // Safely check and set the visits array
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
    }, []); // run only on first mount

    return (
        <div className='w-full h-[calc(100%-80px)] bg-transparent flex flex-col items-start justify-start p-5 lg:pt-10 gap-5 text-white'>
            <BgAnim />
            {loader && <p className="text-center">Loading...</p>}
            {data.map((item, index) => (
                <div
                    key={index}
                    className="w-full p-4 mb-4 rounded-lg shadow-my flex flex-col sm:flex-row sm:items-center"
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
                            <div className="truncate">{item.userAgent}</div>
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
        </div>
    )
}

export default Page;
