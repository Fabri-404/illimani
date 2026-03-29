"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ArrowUp, Clock } from "lucide-react";
import Image from "next/image";

const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Quiénes Somos", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Asesoría", href: "#asesoria" },
];

const serviceLinks = [
    "Diseño Arquitectónico",
    "Ingeniería Estructural",
    "Construcción Integral",
    "Consultoría Técnica",
    "Topografía y Geodesia",
    "Planificación Urbana",
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            id="contacto"
            className="relative overflow-hidden"
            style={{ backgroundColor: "#0b1213" }}
        >
            {/* Top accent gradient line */}
            <div
                className="h-[2px] w-full"
                style={{ background: "linear-gradient(90deg, transparent, #29838E, #2C5A63, #29838E, transparent)" }}
            />

            {/* Main Footer Content */}
            <div className="py-16 md:py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Column 1: Brand */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <Image
                                    src={`${basePath}/img/illimaniblanco.png`}
                                    alt="Illimani Logo"
                                    width={140}
                                    height={45}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            <p className="text-sm font-sans text-white/50 leading-relaxed mb-6 max-w-sm">
                                Especialistas en transformar visiones en realidades estructurales.
                                Calidad, precisión y diseño de vanguardia en cada proyecto que emprendemos.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.04)",
                                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                                color: "rgba(255, 255, 255, 0.5)",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "rgba(41, 131, 142, 0.15)";
                                                e.currentTarget.style.borderColor = "rgba(41, 131, 142, 0.3)";
                                                e.currentTarget.style.color = "#29838E";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                                                e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                                            }}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4
                                className="font-heading font-bold text-sm uppercase tracking-[0.15em] mb-6"
                                style={{ color: "#29838E" }}
                            >
                                Enlaces
                            </h4>
                            <nav className="flex flex-col gap-3">
                                {quickLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm font-sans text-white/50 hover:text-accent transition-colors duration-300 w-fit flex items-center gap-2 group"
                                    >
                                        <span
                                            className="w-0 h-[1px] group-hover:w-3 transition-all duration-300"
                                            style={{ background: "#29838E" }}
                                        />
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Column 3: Services */}
                        <div>
                            <h4
                                className="font-heading font-bold text-sm uppercase tracking-[0.15em] mb-6"
                                style={{ color: "#29838E" }}
                            >
                                Servicios
                            </h4>
                            <nav className="flex flex-col gap-3">
                                {serviceLinks.map((service) => (
                                    <a
                                        key={service}
                                        href="#servicios"
                                        className="text-sm font-sans text-white/50 hover:text-accent transition-colors duration-300 w-fit flex items-center gap-2 group"
                                    >
                                        <span
                                            className="w-0 h-[1px] group-hover:w-3 transition-all duration-300"
                                            style={{ background: "#29838E" }}
                                        />
                                        {service}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Column 4: Contact */}
                        <div>
                            <h4
                                className="font-heading font-bold text-sm uppercase tracking-[0.15em] mb-6"
                                style={{ color: "#29838E" }}
                            >
                                Contacto
                            </h4>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3 text-sm font-sans text-white/50">
                                    <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "#29838E" }} />
                                    <span>
                                        Av. Inversión 1234, Torre Empresarial
                                        <br />
                                        Piso 15, La Paz, Bolivia
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-sans text-white/50">
                                    <Phone size={16} className="shrink-0" style={{ color: "#29838E" }} />
                                    <span>+591 2 2456789</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-sans text-white/50">
                                    <Mail size={16} className="shrink-0" style={{ color: "#29838E" }} />
                                    <a href="mailto:contacto@illimani.com" className="hover:text-accent transition-colors">
                                        contacto@illimani.com
                                    </a>
                                </div>
                                <div className="flex items-start gap-3 text-sm font-sans text-white/50">
                                    <Clock size={16} className="shrink-0 mt-0.5" style={{ color: "#29838E" }} />
                                    <span>
                                        Lun - Vie: 8:00 - 18:00
                                        <br />
                                        Sáb: 9:00 - 13:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.04)" }}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-sans text-white/30 text-center md:text-left">
                        © {new Date().getFullYear()} Illimani Constructora y Consultora. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-6 text-xs font-sans text-white/30">
                        <a href="#" className="hover:text-white/60 transition-colors">Términos</a>
                        <a href="#" className="hover:text-white/60 transition-colors">Privacidad</a>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-xl flex items-center justify-center z-40 transition-all duration-300 hover:-translate-y-1"
                style={{
                    background: "linear-gradient(135deg, #2C5A63, #29838E)",
                    boxShadow: "0 4px 20px rgba(41, 131, 142, 0.3)",
                    color: "white",
                }}
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    );
}
