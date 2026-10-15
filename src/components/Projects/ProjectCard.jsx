import React from 'react';
import styles from './ProjectCard.module.css';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const ProjectCard = ({ project: { imageSrc, title, description, skills, demo, source } }) => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'xnlxwmb1'
        }
    });

    const snap = cld.image(imageSrc);

    return (
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all group">
            <a href={demo} className="mb-4 w-full">
                <AdvancedImage cldImg={snap}
                    alt={`${title} image`}
                    className="h-40 object-cover" />

            </a>
            <div className="">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {description}
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                    {
                        skills.map((skill, id) => {
                            return (
                                <li key={id} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-400 font-medium ">
                                    {skill}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a href={source} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                        <FaGithub className="w-4 h-4" /> Source
                    </a>
                    <a href={demo} className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline ml-auto">
                        Live Preview <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
