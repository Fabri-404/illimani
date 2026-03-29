"use client";

import { motion } from "motion/react";
import { ClipboardList, Compass, HardHat, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Consulta Inicial",
        description:
            "Nos reunimos contigo para entender tu visión, necesidades y presupuesto. Evaluamos la factibilidad del proyecto y definimos los alcances.",
        details: ["Levantamiento de requerimientos", "Análisis de factibilidad", "Presupuesto estimado"],
    },
    {
        number: "02",
        icon: Compass,
        title: "Diseño y Planificación",
        description:
            "Nuestro equipo de arquitectos e ingenieros desarrolla el diseño completo, planos estructurales y cronograma detallado del proyecto.",
        details: ["Diseño arquitectónico", "Cálculo estructural", "Cronograma y presupuesto final"],
    },
    {
        number: "03",
        icon: HardHat,
        title: "Ejecución de Obra",
        description:
            "Construimos con los más altos estándares de calidad. Supervisión constante, control de materiales y reportes periódicos de avance.",
        details: ["Supervisión permanente", "Control de calidad", "Reportes de avance"],
    },
    {
        number: "04",
        icon: CheckCircle2,
        title: "Entrega y Garantía",
        description:
            "Entregamos tu proyecto terminado con toda la documentación técnica, certificaciones y una garantía que respalda nuestro trabajo.",
        details: ["Documentación completa", "Certificaciones", "Garantía post-entrega"],
    },
];

export function Process() {
    return (
        <section
            className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{ backgroundColor: "#f4f6f8" }}
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #1E3434 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
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
                    className="text-center mb-20"
                >
                    <span
                        className="text-sm font-bold uppercase tracking-[0.25em] font-heading"
                        style={{ color: "#29838E" }}
                    >
                        Nuestro Proceso
                    </span>
                    <h2
                        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-bold"
                        style={{ color: "#1E3434" }}
                    >
                        ¿CÓMO{" "}
                        <span className="gradient-text">TRABAJAMOS</span>?
                    </h2>
                    <div className="section-divider mx-auto mt-8" />
                    <p
                        className="mt-6 text-base font-sans max-w-2xl mx-auto leading-relaxed"
                        style={{ color: "#1E3434AA" }}
                    >
                        Un proceso transparente, eficiente y profesional de principio a fin.
                        Te acompañamos en cada etapa para que tu proyecto sea un éxito.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div
                        className="hidden lg:block absolute top-24 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px]"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(41,131,142,0.1), rgba(41,131,142,0.3), rgba(41,131,142,0.3), rgba(41,131,142,0.1))",
                        }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    className="group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3"
                                    style={{
                                        backgroundColor: "white",
                                        border: "1px solid rgba(41, 131, 142, 0.08)",
                                        boxShadow: "0 4px 24px rgba(30, 52, 52, 0.04)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow =
                                            "0 16px 48px rgba(41, 131, 142, 0.12)";
                                        e.currentTarget.style.borderColor =
                                            "rgba(41, 131, 142, 0.25)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow =
                                            "0 4px 24px rgba(30, 52, 52, 0.04)";
                                        e.currentTarget.style.borderColor =
                                            "rgba(41, 131, 142, 0.08)";
                                    }}
                                >
                                    {/* Step number */}
                                    <div
                                        className="absolute -top-4 -right-2 text-6xl font-heading font-black opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 select-none"
                                        style={{ color: "#29838E" }}
                                    >
                                        {step.number}
                                    </div>

                                    {/* Icon circle */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 relative z-10"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(41,131,142,0.1), rgba(44,90,99,0.05))",
                                            color: "#29838E",
                                            border: "1px solid rgba(41,131,142,0.15)",
                                        }}
                                    >
                                        <Icon size={28} />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg font-heading font-bold mb-3 group-hover:text-accent transition-colors duration-300"
                                        style={{ color: "#1E3434" }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="text-sm font-sans leading-relaxed mb-5"
                                        style={{ color: "#1E3434AA" }}
                                    >
                                        {step.description}
                                    </p>

                                    {/* Detail list */}
                                    <ul className="space-y-2">
                                        {step.details.map((detail) => (
                                            <li
                                                key={detail}
                                                className="flex items-center gap-2 text-xs font-sans"
                                                style={{ color: "#1E3434BB" }}
                                            >
                                                <ArrowRight size={10} style={{ color: "#29838E" }} className="shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
