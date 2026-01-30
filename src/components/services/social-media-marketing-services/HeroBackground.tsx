import React from "react";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div
                className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                style={{
                    backgroundColor: "color-mix(in srgb, var(--brand-teal) 12%, transparent)",
                }}
            />
            <div
                className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                style={{
                    backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                    animationDelay: "1s",
                }}
            />
            <div
                className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                style={{
                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                    animationDelay: "2s",
                }}
            />
        </div>
    );
}
