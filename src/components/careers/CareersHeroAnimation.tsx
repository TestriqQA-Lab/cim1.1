"use client";

import { useEffect, useState } from "react";

export default function CareersHeroAnimation() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden select-none pointer-events-none"
            aria-hidden="true"
        >

            <style jsx>{`
                @keyframes progress-fill {
                    0% { width: 0%; }
                    33% { width: 33%; }
                    66% { width: 66%; }
                    100% { width: 100%; }
                }
                @keyframes step-activate {
                    0%, 100% { transform: scale(1); opacity: 0.5; filter: grayscale(1); }
                    10%, 90% { transform: scale(1.1); opacity: 1; filter: grayscale(0); }
                }
                @keyframes card-float {
                    0% { transform: translateY(10px); opacity: 0; }
                    10% { transform: translateY(0px); opacity: 1; }
                    90% { transform: translateY(0px); opacity: 1; }
                    100% { transform: translateY(-10px); opacity: 0; }
                }
                @keyframes check-draw {
                    0% { stroke-dashoffset: 20; }
                    100% { stroke-dashoffset: 0; }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
            `}</style>

            <svg
                viewBox="0 0 800 500"
                className="w-full h-full max-w-[800px]"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="grad-timeline" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#008ac1" />
                        <stop offset="50%" stopColor="#bc3feb" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <filter id="glow-soft" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* --- Timeline Track --- */}
                <g transform="translate(150, 250)">
                    {/* Background Line */}
                    <rect x="0" y="-2" width="500" height="4" rx="2" fill="#1e293b" />

                    {/* Active Progress Line */}
                    <rect x="0" y="-2" width="0" height="4" rx="2" fill="url(#grad-timeline)">
                        <animate attributeName="width" values="0; 166; 333; 500; 500; 0" keyTimes="0; 0.3; 0.6; 0.9; 0.95; 1" dur="9s" repeatCount="indefinite" />
                    </rect>

                    {/* --- Step 1: Application --- */}
                    <g transform="translate(0, 0)">
                        <circle cx="0" cy="0" r="24" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                        <g style={{ animation: "step-activate 9s linear infinite", animationDelay: "0s" }}>
                            <circle cx="0" cy="0" r="24" fill="#0f172a" stroke="#008ac1" strokeWidth="2" filter="url(#glow-soft)" />
                            <circle cx="0" cy="0" r="24" fill="#008ac1" opacity="0.2">
                                <animate attributeName="r" values="24; 36" dur="1s" repeatCount="indefinite" begin="0s" />
                                <animate attributeName="opacity" values="0.2; 0" dur="1s" repeatCount="indefinite" begin="0s" />
                            </circle>
                            {/* Icon: Document */}
                            <path d="M-8 -10 H8 V10 H-8 Z" fill="none" stroke="#00efd6" strokeWidth="2" rx="2" />
                            <path d="M-4 -4 H4 M-4 0 H4 M-4 4 H2" stroke="#00efd6" strokeWidth="1.5" />
                        </g>
                        {/* Text Label */}
                        <text x="0" y="45" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="500" style={{ animation: "step-activate 9s linear infinite" }}>Application</text>
                    </g>

                    {/* --- Step 2: Interview --- */}
                    <g transform="translate(250, 0)">
                        <circle cx="0" cy="0" r="24" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                        <g style={{ animation: "step-activate 9s linear infinite", animationDelay: "3s" }}>
                            <circle cx="0" cy="0" r="24" fill="#0f172a" stroke="#bc3feb" strokeWidth="2" filter="url(#glow-soft)" />
                            <circle cx="0" cy="0" r="24" fill="#bc3feb" opacity="0.2">
                                <animate attributeName="r" values="24; 36" dur="1s" repeatCount="indefinite" begin="3s" />
                                <animate attributeName="opacity" values="0.2; 0" dur="1s" repeatCount="indefinite" begin="3s" />
                            </circle>
                            {/* Icon: Chat / Interview */}
                            <path d="M-10 -4 L0 8 L10 -4" fill="none" stroke="#e879f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="-8" y="-8" width="16" height="12" rx="2" stroke="#e879f9" strokeWidth="2" fill="none" />
                        </g>
                        <text x="0" y="45" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="500" style={{ animation: "step-activate 9s linear infinite", animationDelay: "3s" }}>Interview</text>
                    </g>

                    {/* --- Step 3: Selected / Offer --- */}
                    <g transform="translate(500, 0)">
                        <circle cx="0" cy="0" r="24" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                        <g style={{ animation: "step-activate 9s linear infinite", animationDelay: "6s" }}>
                            <circle cx="0" cy="0" r="24" fill="#0f172a" stroke="#10b981" strokeWidth="2" filter="url(#glow-soft)" />
                            <circle cx="0" cy="0" r="24" fill="#10b981" opacity="0.2">
                                <animate attributeName="r" values="24; 36" dur="1s" repeatCount="indefinite" begin="6s" />
                                <animate attributeName="opacity" values="0.2; 0" dur="1s" repeatCount="indefinite" begin="6s" />
                            </circle>
                            {/* Icon: Checkmark / Star */}
                            <path d="M-8 0 L-2 6 L8 -6" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <animate attributeName="stroke-dasharray" values="0,20; 20,0" dur="0.5s" fill="freeze" begin="6s" />
                            </path>
                        </g>
                        <text x="0" y="45" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="500" style={{ animation: "step-activate 9s linear infinite", animationDelay: "6s" }}>Selected!</text>
                    </g>
                </g>

                {/* --- Floating Context Cards (The "Toast" Notifications) --- */}

                {/* 1. Application Received */}
                <g transform="translate(150, 180)" style={{ opacity: 0 }}>
                    <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin="0s" repeatCount="indefinite" />
                    <animateTransform attributeName="transform" type="translate" values="150,190; 150,180; 150,180; 150,170" dur="3s" begin="0s" repeatCount="indefinite" />

                    <rect x="-90" y="-20" width="180" height="40" rx="20" fill="#0f172a" stroke="rgba(0,138,193,0.5)" strokeWidth="1" filter="url(#glow-soft)" />
                    <circle cx="-70" cy="0" r="4" fill="#008ac1" />
                    <text x="-55" y="5" fontFamily="sans-serif" fontSize="12" fill="#e2e8f0" fontWeight="600">Resume Reviewed</text>
                </g>

                {/* 2. Interview Scheduled */}
                <g transform="translate(400, 180)" style={{ opacity: 0 }}>
                    <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin="3s" repeatCount="indefinite" />
                    <animateTransform attributeName="transform" type="translate" values="400,190; 400,180; 400,180; 400,170" dur="3s" begin="3s" repeatCount="indefinite" />

                    <rect x="-100" y="-20" width="200" height="40" rx="20" fill="#0f172a" stroke="rgba(188,63,235,0.5)" strokeWidth="1" filter="url(#glow-soft)" />
                    <circle cx="-80" cy="0" r="4" fill="#bc3feb" />
                    <text x="-65" y="5" fontFamily="sans-serif" fontSize="12" fill="#e2e8f0" fontWeight="600">Technical Interview</text>
                </g>

                {/* 3. Offer Letter */}
                <g transform="translate(650, 180)" style={{ opacity: 0 }}>
                    <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin="6s" repeatCount="indefinite" />
                    <animateTransform attributeName="transform" type="translate" values="650,190; 650,180; 650,180; 650,170" dur="3s" begin="6s" repeatCount="indefinite" />

                    <rect x="-90" y="-20" width="180" height="40" rx="20" fill="#0f172a" stroke="rgba(16,185,129,0.5)" strokeWidth="1" filter="url(#glow-soft)" />
                    <circle cx="-70" cy="0" r="4" fill="#10b981" />
                    <text x="-55" y="5" fontFamily="sans-serif" fontSize="12" fill="#e2e8f0" fontWeight="600">You're Hired!</text>
                </g>

            </svg>
        </div>
    );
}
