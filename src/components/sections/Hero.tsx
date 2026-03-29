"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax zoom: as user scrolls down, image scales up (zooms in)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.7]);

    return (
        <div
            id="inicio"
            ref={ref}
            className="relative w-full h-screen overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: "#1E3434" }}
        >
            {/* Background image with parallax zoom */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    scale,
                    backgroundImage: `url(${basePath}/img/fondo1.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    willChange: "transform",
                }}
            />

            {/* Dynamic overlay that gets darker as you scroll */}
            <motion.div
                className="absolute inset-0 z-[1]"
                style={{
                    opacity: overlayOpacity,
                    background: "linear-gradient(to bottom, #1E3434, #0d1516)",
                }}
            />

            {/* Gradient overlay for text readability */}
            <div
                className="absolute inset-0 z-[2]"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(30,52,52,0.2) 0%, transparent 40%, transparent 60%, rgba(13,21,22,0.95) 100%)",
                }}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 z-[3] pointer-events-none">
                {/* Corner accent lines */}
                <div className="absolute top-24 left-8 w-20 h-[1px] bg-accent/40" />
                <div className="absolute top-24 left-8 w-[1px] h-20 bg-accent/40" />
                <div className="absolute bottom-24 right-8 w-20 h-[1px] bg-accent/40" />
                <div className="absolute bottom-24 right-8 w-[1px] h-20 bg-accent/40" />

                {/* Side text - vertical */}
                <div
                    className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20 text-xs tracking-[0.5em] uppercase hidden xl:block"
                    style={{ writingMode: "vertical-rl" }}
                >
                    Constructora y Consultora desde Bolivia
                </div>
            </div>

            {/* Main content */}
            <motion.div
                className="relative z-10 text-center px-4 flex flex-col items-center justify-center max-w-5xl"
                style={{ y: textY, opacity }}
            >
                {/* Small decorative line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-[2px] mb-8"
                    style={{ background: "linear-gradient(90deg, #29838E, #2C5A63)" }}
                />

                {/* ILLIMANI - Main title */}
                <BlurText
                    text="ILLIMANI"
                    delay={80}
                    animateBy="letters"
                    direction="bottom"
                    className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-[0.15em] drop-shadow-2xl"
                    stepDuration={0.6}
                />

                {/* CONSTRUCTORA Y CONSULTORA */}
                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0em" }}
                    animate={{ opacity: 1, letterSpacing: "0.35em" }}
                    transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
                    className="mt-4 text-sm sm:text-base md:text-lg text-white/80 font-heading font-medium uppercase"
                >
                    Constructora y Consultora
                </motion.p>

                {/* Decorative divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="w-32 h-[1px] bg-white/30 my-6"
                />

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-base sm:text-lg md:text-xl text-white/70 font-sans font-light max-w-2xl leading-relaxed"
                >
                    Elevamos tu proyecto con precisión, visión y la firmeza que nos define
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
                >
                    <a href="#asesoria" className="btn-illimani-filled">
                        Solicitar Asesoría
                    </a>
                    <a href="#proyectos" className="btn-illimani">
                        Ver Proyectos
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
            >
                <span className="text-xs text-white/50 uppercase tracking-[0.3em] font-sans">
                    Descubre más
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown size={20} className="text-accent/70" />
                </motion.div>
            </motion.div>
        </div>
    );
}
