"use client"
import React from 'react'
import { motion } from 'framer-motion'

const FadeInSection = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full">
            {children}
        </motion.div>
    )
}

export default FadeInSection