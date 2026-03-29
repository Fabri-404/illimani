"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Torre Empresarial Illimani",
        category: "Edificación Comercial",
        location: "La Paz, Bolivia",
        year: "2024",
        description: "Complejo de oficinas de 18 pisos con diseño bioclimático, fachada de cristal inteligente y certificación de sostenibilidad. Un referente de la arquitectura moderna en Bolivia.",
        area: "12,500 m²",
        status: "Completado",
        color: "#29838E",
    },
    {
        id: 2,
        title: "Residencial Altiplano",
        category: "Vivienda de Lujo",
        location: "Zona Sur, La Paz",
        year: "2023",
        description: "Conjunto residencial exclusivo de 45 unidades con acabados premium, áreas comunes de primer nivel y vista panorámica al Illimani.",
        area: "8,200 m²",
        status: "Completado",
        color: "#2C5A63",
    },
    {
        id: 3,
        title: "Centro de Convenciones Pachamama",
        category: "Infraestructura Pública",
        location: "El Alto, Bolivia",
        year: "2024",
        description: "Centro multipropósito con capacidad para 3,000 personas, sistema acústico avanzado y diseño inspirado en la cultura andina contemporánea.",
        area: "15,000 m²",
        status: "En progreso",
        color: "#1E3434",
    },
    {
        id: 4,
        title: "Puente Vehicular Choqueyapu",
        category: "Infraestructura Vial",
        location: "La Paz, Bolivia",
        year: "2023",
        description: "Puente de doble carril con estructura metálica de alta resistencia, diseñado para soportar tráfico pesado y condiciones sísmicas.",
        area: "340 m lineales",
        status: "Completado",
        color: "#29838E",
    },
    {
        id: 5,
        title: "Hospital Municipal Kallawaya",
        category: "Salud",
        location: "Oruro, Bolivia",
        year: "2024",
        description: "Complejo hospitalario de tercer nivel con 200 camas, quirófanos de última generación y sistema de energía renovable integrado.",
        area: "22,000 m²",
        status: "En progreso",
        color: "#2C5A63",
    },
    {
        id: 6,
        title: "Urbanización Los Sauces",
        category: "Planificación Urbana",
        location: "Cochabamba, Bolivia",
        year: "2022",
        description: "Desarrollo urbano integral con 120 lotes, área verde planificada, red de servicios básicos y vías de acceso pavimentadas.",
        area: "45,000 m²",
        status: "Completado",
        color: "#1E3434",
    },
];

export function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section
            id="proyectos"
            className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{ backgroundColor: "#0d1516" }}
        >
            {/* Background grid pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(41,131,142,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(41,131,142,0.3) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.25em] font-heading" style={{ color: "#29838E" }}>
                        Portafolio
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
                        ÚLTIMOS{" "}
                        <span style={{ color: "#29838E" }}>PROYECTOS</span>
                    </h2>
                    <div className="section-divider mx-auto mt-8" />
                    <p className="mt-6 text-base font-sans text-white/50 max-w-2xl mx-auto">
                        Cada proyecto es un testimonio de nuestra dedicación a la excelencia y la innovación en la construcción.
                    </p>
                </motion.div>

                {/* Featured Project Showcase */}
                <div className="mb-12">
                    <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "420px" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-0"
                                style={{
                                    background: "rgba(255, 255, 255, 0.03)",
                                    border: "1px solid rgba(255, 255, 255, 0.06)",
                                    borderRadius: "16px",
                                }}
                            >
                                {/* Left: Project Visual */}
                                <div
                                    className="relative h-64 lg:h-auto"
                                    style={{
                                        background: `linear-gradient(135deg, ${projects[activeIndex].color}DD, ${projects[activeIndex].color}88)`,
                                        borderRadius: "16px 16px 0 0",
                                    }}
                                >
                                    {/* 3D-style geometric elements */}
                                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ borderRadius: "16px 16px 0 0" }}>
                                        {/* Large geometric shape */}
                                        <motion.div
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                            className="absolute w-56 h-56 md:w-72 md:h-72 opacity-20"
                                            style={{
                                                border: `2px solid rgba(255,255,255,0.3)`,
                                                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                                            }}
                                        />
                                        <motion.div
                                            animate={{ rotate: [360, 0] }}
                                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                            className="absolute w-40 h-40 md:w-56 md:h-56 opacity-10"
                                            style={{
                                                border: `1px solid rgba(255,255,255,0.4)`,
                                                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                                            }}
                                        />
                                        {/* 3D cube outline effect */}
                                        <div className="relative">
                                            <div className="w-20 h-20 md:w-28 md:h-28 border-2 border-white/30 transform rotate-45" />
                                            <div className="absolute top-2 left-2 md:top-3 md:left-3 w-20 h-20 md:w-28 md:h-28 border-2 border-white/15 transform rotate-45" />
                                        </div>
                                    </div>

                                    {/* Status badge */}
                                    <div
                                        className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-heading"
                                        style={{
                                            background: projects[activeIndex].status === "Completado"
                                                ? "rgba(41, 131, 142, 0.9)"
                                                : "rgba(255, 180, 0, 0.9)",
                                            color: "white",
                                        }}
                                    >
                                        {projects[activeIndex].status}
                                    </div>

                                    {/* Category */}
                                    <div className="absolute bottom-6 left-6 text-white/80 text-sm font-heading font-medium">
                                        {projects[activeIndex].category}
                                    </div>
                                </div>

                                {/* Right: Project Info */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4 text-sm font-sans text-white/50">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} style={{ color: "#29838E" }} />
                                            <span>{projects[activeIndex].location}</span>
                                        </div>
                                        <span className="text-white/20">|</span>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} style={{ color: "#29838E" }} />
                                            <span>{projects[activeIndex].year}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                                        {projects[activeIndex].title}
                                    </h3>

                                    <p className="text-sm font-sans text-white/60 leading-relaxed mb-6">
                                        {projects[activeIndex].description}
                                    </p>

                                    <div className="flex items-center gap-4 mb-8">
                                        <div
                                            className="px-4 py-2 rounded-lg text-xs font-sans font-medium"
                                            style={{ background: "rgba(41, 131, 142, 0.1)", color: "#29838E", border: "1px solid rgba(41, 131, 142, 0.2)" }}
                                        >
                                            Área: {projects[activeIndex].area}
                                        </div>
                                    </div>

                                    <a
                                        href="#asesoria"
                                        className="flex items-center gap-2 text-sm font-heading font-bold transition-colors group w-fit"
                                        style={{ color: "#29838E" }}
                                    >
                                        <span>Consultar proyecto similar</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <div className="absolute bottom-6 right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-6 flex lg:flex-col gap-3 z-10">
                            <button
                                onClick={prevProject}
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    color: "white",
                                }}
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={nextProject}
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                style={{
                                    background: "rgba(41,131,142,0.8)",
                                    color: "white",
                                }}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Project counter */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className="transition-all duration-300"
                                style={{
                                    width: i === activeIndex ? "32px" : "8px",
                                    height: "8px",
                                    borderRadius: "4px",
                                    background: i === activeIndex ? "#29838E" : "rgba(255,255,255,0.15)",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Project Flashcards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                            className="group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500"
                            style={{
                                background: "rgba(255, 255, 255, 0.03)",
                                border: "1px solid rgba(255, 255, 255, 0.06)",
                                transform: expandedId === project.id ? "scale(1.02)" : "scale(1)",
                            }}
                            onMouseEnter={(e) => {
                                if (expandedId !== project.id) {
                                    e.currentTarget.style.borderColor = "rgba(41, 131, 142, 0.3)";
                                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(41, 131, 142, 0.1)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (expandedId !== project.id) {
                                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                                    e.currentTarget.style.boxShadow = "none";
                                }
                            }}
                        >
                            {/* Color header */}
                            <div
                                className="h-2 w-full"
                                style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
                            />

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <span
                                        className="text-xs font-heading font-bold uppercase tracking-wider"
                                        style={{ color: "#29838E" }}
                                    >
                                        {project.category}
                                    </span>
                                    <Maximize2 size={14} className="text-white/20 group-hover:text-accent transition-colors" />
                                </div>

                                <h4 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h4>

                                <div className="flex items-center gap-3 text-xs font-sans text-white/40 mb-3">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={11} />
                                        {project.location}
                                    </span>
                                    <span>{project.year}</span>
                                </div>

                                {/* Expandable content */}
                                <AnimatePresence>
                                    {expandedId === project.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-sm font-sans text-white/50 leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="text-xs px-3 py-1 rounded-full font-sans"
                                                    style={{ background: "rgba(41,131,142,0.1)", color: "#29838E" }}
                                                >
                                                    {project.area}
                                                </span>
                                                <span
                                                    className="text-xs px-3 py-1 rounded-full font-sans font-medium"
                                                    style={{
                                                        background: project.status === "Completado"
                                                            ? "rgba(41,131,142,0.15)"
                                                            : "rgba(255,180,0,0.15)",
                                                        color: project.status === "Completado" ? "#29838E" : "#FFB400",
                                                    }}
                                                >
                                                    {project.status}
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
