/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";

const buildKeyframes = (from: any, steps: any[]) => {
    const keys = new Set([
        ...Object.keys(from),
        ...steps.flatMap((s) => Object.keys(s)),
    ]);
    const keyframes: Record<string, any[]> = {};
    keys.forEach((k) => {
        keyframes[k] = [from[k], ...steps.map((s) => s[k] ?? from[k])];
    });
    return keyframes;
};

interface BlurTextProps {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: "words" | "letters";
    direction?: "top" | "bottom";
    threshold?: number;
    rootMargin?: string;
    animationFrom?: any;
    animationTo?: any[];
    easing?: any;
    onAnimationComplete?: () => void;
    stepDuration?: number;
}

const BlurText = ({
    text = "",
    delay = 200,
    className = "",
    animateBy = "words",
    direction = "top",
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    easing = (t: any) => t,
    onAnimationComplete,
    stepDuration = 0.35,
}: BlurTextProps) => {
    const elements = animateBy === "words" ? text.split(" ") : text.split("");
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const defaultFrom = useMemo(
        () =>
            direction === "top"
                ? { filter: "blur(10px)", opacity: 0, y: -50 }
                : { filter: "blur(10px)", opacity: 0, y: 50 },
        [direction]
    );

    const defaultTo = useMemo(
        () => [
            { filter: "blur(5px)", opacity: 0.5, y: direction === "top" ? 5 : -5 },
            { filter: "blur(0px)", opacity: 1, y: 0 },
        ],
        [direction]
    );

    return (
        <p
            ref={ref}
            className={className}
            style={{ display: "flex", flexWrap: "wrap" }}
        >
            {elements.map((segment, index) => (
                <motion.span
                    key={index}
                    initial={animationFrom ?? defaultFrom}
                    animate={
                        inView
                            ? buildKeyframes(
                                animationFrom ?? defaultFrom,
                                animationTo ?? defaultTo
                            )
                            : animationFrom ?? defaultFrom
                    }
                    transition={{
                        duration: stepDuration * 2,
                        delay: (index * delay) / 1000,
                        ease: easing,
                    }}
                    className="inline-block"
                    onAnimationComplete={
                        index === elements.length - 1 ? onAnimationComplete : undefined
                    }
                >
                    {segment === " " ? "\u00A0" : segment}
                    {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </p>
    );
};

export default BlurText;
