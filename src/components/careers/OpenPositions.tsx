
"use client";

import { useState } from "react";
import { careerData, Job } from "@/data/careers";
import { ArrowUpRight, MapPin, Clock, Briefcase } from "lucide-react";
import JobModal from "./JobModal";

export default function OpenPositions() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedJob(null), 300); // Clear after animation
    };

    return (
        <section id="open-positions" className="py-32 relative">
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div
                    className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
                    style={{
                        background: "radial-gradient(circle, color-mix(in srgb, var(--brand-blue) 5%, transparent) 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <span style={{ color: "var(--brand-cyan)", fontWeight: 600, letterSpacing: "0.05em" }} className="uppercase text-sm mb-4 block">
                            We are hiring
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold">
                            Open <span style={{ color: "var(--brand-blue)" }}>Positions</span>
                        </h2>
                    </div>
                    <p className="text-[var(--secondary-text)] text-lg max-w-md text-right md:text-left">
                        Join a team of forward-thinkers. Find the role where you can make the biggest impact.
                    </p>
                </div>

                <div className="grid gap-4">
                    {careerData.map((job) => (
                        <div
                            key={job.id}
                            onClick={() => handleJobClick(job)}
                            className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:border-[var(--brand-blue)] bg-[var(--card-bg)] cursor-pointer"
                            style={{ borderColor: "var(--border-color)" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--brand-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="space-y-4 flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[var(--brand-blue)] transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm md:text-base text-[var(--secondary-text)]">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" />
                                            {job.department}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {job.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <button
                                        className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:border-[var(--brand-blue)] group-hover:text-white"
                                        style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                                    >
                                        <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
                                    </button>

                                    {/* Mobile Button */}
                                    <button
                                        className="md:hidden w-full text-center py-3 rounded-xl font-semibold bg-[var(--brand-blue)] text-white"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedJob && (
                <JobModal
                    job={selectedJob}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
}
