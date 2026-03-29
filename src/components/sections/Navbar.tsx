"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Quiénes Somos", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 200) {
            setHidden(true);
            setMobileMenuOpen(false);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    // Track active section
    useEffect(() => {
        const sections = navLinks.map((l) => l.href.replace("#", ""));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -70% 0px" }
        );
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 z-50"
        >
            {/* Background — always solid white */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 1px 20px rgba(30, 52, 52, 0.06)",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#inicio" className="relative z-10 flex items-center gap-3">
                    <Image
                        src="/img/illimanilogo.gif"
                        alt="Illimani Logo"
                        width={150}
                        height={50}
                        className="h-12 w-auto object-contain"
                        unoptimized
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 group"
                            style={{
                                color: activeSection === link.href.replace("#", "")
                                    ? "#29838E"
                                    : "#1E3434",
                            }}
                        >
                            <span className="relative z-10 font-sans">{link.label}</span>
                            {/* Active indicator */}
                            {activeSection === link.href.replace("#", "") && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                                    style={{ background: "#29838E" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {/* Hover effect */}
                            <span
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: "rgba(41, 131, 142, 0.06)",
                                }}
                            />
                        </a>
                    ))}

                    {/* CTA Button */}
                    <a
                        href="#asesoria"
                        className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold font-heading uppercase tracking-wider transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, #2C5A63, #29838E)",
                            color: "white",
                            boxShadow: "0 4px 20px rgba(41, 131, 142, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 30px rgba(41, 131, 142, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(41, 131, 142, 0.3)";
                        }}
                    >
                        <Phone size={14} />
                        Asesoría
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden relative z-10 p-2 rounded-lg transition-colors"
                    style={{ color: "#1E3434" }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed inset-0 top-20 z-40"
                        style={{ backgroundColor: "rgba(30, 52, 52, 0.98)", backdropFilter: "blur(20px)" }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-6 pb-20">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="text-2xl font-heading font-bold text-white/90 hover:text-accent transition-colors"
                                    style={{
                                        color: activeSection === link.href.replace("#", "")
                                            ? "#29838E"
                                            : "rgba(255,255,255,0.85)",
                                    }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#asesoria"
                                onClick={() => setMobileMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="btn-illimani mt-6"
                            >
                                <Phone size={16} />
                                Solicitar Asesoría
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
