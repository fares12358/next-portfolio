import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { getVisitorCount, trackVisitorAPI } from '../api/API_Requestes';

const FormData = () => {
    const { onClose, setOnClose, heardFrom, setHeardFrom, role, setRole, vistors, setVisitors, V_loading, setV_Loading } = useUser();
    const [touched, setTouched] = useState({ role: false, heardFrom: false });
    const ROLES = ['hr', 'visitor'];
    const SOURCES = [
        { value: 'jobPosting', label: 'Applying for job' },
        { value: 'linkedin', label: 'LinkedIn' },
        { value: 'facebook', label: 'Facebook' },
        { value: 'whatsapp', label: 'WhatsApp' }
    ];

    const handleSubmit = e => {
        e.preventDefault();
        setTouched({ role: true, heardFrom: true });

        if (role && heardFrom) {
            trackVisitor();
            setOnClose(true);
        }
    };

    const canSubmit = role && heardFrom;

    const fetchVisitorCount = async () => {
        try {
            setV_Loading(true);
            const total = await getVisitorCount();
            console.log("Total visitors:", total);
            setVisitors(total);
        } catch (err) {
            console.error("Failed to fetch visitor count:", err);
        } finally {
            setV_Loading(false);
        }
    }

    const trackVisitor = async () => {
        const tracked = localStorage.getItem('visitorTracked');
        const counter = tracked ? 'normal' : 'pluse';
        const url = window.location.href;

        try {
            await trackVisitorAPI( url, role, heardFrom, counter );
            console.log('Visitor Tracked');
            localStorage.setItem('visitorTracked', 'true');
            fetchVisitorCount();
            console.log("tracked successfully");
            
        } catch (err) {
            console.error('Tracking failed:', err);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('visitorTracked')) {
            setOnClose(true);
        }
        fetchVisitorCount();
    }, []);


    return (
        <AnimatePresence>
                // Overlay
            <motion.div
                className={`fixed inset-0  items-center justify-center bg-transparent backdrop-blur-2xl shadow-sm z-50 ${onClose ? 'hidden' : 'flex'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Modal Form */}
                <motion.form
                    className="bg-myBlack w-[90%] max-w-[800px] max-h-[90%] overflow-auto rounded-xl shadow-my flex flex-col p-6 md:p-10"
                    onClick={e => e.stopPropagation()}
                    onSubmit={handleSubmit}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 590, damping: 25 }}
                >
                    <h2 className="text-2xl text-myGreen font-bold uppercase self-center mb-2">
                        Welcome
                    </h2>
                    <p className="text-gray-400 text-center mb-6">
                        Please answer these questions...
                    </p>

                    {/* Role Fieldset */}
                    <fieldset className="flex flex-col gap-2 text-white mb-6" aria-required>
                        <legend className="text-gray-400 flex items-center justify-center gap-2 my-5">
                            Who are you?
                        </legend>
                        <div className="flex gap-6 justify-start">
                            {ROLES.map(option => (
                                <label
                                    key={option}
                                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-myGreen/10 focus-within:ring-2 focus-within:ring-myGreen ${touched.role && !role ? 'ring-1 ring-red-500' : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="role"
                                        value={option}
                                        checked={role === option}
                                        onChange={e => setRole(e.target.value)}
                                        onBlur={() => setTouched(prev => ({ ...prev, role: true }))}
                                        className="accent-myGreen focus:outline-none"
                                        required
                                    />
                                    {option === 'hr' ? 'HR' : 'Visitor'}
                                </label>
                            ))}
                        </div>
                        {touched.role && !role && (
                            <p className="text-red-500 text-sm text-center mt-1">
                                Please select your role.
                            </p>
                        )}
                    </fieldset>

                    {/* Heard From Fieldset */}
                    <fieldset className="flex flex-col gap-2 text-white mb-6" aria-required>
                        <legend className="text-gray-400 flex items-center justify-center gap-2 my-5">
                            How did you hear about this site?
                        </legend>
                        <div className="flex flex-wrap gap-6 justify-start">
                            {SOURCES.map(({ value, label }) => (
                                <label
                                    key={value}
                                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-myGreen/10 focus-within:ring-2 focus-within:ring-myGreen ${touched.heardFrom && !heardFrom ? 'ring-1 ring-red-500' : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="heardFrom"
                                        value={value}
                                        checked={heardFrom === value}
                                        onChange={e => setHeardFrom(e.target.value)}
                                        onBlur={() => setTouched(prev => ({ ...prev, heardFrom: true }))}
                                        className="accent-myGreen focus:outline-none"
                                        required
                                    />
                                    {label}
                                </label>
                            ))}
                        </div>
                        {touched.heardFrom && !heardFrom && (
                            <p className="text-red-500 text-sm text-center mt-1">
                                Please let us know how you heard about us.
                            </p>
                        )}
                    </fieldset>

                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className={`mt-5  self-center bg-myGreen text-black font-semibold py-2 px-6 rounded-lg transition-opacity ${!canSubmit ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                    >
                        Submit
                    </button>
                </motion.form>
            </motion.div>
        </AnimatePresence>
    );
}

export default FormData