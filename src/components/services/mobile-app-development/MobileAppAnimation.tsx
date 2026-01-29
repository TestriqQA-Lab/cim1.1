"use client";

import { useEffect, useState } from "react";

export default function MobileAppAnimation() {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return (
        <div
            className="w-full h-full relative"
            role="img"
            aria-label="Animated illustration showing the mobile app development process: from design through coding, testing, and deployment to app stores"
        >
            <svg
                viewBox="0 0 400 480"
                className="w-full h-auto"
                style={{ maxHeight: "520px" }}
            >
                <defs>
                    {/* Gradients */}
                    <linearGradient id="maPhoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--brand-purple)" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0.03" />
                    </linearGradient>
                    <linearGradient id="maScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--card-bg)" />
                        <stop offset="100%" stopColor="var(--background)" />
                    </linearGradient>
                    <linearGradient id="maLiveGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--brand-purple)" />
                        <stop offset="100%" stopColor="var(--brand-blue)" />
                    </linearGradient>
                    <linearGradient id="maAppStoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#007AFF" />
                        <stop offset="100%" stopColor="#5856D6" />
                    </linearGradient>
                    <linearGradient id="maPlayStoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34A853" />
                        <stop offset="100%" stopColor="#4285F4" />
                    </linearGradient>
                    <filter id="maSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="var(--brand-purple)" floodOpacity="0.15" />
                    </filter>
                    <filter id="maGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Scene 1: Main Phone Frame */}
                <g className={reducedMotion ? "" : "ma-phone-frame"}>
                    {/* Phone Body */}
                    <rect
                        x="100" y="30" width="200" height="400"
                        rx="28" ry="28"
                        fill="url(#maPhoneGrad)"
                        stroke="var(--brand-purple)"
                        strokeWidth="3"
                        strokeOpacity="0.4"
                        filter="url(#maSoftShadow)"
                    />

                    {/* Phone Screen */}
                    <rect
                        x="112" y="55" width="176" height="350"
                        rx="8" ry="8"
                        fill="url(#maScreenGrad)"
                        stroke="var(--border-color)"
                        strokeWidth="1"
                    />

                    {/* Notch */}
                    <rect
                        x="165" y="55" width="70" height="22"
                        rx="11" ry="11"
                        fill="var(--brand-purple)"
                        fillOpacity="0.15"
                    />
                    <circle cx="200" cy="66" r="5" fill="var(--secondary-text)" opacity="0.4" />

                    {/* Home Indicator */}
                    <rect
                        x="170" y="390" width="60" height="5"
                        rx="2.5" ry="2.5"
                        fill="var(--secondary-text)"
                        opacity="0.3"
                    />

                    {/* Screen Grid */}
                    <g className={reducedMotion ? "" : "ma-grid"} opacity="0.2">
                        {[0, 1, 2, 3].map((i) => (
                            <line
                                key={`v${i}`}
                                x1={130 + i * 45}
                                y1="85"
                                x2={130 + i * 45}
                                y2="380"
                                stroke="var(--brand-purple)"
                                strokeWidth="0.5"
                                strokeDasharray="3,3"
                            />
                        ))}
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                            <line
                                key={`h${i}`}
                                x1="118"
                                y1={95 + i * 42}
                                x2="282"
                                y2={95 + i * 42}
                                stroke="var(--brand-purple)"
                                strokeWidth="0.5"
                                strokeDasharray="3,3"
                            />
                        ))}
                    </g>
                </g>

                {/* Scene 2: App Structure - Header, Content, Nav */}
                <g className={reducedMotion ? "" : "ma-app-structure"}>
                    {/* Status Bar */}
                    <rect
                        className={reducedMotion ? "" : "ma-statusbar"}
                        x="118" y="80" width="164" height="18"
                        rx="2" ry="2"
                        fill="var(--brand-purple)"
                        fillOpacity="0.08"
                    />
                    <text
                        className={reducedMotion ? "" : "ma-time"}
                        x="128" y="92"
                        fontSize="8"
                        fill="var(--secondary-text)"
                        fontFamily="sans-serif"
                        fontWeight="600"
                    >
                        9:41
                    </text>
                    <g className={reducedMotion ? "" : "ma-statusicons"}>
                        <rect x="250" y="84" width="12" height="8" rx="1" fill="var(--secondary-text)" opacity="0.5" />
                        <rect x="252" y="86" width="8" height="4" rx="0.5" fill="var(--brand-purple)" opacity="0.6" />
                    </g>

                    {/* App Header */}
                    <rect
                        className={reducedMotion ? "" : "ma-header"}
                        x="118" y="100" width="164" height="45"
                        fill="var(--brand-purple)"
                        fillOpacity="0.12"
                    />
                    <text
                        className={reducedMotion ? "" : "ma-header-text"}
                        x="128" y="128"
                        fontSize="14"
                        fill="var(--brand-purple)"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                    >
                        My App
                    </text>

                    {/* Hero Card */}
                    <rect
                        className={reducedMotion ? "" : "ma-hero-card"}
                        x="125" y="155" width="150" height="70"
                        rx="8" ry="8"
                        fill="var(--brand-blue)"
                        fillOpacity="0.1"
                        stroke="var(--brand-blue)"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                    />
                    <text
                        className={reducedMotion ? "" : "ma-hero-title"}
                        x="135" y="180"
                        fontSize="11"
                        fill="var(--foreground)"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                        opacity="0.8"
                    >
                        Welcome Back
                    </text>
                    <rect
                        className={reducedMotion ? "" : "ma-hero-btn"}
                        x="135" y="195"
                        width="60" height="20"
                        rx="10"
                        fill="var(--brand-purple)"
                        fillOpacity="0.25"
                    />

                    {/* Content Cards */}
                    <rect
                        className={reducedMotion ? "" : "ma-card1"}
                        x="125" y="235" width="68" height="55"
                        rx="6" ry="6"
                        fill="var(--brand-purple)"
                        fillOpacity="0.08"
                        stroke="var(--brand-purple)"
                        strokeWidth="0.5"
                        strokeOpacity="0.2"
                    />
                    <rect
                        className={reducedMotion ? "" : "ma-card2"}
                        x="207" y="235" width="68" height="55"
                        rx="6" ry="6"
                        fill="var(--brand-purple)"
                        fillOpacity="0.08"
                        stroke="var(--brand-purple)"
                        strokeWidth="0.5"
                        strokeOpacity="0.2"
                    />

                    {/* List Items */}
                    <rect
                        className={reducedMotion ? "" : "ma-list1"}
                        x="125" y="300" width="150" height="28"
                        rx="4" ry="4"
                        fill="var(--card-bg)"
                        stroke="var(--border-color)"
                        strokeWidth="0.5"
                    />
                    <rect
                        className={reducedMotion ? "" : "ma-list2"}
                        x="125" y="332" width="150" height="28"
                        rx="4" ry="4"
                        fill="var(--card-bg)"
                        stroke="var(--border-color)"
                        strokeWidth="0.5"
                    />

                    {/* Bottom Navigation */}
                    <rect
                        className={reducedMotion ? "" : "ma-navbar"}
                        x="118" y="365" width="164" height="40"
                        fill="var(--brand-purple)"
                        fillOpacity="0.06"
                    />
                    <g className={reducedMotion ? "" : "ma-nav-icons"}>
                        <circle cx="145" cy="380" r="8" fill="var(--brand-purple)" fillOpacity="0.2" />
                        <circle cx="185" cy="380" r="8" fill="var(--brand-purple)" fillOpacity="0.4" />
                        <circle cx="225" cy="380" r="8" fill="var(--brand-purple)" fillOpacity="0.2" />
                        <circle cx="265" cy="380" r="8" fill="var(--brand-purple)" fillOpacity="0.2" />
                    </g>
                </g>

                {/* Scene 3: UI Styling Elements */}
                <g className={reducedMotion ? "" : "ma-styling"}>
                    {/* Color Palette */}
                    <g className="ma-colors">
                        <rect x="295" y="80" width="10" height="10" rx="2" fill="var(--brand-purple)" />
                        <rect x="308" y="80" width="10" height="10" rx="2" fill="var(--brand-blue)" />
                        <rect x="321" y="80" width="10" height="10" rx="2" fill="var(--brand-teal)" />
                    </g>

                    {/* Typography Sample */}
                    <text className="ma-typo" x="295" y="110" fontSize="7" fill="var(--secondary-text)" fontFamily="monospace">
                        Aa Bb
                    </text>
                </g>

                {/* Scene 4: Code & Logic */}
                <g className={reducedMotion ? "" : "ma-code"}>
                    {/* Code Block */}
                    <g className="ma-code-block">
                        <rect x="20" y="140" width="70" height="80" rx="4" fill="var(--card-bg)" stroke="var(--border-color)" strokeWidth="0.5" />
                        <text x="28" y="158" fontSize="6" fill="var(--brand-purple)" fontFamily="monospace">const App</text>
                        <text x="28" y="170" fontSize="6" fill="var(--secondary-text)" fontFamily="monospace">  return (</text>
                        <text x="28" y="182" fontSize="6" fill="var(--brand-blue)" fontFamily="monospace">    &lt;View&gt;</text>
                        <text x="28" y="194" fontSize="6" fill="var(--brand-teal)" fontFamily="monospace">      ...</text>
                        <text x="28" y="206" fontSize="6" fill="var(--brand-blue)" fontFamily="monospace">    &lt;/View&gt;</text>
                    </g>

                    {/* Connector Lines */}
                    <g className="ma-connectors">
                        <path
                            d="M90 180 Q100 180 105 160 T118 155"
                            stroke="var(--brand-purple)"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="4,2"
                            opacity="0.5"
                        />
                        <circle cx="118" cy="155" r="3" fill="var(--brand-purple)" opacity="0.6" />
                    </g>
                </g>

                {/* Scene 5: Platform Adaptation - iOS & Android */}
                <g className={reducedMotion ? "" : "ma-platforms"}>
                    {/* iOS Mini Device */}
                    <g className="ma-ios-device" opacity="0">
                        <rect x="310" y="150" width="60" height="100" rx="10" fill="var(--card-bg)" stroke="var(--brand-purple)" strokeWidth="1" />
                        <rect x="316" y="162" width="48" height="76" rx="4" fill="var(--brand-purple)" fillOpacity="0.05" />
                        <text x="325" y="200" fontSize="6" fill="var(--brand-purple)" fontFamily="sans-serif" fontWeight="bold">iOS</text>
                    </g>

                    {/* Android Mini Device */}
                    <g className="ma-android-device" opacity="0">
                        <rect x="310" y="265" width="60" height="100" rx="10" fill="var(--card-bg)" stroke="var(--brand-teal)" strokeWidth="1" />
                        <rect x="316" y="277" width="48" height="76" rx="4" fill="var(--brand-teal)" fillOpacity="0.05" />
                        <text x="315" y="315" fontSize="6" fill="var(--brand-teal)" fontFamily="sans-serif" fontWeight="bold">Android</text>
                    </g>
                </g>

                {/* Scene 6: Interactions */}
                <g className={reducedMotion ? "" : "ma-interactions"}>
                    {/* Tap Ripple */}
                    <circle className="ma-ripple" cx="165" cy="205" r="0" fill="var(--brand-purple)" opacity="0" />

                    {/* Screen Transition Indicator */}
                    <rect className="ma-transition" x="125" y="155" width="0" height="70" rx="8" fill="var(--brand-blue)" opacity="0" />
                </g>

                {/* Scene 7: Performance */}
                <g className={reducedMotion ? "" : "ma-performance"}>
                    <g className="ma-perf-meters">
                        <text x="20" y="260" fontSize="6" fill="var(--secondary-text)" fontFamily="monospace">FPS</text>
                        <rect x="38" y="252" width="40" height="6" rx="1" fill="var(--border-color)" />
                        <rect className="ma-fps-bar" x="38" y="252" width="0" height="6" rx="1" fill="#28c840" />

                        <text x="20" y="275" fontSize="6" fill="var(--secondary-text)" fontFamily="monospace">MEM</text>
                        <rect x="38" y="267" width="40" height="6" rx="1" fill="var(--border-color)" />
                        <rect className="ma-mem-bar" x="38" y="267" width="0" height="6" rx="1" fill="#28c840" />
                    </g>
                    <text className="ma-perf-label" x="20" y="290" fontSize="6" fill="#28c840" fontFamily="monospace" opacity="0">
                        OPTIMIZED
                    </text>
                </g>

                {/* Scene 8: Validation */}
                <g className={reducedMotion ? "" : "ma-validation"}>
                    <g className="ma-check1" opacity="0">
                        <circle cx="270" cy="175" r="7" fill="#28c840" />
                        <path d="M266 175 L269 178 L274 172" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </g>
                    <g className="ma-check2" opacity="0">
                        <circle cx="270" cy="260" r="7" fill="#28c840" />
                        <path d="M266 260 L269 263 L274 257" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </g>
                    <g className="ma-check3" opacity="0">
                        <circle cx="270" cy="345" r="7" fill="#28c840" />
                        <path d="M266 345 L269 348 L274 342" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </g>
                </g>

                {/* Scene 9: Deployment - App Stores */}
                <g className={reducedMotion ? "" : "ma-deployment"}>
                    {/* App Store Icon */}
                    <g className="ma-appstore" opacity="0">
                        <rect x="20" y="320" width="35" height="35" rx="8" fill="url(#maAppStoreGrad)" />
                        <text x="30" y="343" fontSize="10" fill="white" fontWeight="bold">A</text>
                    </g>

                    {/* Play Store Icon */}
                    <g className="ma-playstore" opacity="0">
                        <rect x="20" y="365" width="35" height="35" rx="8" fill="url(#maPlayStoreGrad)" />
                        <polygon points="32,375 32,392 45,383.5" fill="white" />
                    </g>

                    {/* Deploy Arrow */}
                    <path className="ma-deploy-arrow" d="M75 360 L95 360" stroke="var(--brand-purple)" strokeWidth="2" opacity="0" markerEnd="url(#arrowhead)" />

                    {/* Shield/Lock */}
                    <g className="ma-shield" opacity="0">
                        <path d="M65 400 L65 415 A15 15 0 0 0 80 430 A15 15 0 0 0 95 415 L95 400 Z" fill="var(--brand-purple)" fillOpacity="0.2" stroke="var(--brand-purple)" strokeWidth="1" />
                        <path d="M76 412 L80 416 L88 408" stroke="var(--brand-purple)" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </g>
                </g>

                {/* Scene 10: Live Status */}
                <g className={reducedMotion ? "" : "ma-live"}>
                    <g className="ma-live-badge" opacity={reducedMotion ? "1" : "0"}>
                        <rect x="155" y="435" width="90" height="26" rx="13" fill="url(#maLiveGlow)" filter="url(#maGlow)" />
                        <circle cx="172" cy="448" r="5" fill="white">
                            {!reducedMotion && <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />}
                        </circle>
                        <text x="182" y="452" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">
                            LIVE
                        </text>
                    </g>
                </g>

                {/* Floating Code Snippets */}
                <g className={reducedMotion ? "" : "ma-snippets"}>
                    <g className="ma-snippet1" opacity="0">
                        <rect x="295" y="200" width="55" height="18" rx="3" fill="var(--card-bg)" stroke="var(--border-color)" strokeWidth="0.5" />
                        <text x="300" y="212" fontSize="6" fill="var(--brand-purple)" fontFamily="monospace">useState()</text>
                    </g>
                    <g className="ma-snippet2" opacity="0">
                        <rect x="295" y="225" width="55" height="18" rx="3" fill="var(--card-bg)" stroke="var(--border-color)" strokeWidth="0.5" />
                        <text x="300" y="237" fontSize="6" fill="var(--brand-blue)" fontFamily="monospace">API call</text>
                    </g>
                </g>
            </svg>

            {/* Animation Styles */}
            <style jsx>{`
                /* Scene Timing: 10s total loop */
                
                .ma-phone-frame {
                    opacity: 0;
                    animation: maFadeIn 1s ease-out forwards;
                }

                .ma-grid {
                    opacity: 0;
                    animation: maFadeIn 0.5s ease-out 0.5s forwards;
                }

                /* App Structure - Scene 2 */
                .ma-statusbar { opacity: 0; animation: maSlideDown 0.3s ease-out 1s forwards; }
                .ma-time { opacity: 0; animation: maFadeIn 0.2s ease-out 1.1s forwards; }
                .ma-statusicons { opacity: 0; animation: maFadeIn 0.2s ease-out 1.1s forwards; }
                .ma-header { opacity: 0; animation: maSlideDown 0.3s ease-out 1.2s forwards; }
                .ma-header-text { opacity: 0; animation: maFadeIn 0.2s ease-out 1.3s forwards; }
                .ma-hero-card { opacity: 0; animation: maSlideRight 0.3s ease-out 1.4s forwards; }
                .ma-hero-title { opacity: 0; animation: maFadeIn 0.2s ease-out 1.5s forwards; }
                .ma-hero-btn { opacity: 0; animation: maFadeIn 0.2s ease-out 1.6s forwards; }
                .ma-card1 { opacity: 0; animation: maSlideUp 0.3s ease-out 1.7s forwards; }
                .ma-card2 { opacity: 0; animation: maSlideUp 0.3s ease-out 1.8s forwards; }
                .ma-list1 { opacity: 0; animation: maSlideRight 0.3s ease-out 1.9s forwards; }
                .ma-list2 { opacity: 0; animation: maSlideRight 0.3s ease-out 2s forwards; }
                .ma-navbar { opacity: 0; animation: maSlideUp 0.3s ease-out 2.1s forwards; }
                .ma-nav-icons { opacity: 0; animation: maFadeIn 0.3s ease-out 2.2s forwards; }

                /* Styling - Scene 3 */
                .ma-colors { opacity: 0; animation: maFadeIn 0.3s ease-out 2.5s forwards; }
                .ma-typo { opacity: 0; animation: maFadeIn 0.3s ease-out 2.7s forwards; }

                /* Code - Scene 4 */
                .ma-code-block { opacity: 0; animation: maSlideRight 0.4s ease-out 3s forwards; }
                .ma-connectors { opacity: 0; animation: maFadeIn 0.4s ease-out 3.3s forwards; }

                /* Platforms - Scene 5 */
                .ma-ios-device { animation: maSlideLeft 0.4s ease-out 4s forwards; }
                .ma-android-device { animation: maSlideLeft 0.4s ease-out 4.3s forwards; }

                /* Interactions - Scene 6 */
                .ma-ripple { animation: maRipple 0.8s ease-out 4.8s forwards; }
                .ma-hero-btn { animation: maFadeIn 0.2s ease-out 1.6s forwards, maButtonPulse 0.6s ease-in-out 5s 2; }

                /* Performance - Scene 7 */
                .ma-fps-bar { animation: maGrowBar 0.4s ease-out 5.5s forwards; }
                .ma-mem-bar { animation: maGrowBar 0.4s ease-out 5.7s forwards; }
                .ma-perf-label { animation: maFadeIn 0.3s ease-out 6s forwards; }

                /* Validation - Scene 8 */
                .ma-check1 { animation: maPopIn 0.3s ease-out 6.5s forwards; }
                .ma-check2 { animation: maPopIn 0.3s ease-out 6.7s forwards; }
                .ma-check3 { animation: maPopIn 0.3s ease-out 6.9s forwards; }

                /* Deployment - Scene 9 */
                .ma-appstore { animation: maSlideUp 0.4s ease-out 7.5s forwards; }
                .ma-playstore { animation: maSlideUp 0.4s ease-out 7.8s forwards; }
                .ma-shield { animation: maPopIn 0.4s ease-out 8.2s forwards; }

                /* Live - Scene 10 */
                .ma-live-badge { animation: maFadeIn 0.5s ease-out 8.8s forwards, maGlowPulse 2s ease-in-out 9.2s infinite; }

                /* Snippets */
                .ma-snippet1 { animation: maFadeIn 0.3s ease-out 3.5s forwards; }
                .ma-snippet2 { animation: maFadeIn 0.3s ease-out 3.7s forwards; }

                /* Keyframes */
                @keyframes maFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes maSlideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes maSlideUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes maSlideRight {
                    from { opacity: 0; transform: translateX(-15px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes maSlideLeft {
                    from { opacity: 0; transform: translateX(15px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes maPopIn {
                    0% { opacity: 0; transform: scale(0); }
                    70% { opacity: 1; transform: scale(1.2); }
                    100% { opacity: 1; transform: scale(1); }
                }

                @keyframes maGrowBar {
                    from { width: 0; }
                    to { width: 36px; }
                }

                @keyframes maRipple {
                    0% { r: 0; opacity: 0.6; }
                    100% { r: 25; opacity: 0; }
                }

                @keyframes maButtonPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.08); }
                }

                @keyframes maGlowPulse {
                    0%, 100% { filter: url(#maGlow) brightness(1); }
                    50% { filter: url(#maGlow) brightness(1.15); }
                }

                /* Reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .ma-phone-frame,
                    .ma-grid,
                    .ma-statusbar,
                    .ma-time,
                    .ma-statusicons,
                    .ma-header,
                    .ma-header-text,
                    .ma-hero-card,
                    .ma-hero-title,
                    .ma-hero-btn,
                    .ma-card1,
                    .ma-card2,
                    .ma-list1,
                    .ma-list2,
                    .ma-navbar,
                    .ma-nav-icons,
                    .ma-colors,
                    .ma-typo,
                    .ma-code-block,
                    .ma-connectors,
                    .ma-ios-device,
                    .ma-android-device,
                    .ma-fps-bar,
                    .ma-mem-bar,
                    .ma-perf-label,
                    .ma-check1,
                    .ma-check2,
                    .ma-check3,
                    .ma-appstore,
                    .ma-playstore,
                    .ma-shield,
                    .ma-live-badge,
                    .ma-snippet1,
                    .ma-snippet2 {
                        animation: none !important;
                        opacity: 1 !important;
                    }
                    .ma-fps-bar,
                    .ma-mem-bar {
                        width: 36px !important;
                    }
                    .ma-ripple {
                        animation: none !important;
                    }
                }
            `}</style>
        </div>
    );
}
