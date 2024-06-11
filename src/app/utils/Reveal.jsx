"use client";
import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const onInView = useCallback(() => {
        mainControls.start("visible");
        slideControls.start("visible");
    }, [mainControls, slideControls]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onInView();
                }
            },
            { once: true }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [onInView]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { width: "100%" },
                    visible: { width: "0" }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    background: "linear-gradient(90deg, #1a9beb 0%, #5fafe0 100%)",
                    zIndex: 20,
                    borderBottom: "3px solid black",
                    boxShadow: "0 0 5px rgba(0, 255, 255, 0.7)",
                }}
            />
        </div>
    );
};
