'use client'
import React, { useEffect, useRef, useState } from 'react'
import MyLoader from '../components/MyLoader'
import AdminVisitor from '../components/AdminVisitor'
import Link from 'next/link'
import { useUser } from '../context/UserContext'
import { getVisitors } from '../api/API_Requestes'

const Page = () => {
    const { isAdminLoged, setIsAdminLoged, data, setData, loader, setLoader } = useUser();

    // track when we last fetched (ms since epoch)
    const [lastFetched, setLastFetched] = useState(0)


    const fetchVisitorData = async () => {
        if (data.length > 0) return
        setLoader(true)
        try {
            const visitors = await getVisitors()
            if (Array.isArray(visitors) && visitors.length > 0) {
                setData(visitors[0].visits)
            } else {
                setData([])
            }
            setLastFetched(Date.now())    // ✅ record when we fetched
        } catch (err) {
            console.error('Error fetching visitors:', err)
        } finally {
            setLoader(false)
        }
    }

    const handleLogout = (e) => {
        e.preventDefault()
        setIsAdminLoged(false)
        setData([])
        setLastFetched(0)              // reset so next login will refetch
    }


    useEffect(() => {
        if (!isAdminLoged) return

        const now = Date.now()
        // if never fetched OR it's been more than an hour (3600_000 ms)
        if (!lastFetched || now - lastFetched > 3_600_000) {
            fetchVisitorData()
        }
    }, [isAdminLoged, lastFetched])


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
