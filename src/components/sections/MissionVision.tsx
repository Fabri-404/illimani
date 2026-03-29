"use client";

import { motion } from "motion/react";
import { Target, Eye, Gem } from "lucide-react";

const cards = [
    {
        icon: Target,
        title: "Nuestra Misión",
        body: "Brindar soluciones integrales de construcción y consultoría que superen las expectativas de nuestros clientes, mediante la aplicación de tecnología de vanguardia, mano de obra altamente calificada y un compromiso inquebrantable con la calidad, la seguridad y el cumplimiento de plazos.",
        accent: "#29838E",
    },
    {
        icon: Eye,
        title: "Nuestra Visión",
        body: "Ser la empresa constructora y consultora de referencia en Bolivia y la región, reconocida por la excelencia de nuestros proyectos, la innovación constante, la formación de profesionales líderes y nuestro aporte al desarrollo sostenible de la infraestructura nacional.",
        accent: "#2C5A63",
    },
    {
        icon: Gem,
        title: "Nuestros Valores",
        body: "Compromiso, integridad, excelencia, innovación y trabajo en equipo. Estos pilares guían cada decisión y cada obra que emprendemos, asegurando resultados que trascienden y generan confianza en cada uno de nuestros clientes y aliados estratégicos.",
        accent: "#1E3434",
    },
];

export function MissionVision() {
    return (
        <section
            id="mision"
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
                    <span className="text-sm font-bold uppercase tracking-[0.25em] font-heading" style={{ color: "#29838E" }}>
                        Lo que nos impulsa
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-bold" style={{ color: "#1E3434" }}>
                        MISIÓN, VISIÓN{" "}
                        <span className="gradient-text">&amp; VALORES</span>
                    </h2>
                    <div className="section-divider mx-auto mt-8" />
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="group relative rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                                style={{
                                    backgroundColor: "white",
                                    boxShadow: "0 4px 30px rgba(30, 52, 52, 0.06)",
                                    border: "1px solid rgba(41, 131, 142, 0.08)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = `0 20px 60px rgba(41, 131, 142, 0.12)`;
                                    e.currentTarget.style.borderColor = `rgba(41, 131, 142, 0.25)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "0 4px 30px rgba(30, 52, 52, 0.06)";
                                    e.currentTarget.style.borderColor = "rgba(41, 131, 142, 0.08)";
                                }}
                            >
                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
                                    style={{ background: `linear-gradient(90deg, ${card.accent}, #29838E)` }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${card.accent}15, ${card.accent}08)`,
                                        color: card.accent,
                                        border: `1px solid ${card.accent}20`,
                                    }}
                                >
                                    <Icon size={28} />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl md:text-2xl font-heading font-bold mb-4 transition-colors duration-300"
                                    style={{ color: "#1E3434" }}
                                >
                                    {card.title}
                                </h3>

                                {/* Body */}
                                <p
                                    className="text-sm font-sans leading-relaxed"
                                    style={{ color: "#1E3434AA" }}
                                >
                                    {card.body}
                                </p>

                                {/* Decorative corner */}
                                <div
                                    className="absolute bottom-4 right-4 w-8 h-8 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${card.accent}, transparent)`,
                                        borderRadius: "4px",
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
