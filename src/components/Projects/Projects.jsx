import React from 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';


const Projects = () => {
    return (
        <section className="w-full py-8 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 " id='projects'>
            <div className="max-w-7xl mx-auto px-4 sm-px-6 lg:px-10">
                <div class="max-w-3xl mx-auto text-center mb-10 ">
                    <h2 class="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">03. Showcase</h2>
                    <h3 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Featured Projects</h3>
                    <p class="text-slate-600 :text-slate-400 mt-3 text-sm">A selection of recent applications built with modern tools and clean architecture.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        projects.map((project, id) => {
                            return (
                                <ProjectCard key={id} project={project} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
