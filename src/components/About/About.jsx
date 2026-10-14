import React from 'react';
import { aboutImage, cursorIcon, dev } from '../../utils';
import styles from './About.module.css';
import { Code2, Cpu, Globe, Rocket, UserCheck } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Code2 className="w-5 h-5 text-cyan-500" />,
            title: "Clean & Maintainable Code",
            description: "I prioritize writing modular, well-tested, and self-documenting code built to scale."
        },
        {
            icon: <Cpu className="w-5 h-5 text-cyan-500" />,
            title: "Full-Stack Architecture",
            description: "Experienced in designing end-to-end systems from responsive UIs to resilient backend APIs."
        },
        {
            icon: <Globe className="w-5 h-5 text-cyan-500" />,
            title: "Performance & UX First",
            description: "Obsessed with optimizing page speeds, accessibility standards, and intuitive design."
        },
        {
            icon: <Rocket className="w-5 h-5 text-cyan-500" />,
            title: "Continuous Innovation",
            description: "Always exploring emerging web standards, modern tooling, and modern dev patterns."
        }
    ];

    const stats = [
        { value: "2+", label: "Years Experience" },
        { value: "15+", label: "Projects Completed" },
        { value: "99.9%", label: "Commitment to Uptime" }
    ];
    return (
        // <section className={styles.container} id='about'>
        <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/60 bg-slate-100/60 dark:bg-slate-900/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* Section Title */}
                <div className="flex items-center gap-2 mb-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-wide uppercase">
                    {/* <UserCheck className="w-4 h-4" /> */}
                    <span>01. About Me</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                    Architecting robust digital products with purpose.
                </h2>

                {/* Bio & Intro Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">

                    {/* Main Narrative */}
                    <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                        <p>
                            I’m <strong className="text-slate-900 dark:text-white">Collins Makui</strong>, a Software Engineer passionate about solving real-world problems through clean, efficient software. My work spans web application design, API integration, database architecture, and frontend systems.
                        </p>
                        <p>
                            Whether working on high-traffic platforms or building new products from scratch, I focus on building reliable software that delivers genuine value to users.
                        </p>
                        <p>
                            When I'm not writing code, you can find me exploring new open-source technologies, reading tech articles, or refining software workflows.
                        </p>
                    </div>

                    {/* Quick Stats Card */}
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                            At a Glance
                        </h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-500">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Principles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-5 rounded-xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                        >
                            <div className="p-2 rounded-lg bg-cyan-500/10 w-fit mb-4">
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                                {item.title}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default About
