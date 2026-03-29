"use client";

import { motion } from "motion/react";
import { Phone, Mail, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const benefits = [
    "Evaluación gratuita de tu proyecto",
    "Presupuesto personalizado sin compromiso",
    "Asesoría experta de profesionales certificados",
    "Respuesta en menos de 24 horas",
];

export function CTA() {
    return (
        <section
            id="asesoria"
            className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #1E3434, #2C5A63, #1E3434)",
            }}
        >
            {/* Animated background shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.06]"
                    style={{ background: "radial-gradient(circle, #29838E, transparent 70%)" }}
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.08]"
                    style={{ background: "radial-gradient(circle, #29838E, transparent 70%)" }}
                />
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles size={18} style={{ color: "#29838E" }} />
                            <span className="text-sm font-bold uppercase tracking-[0.25em] font-heading" style={{ color: "#29838E" }}>
                                Comienza tu proyecto
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
                            ¿LISTO PARA{" "}
                            <span style={{ color: "#29838E" }}>CONSTRUIR</span>{" "}
                            TU VISIÓN?
                        </h2>

                        <p className="text-base font-sans text-white/60 leading-relaxed mb-8 max-w-lg">
                            Solicita una asesoría sin compromiso. Nuestro equipo de expertos evaluará tu proyecto
                            y te brindará una propuesta personalizada para hacerlo realidad.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-4 mb-10">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 size={18} style={{ color: "#29838E" }} className="shrink-0" />
                                    <span className="text-sm font-sans text-white/80">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+59122456789"
                                className="btn-illimani-filled flex items-center justify-center gap-2"
                            >
                                <Phone size={16} />
                                Llamar Ahora
                            </a>
                            <a
                                href="mailto:contacto@illimani.com"
                                className="btn-illimani flex items-center justify-center gap-2"
                            >
                                <Mail size={16} />
                                Enviar Correo
                            </a>
                        </div>
                    </motion.div>

                    {/* Right - Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div
                            className="rounded-2xl p-8 md:p-10"
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                        >
                            <h3 className="text-xl font-heading font-bold text-white mb-2">
                                Solicitar Asesoría Gratuita
                            </h3>
                            <p className="text-sm font-sans text-white/50 mb-8">
                                Completa el formulario y nos pondremos en contacto contigo
                            </p>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nombre completo"
                                        className="w-full px-4 py-3.5 rounded-lg text-sm font-sans text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:ring-2"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.06)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = "#29838E";
                                            e.target.style.boxShadow = "0 0 0 2px rgba(41, 131, 142, 0.2)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        className="w-full px-4 py-3.5 rounded-lg text-sm font-sans text-white placeholder:text-white/30 outline-none transition-all duration-300"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.06)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = "#29838E";
                                            e.target.style.boxShadow = "0 0 0 2px rgba(41, 131, 142, 0.2)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Teléfono / WhatsApp"
                                        className="w-full px-4 py-3.5 rounded-lg text-sm font-sans text-white placeholder:text-white/30 outline-none transition-all duration-300"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.06)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = "#29838E";
                                            e.target.style.boxShadow = "0 0 0 2px rgba(41, 131, 142, 0.2)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>
                                <div>
                                    <select
                                        className="w-full px-4 py-3.5 rounded-lg text-sm font-sans text-white/50 outline-none transition-all duration-300 appearance-none cursor-pointer"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.06)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = "#29838E";
                                            e.target.style.boxShadow = "0 0 0 2px rgba(41, 131, 142, 0.2)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    >
                                        <option value="" style={{ background: "#1E3434" }}>Tipo de proyecto</option>
                                        <option value="residencial" style={{ background: "#1E3434" }}>Residencial</option>
                                        <option value="comercial" style={{ background: "#1E3434" }}>Comercial</option>
                                        <option value="infraestructura" style={{ background: "#1E3434" }}>Infraestructura</option>
                                        <option value="consultoria" style={{ background: "#1E3434" }}>Consultoría</option>
                                        <option value="otro" style={{ background: "#1E3434" }}>Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Describe brevemente tu proyecto..."
                                        rows={3}
                                        className="w-full px-4 py-3.5 rounded-lg text-sm font-sans text-white placeholder:text-white/30 outline-none transition-all duration-300 resize-none"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.06)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = "#29838E";
                                            e.target.style.boxShadow = "0 0 0 2px rgba(41, 131, 142, 0.2)";
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                                            e.target.style.boxShadow = "none";
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-lg text-sm font-heading font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        background: "linear-gradient(135deg, #2C5A63, #29838E)",
                                        boxShadow: "0 4px 20px rgba(41, 131, 142, 0.3)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(41, 131, 142, 0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(41, 131, 142, 0.3)";
                                    }}
                                >
                                    Solicitar Asesoría
                                    <ArrowRight size={16} />
                                </button>
                            </form>

                            {/* WhatsApp option */}
                            <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                                <a
                                    href="#"
                                    className="flex items-center justify-center gap-3 py-3 rounded-lg text-sm font-sans font-medium transition-all duration-300 group"
                                    style={{ background: "rgba(37, 211, 102, 0.1)", color: "#25D366" }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(37, 211, 102, 0.2)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "rgba(37, 211, 102, 0.1)";
                                    }}
                                >
                                    <MessageCircle size={18} />
                                    <span>También puedes escribirnos por WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
