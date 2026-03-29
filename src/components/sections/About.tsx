"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Shield, Award, Users, Clock } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = end / (duration * 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className="stat-number">
            {count}{suffix}
        </span>
    );
}

const stats = [
    { icon: Clock, value: 15, suffix: "+", label: "Años de experiencia" },
    { icon: Award, value: 120, suffix: "+", label: "Proyectos completados" },
    { icon: Users, value: 50, suffix: "+", label: "Profesionales" },
    { icon: Shield, value: 98, suffix: "%", label: "Satisfacción del cliente" },
];

const values = [
    {
        title: "Excelencia",
        description: "Cada proyecto refleja nuestro compromiso con los más altos estándares de calidad en construcción y consultoría.",
    },
    {
        title: "Innovación",
        description: "Implementamos tecnologías de vanguardia y metodologías modernas para superar las expectativas del mercado.",
    },
    {
        title: "Integridad",
        description: "Construimos relaciones basadas en la transparencia, la honestidad y el respeto mutuo con cada cliente.",
    },
];

export function About() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            id="nosotros"
            ref={sectionRef}
            className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{ backgroundColor: "#f4f6f8" }}
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none" style={{ background: "#29838E" }} />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-[0.03] pointer-events-none" style={{ background: "#2C5A63" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.25em] font-heading" style={{ color: "#29838E" }}>
                        Quiénes Somos
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-bold" style={{ color: "#1E3434" }}>
                        LA FORTALEZA DETRÁS{" "}
                        <span className="gradient-text">DE CADA PROYECTO</span>
                    </h2>
                    <div className="section-divider mx-auto mt-8" />
                </motion.div>

                {/* About Content - 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Left - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-lg leading-relaxed font-sans mb-6" style={{ color: "#1E3434CC" }}>
                            <strong className="font-heading font-bold" style={{ color: "#1E3434" }}>Illimani Constructora y Consultora</strong> es una empresa
                            boliviana líder en el sector de la construcción e ingeniería civil. Con más de una década de experiencia,
                            nos especializamos en proyectos de alta complejidad que integran diseño innovador, precisión estructural
                            y gestión eficiente.
                        </p>
                        <p className="text-base leading-relaxed font-sans mb-8" style={{ color: "#1E3434AA" }}>
                            Nuestro nombre, inspirado en la montaña más emblemática de La Paz, refleja nuestra filosofía:
                            solidez, permanencia y visión elevada. Cada proyecto que emprendemos lleva la marca de la excelencia
                            que nos define.
                        </p>

                        {/* Values */}
                        <div className="space-y-6">
                            {values.map((value, i) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="flex gap-4 group"
                                >
                                    <div
                                        className="w-1 rounded-full shrink-0 group-hover:h-full transition-all duration-500"
                                        style={{ background: "linear-gradient(to bottom, #29838E, #2C5A63)", minHeight: "100%" }}
                                    />
                                    <div>
                                        <h4 className="font-heading font-bold text-base mb-1" style={{ color: "#1E3434" }}>
                                            {value.title}
                                        </h4>
                                        <p className="text-sm font-sans leading-relaxed" style={{ color: "#1E3434AA" }}>
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl relative"
                            style={{ aspectRatio: "4/3" }}
                        >
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage: `url(${basePath}/img/fondo.jpg)`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(135deg, rgba(30,52,52,0.7), rgba(41,131,142,0.4))",
                                }}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                                >
                                    <Shield size={48} className="mb-4 mx-auto" style={{ color: "#29838E" }} />
                                    <p className="text-center font-heading font-bold text-xl md:text-2xl mb-2">
                                        Certificados y Respaldados
                                    </p>
                                    <p className="text-center text-white/70 text-sm font-sans max-w-sm">
                                        Cumplimos con todas las normativas nacionales e internacionales del sector de la construcción.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating accent card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="absolute -bottom-8 -left-8 p-6 rounded-xl shadow-xl animate-float hidden md:block"
                            style={{ background: "linear-gradient(135deg, #2C5A63, #29838E)" }}
                        >
                            <p className="text-white font-heading font-bold text-3xl">15+</p>
                            <p className="text-white/80 text-xs font-sans uppercase tracking-wider">Años de Experiencia</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="text-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group"
                                style={{
                                    backgroundColor: "white",
                                    borderColor: "rgba(41, 131, 142, 0.1)",
                                    boxShadow: "0 4px 24px rgba(30, 52, 52, 0.06)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = "0 8px 40px rgba(41, 131, 142, 0.15)";
                                    e.currentTarget.style.borderColor = "rgba(41, 131, 142, 0.3)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(30, 52, 52, 0.06)";
                                    e.currentTarget.style.borderColor = "rgba(41, 131, 142, 0.1)";
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
                                    style={{ backgroundColor: "rgba(41, 131, 142, 0.1)", color: "#29838E" }}
                                >
                                    <Icon size={22} />
                                </div>
                                <p className="text-3xl md:text-4xl font-heading font-black mb-1" style={{ color: "#1E3434" }}>
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="text-xs font-sans uppercase tracking-wider" style={{ color: "#1E3434AA" }}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
