"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
    Building2,
    PencilRuler,
    HardHat,
    Briefcase,
    Compass,
    Ruler,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        id: 1,
        title: "Diseño Arquitectónico",
        description:
            "Creamos diseños vanguardistas que fusionan estética, funcionalidad y sostenibilidad. Cada proyecto es una obra de arte que refleja la visión del cliente.",
        icon: Building2,
        features: ["Renders 3D", "Planos detallados", "Diseño sostenible"],
    },
    {
        id: 2,
        title: "Ingeniería Estructural",
        description:
            "Soluciones de ingeniería robustas y eficientes para grandes edificaciones, garantizando seguridad absoluta y cumplimiento de normativas.",
        icon: PencilRuler,
        features: ["Cálculo estructural", "Análisis sísmico", "Optimización"],
    },
    {
        id: 3,
        title: "Construcción Integral",
        description:
            "Ejecución de obras con los más altos estándares de calidad, materiales premium y gestión optimizada de recursos y tiempos.",
        icon: HardHat,
        features: ["Control de calidad", "Gestión de obra", "Materiales premium"],
    },
    {
        id: 4,
        title: "Consultoría Técnica",
        description:
            "Asesoramiento experto en estudios de factibilidad, presupuestos, supervisión y dirección integral de todo tipo de proyectos.",
        icon: Briefcase,
        features: ["Factibilidad", "Presupuestos", "Supervisión"],
    },
    {
        id: 5,
        title: "Topografía y Geodesia",
        description:
            "Levantamientos topográficos de alta precisión con tecnología GPS y estación total para proyectos de cualquier envergadura.",
        icon: Compass,
        features: ["GPS de alta precisión", "Mapeo digital", "Estación total"],
    },
    {
        id: 6,
        title: "Planificación Urbana",
        description:
            "Desarrollo de planes urbanos integrales que armonizan el crecimiento sostenible con las necesidades de la comunidad.",
        icon: Ruler,
        features: ["Planes maestros", "Uso del suelo", "Impacto ambiental"],
    },
];

export function Services() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section
            id="servicios"
            className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{ backgroundColor: "#1E3434" }}
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
                    style={{ background: "radial-gradient(circle, #29838E, transparent)" }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.04]"
                    style={{ background: "radial-gradient(circle, #2C5A63, transparent)" }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

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
                        Nuestras Especialidades
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
                        SERVICIOS{" "}
                        <span style={{ color: "#29838E" }}>EXCLUSIVOS</span>
                    </h2>
                    <div className="section-divider mx-auto mt-8" />
                    <p className="mt-6 text-base font-sans text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Ofrecemos soluciones integrales de construcción y consultoría, adaptadas a las necesidades
                        específicas de cada proyecto con los más altos estándares de calidad.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        const isHovered = hoveredId === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                onMouseEnter={() => setHoveredId(service.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="group relative rounded-2xl p-8 cursor-pointer transition-all duration-500"
                                style={{
                                    background: isHovered
                                        ? "linear-gradient(135deg, rgba(44, 90, 99, 0.4), rgba(41, 131, 142, 0.2))"
                                        : "rgba(255, 255, 255, 0.03)",
                                    border: `1px solid ${isHovered ? "rgba(41, 131, 142, 0.4)" : "rgba(255, 255, 255, 0.06)"
                                        }`,
                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    boxShadow: isHovered
                                        ? "0 20px 60px rgba(41, 131, 142, 0.15)"
                                        : "none",
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
                                    style={{
                                        background: isHovered
                                            ? "linear-gradient(135deg, #29838E, #2C5A63)"
                                            : "rgba(41, 131, 142, 0.15)",
                                        color: isHovered ? "white" : "#29838E",
                                        boxShadow: isHovered ? "0 8px 24px rgba(41, 131, 142, 0.3)" : "none",
                                    }}
                                >
                                    <Icon size={26} />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-heading font-bold mb-3 transition-colors duration-300"
                                    style={{ color: isHovered ? "#29838E" : "white" }}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm font-sans leading-relaxed mb-6 text-white/60">
                                    {service.description}
                                </p>

                                {/* Features Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-xs font-sans px-3 py-1 rounded-full transition-all duration-300"
                                            style={{
                                                background: isHovered
                                                    ? "rgba(41, 131, 142, 0.2)"
                                                    : "rgba(255, 255, 255, 0.05)",
                                                color: isHovered ? "#29838E" : "rgba(255,255,255,0.5)",
                                                border: `1px solid ${isHovered ? "rgba(41, 131, 142, 0.3)" : "rgba(255, 255, 255, 0.08)"
                                                    }`,
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <div
                                    className="flex items-center text-sm font-bold font-heading transition-all duration-300 group"
                                    style={{ color: isHovered ? "#29838E" : "rgba(255,255,255,0.4)" }}
                                >
                                    <span className="mr-2">Saber más</span>
                                    <motion.span
                                        animate={{ x: isHovered ? 5 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <ArrowRight size={16} />
                                    </motion.span>
                                </div>

                                {/* Hover glow effect */}
                                {isHovered && (
                                    <div
                                        className="absolute -inset-[1px] rounded-2xl pointer-events-none"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(41,131,142,0.1), transparent, rgba(44,90,99,0.1))",
                                            zIndex: -1,
                                        }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
